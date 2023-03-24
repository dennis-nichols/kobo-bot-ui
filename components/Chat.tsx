import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ChatMessage from "./ChatMessage";
import ChatButton from "./ChatButton";

interface Message {
  role: string;
  content: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log("clicked");
    if (input.trim() === "") return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages([...messages, userMessage]);
    setLoading(true);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;

    try {
      const response = await axios.post(apiUrl, {
        messages: [...messages, userMessage],
      });

      const assistantMessage: Message = response.data.messages.slice(-1)[0];
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }

    setInput("");
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage(event);
    }
  };

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      if (messages.length === 0) {
        messagesContainerRef.current.style.height = "0";
      } else {
        messagesContainerRef.current.style.height = "auto";
        const lastMessageElement =
          messagesContainerRef.current.lastElementChild;
        if (lastMessageElement) {
          lastMessageElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [messages]);

  return (
    <div className="container mx-auto p-4 flex flex-col min-h-screen justify-center">
      <div ref={messagesContainerRef} className="mb-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-4/5"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message here... Pressing Enter to send is supported."
        />

        <ChatButton loading={loading} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default Chat;
