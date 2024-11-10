import React from "react";
import { X } from "lucide-react";
import "../../styles/globals.css";
import { SidebarProps } from "./types";

export const Sidebar: React.FC<SidebarProps> = ({ isVisible, onClose }) => {
  return (
    <div
      className={`fixed top-0 h-screen w-[550px] bg-[#1C1C1C] transition-all duration-300 ease-in-out z-[9999]
        ${isVisible ? "right-0" : "-right-[550px]"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          {/* Vercel Logo - using the light version for dark theme */}
          <img
            src="https://vercel.com/mktng/_next/static/media/vercel-logotype-dark.e8c0a742.svg"
            alt="Vercel Logo"
            className="h-6"
          />
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-800 rounded-sm transition-colors"
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5 text-gray-400 hover:text-gray-200" />
        </button>
      </div>

      {/* Content area will be added later */}
      <div className="p-6">{/* Content will go here */}</div>
    </div>
  );
};
