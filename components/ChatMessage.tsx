import React from "react";
import classNames from "classnames";

interface ChatMessageProps {
  message: {
    role: string;
    content: string;
  };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const messageClass = classNames(
    "px-4 py-2 mb-2 text-white rounded-lg break-words text-left font-mono",
    {
      "bg-emerald-500": message.role === "user",
      "bg-sky-500 ": message.role === "assistant",
    }
  );
  console.log(message.content)
  return <div className={messageClass}>{message.content}</div>;
};

export default ChatMessage;
