// import { useState } from "react";

import { useState } from "react";

export function SidebarCard({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      {/* Header / Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 transition-colors hover:bg-gray-50"
      >
        <span className="font-medium text-gray-900">{title}</span>
        <span className="text-gray-500">{isOpen ? "−" : "+"}</span>
      </button>

      {/* Expandable Content */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-gray-50/50 p-4">
          {children}
        </div>
      )}
    </div>
  );
}
