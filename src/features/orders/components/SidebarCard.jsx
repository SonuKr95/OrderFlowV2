import { useState } from "react";

export default function SidebarCard({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-md backdrop-blur-xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-white/10"
      >
        <span className="text-sm font-semibold text-gray-200">{title}</span>
        <span className="text-lg text-gray-400">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="border-t border-white/10 px-5 py-4 text-sm text-gray-300">
          {children}
        </div>
      )}
    </div>
  );
}
