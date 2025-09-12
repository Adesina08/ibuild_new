import { useEffect, useState, type KeyboardEvent } from "react";
import {
  MessageCircle,
  Paperclip,
  Send,
  Smile,
  X,
} from "lucide-react";

interface Message {
  id: number;
  from: "user" | "bot";
  text: string;
}

const ChatButton = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: prev.length, from: "user", text: input },
    ]);
    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        { id: 0, from: "bot", text: "Hello, How can we help you today?" },
      ]);
    }
  }, [open, messages.length]);

  return (
    <>
      {open && (
        <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 md:bottom-28 md:right-8 z-50 w-80 sm:w-96 bg-white dark:bg-ibuild-dark border-2 border-ibuild-red rounded-lg shadow-soft flex flex-col">
          <div className="flex items-center justify-between bg-ibuild-red text-white px-4 py-2 rounded-t-lg">
            <span>iBUILD Online Chat</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={
                  msg.from === "bot" ? "flex justify-start" : "flex justify-end"
                }
              >
                <div
                  className={`rounded-lg px-3 py-2 text-sm max-w-[75%] ${
                    msg.from === "bot"
                      ? "bg-ibuild-red text-white dark:bg-ibuild-red"
                      : "bg-ibuild-light-gray dark:bg-ibuild-darker dark:text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 border-t dark:border-ibuild-darker p-2">
            <button aria-label="Add attachment" className="text-ibuild-red">
              <Paperclip className="w-5 h-5" />
            </button>
            <button aria-label="Add emoji" className="text-ibuild-red">
              <Smile className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask your Question?"
              className="flex-1 border rounded px-2 py-1 text-sm focus:outline-none dark:bg-ibuild-darker dark:border-ibuild-gray dark:text-white"
            />
            <button
              onClick={handleSend}
              aria-label="Send message"
              className="text-ibuild-red"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
      <button
        aria-label="Chat with us"
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center rounded-full bg-white dark:bg-ibuild-dark border-2 border-ibuild-red shadow-soft w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
      >
        <MessageCircle
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-ibuild-red"
          fill="currentColor"
        />
      </button>
    </>
  );
};

export default ChatButton;
