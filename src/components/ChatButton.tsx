import { MessageCircle } from "lucide-react";

const ChatButton = () => {
  return (
    <button
      aria-label="Chat with us"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center rounded-full bg-white border-2 border-ibuild-red shadow-soft w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
    >
      <MessageCircle
        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-ibuild-red"
        fill="currentColor"
      />
    </button>
  );
};

export default ChatButton;
