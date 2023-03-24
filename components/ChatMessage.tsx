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
    "px-4 py-2 mb-2 text-white rounded-lg break-words",
    {
      "bg-green-500": message.role === "user",
      "bg-blue-500": message.role === "assistant",
    }
  );

  return <div className={messageClass}>{message.content}</div>;
};

export default ChatMessage;
