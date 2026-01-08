"use client";

import { FaCommentDots } from "react-icons/fa";

export default function ChatWidget() {
  const handleChatClick = () => {
    alert("Chat feature coming soon! Get ready to connect with Mike.");
  };

  return (
    <div
      onClick={handleChatClick}
      className="fixed bottom-8 right-8 bg-purple text-white py-4 px-7 rounded-full flex items-center gap-3 font-semibold text-base cursor-pointer shadow-[0_4px_20px_rgba(163,118,255,0.4)] transition-all duration-300 hover:bg-purple-dark hover:-translate-y-1 hover:shadow-[0_6px_25px_rgba(163,118,255,0.5)] z-[999]"
    >
      <FaCommentDots className="text-[1.3rem]" />
      <span>Chat with Mike</span>
    </div>
  );
}
