import React from "react";
import { X, BookOpen, Copy, Share2, Download } from "lucide-react";
import { FiCopy } from "react-icons/fi";
import { BiShareAlt } from "react-icons/bi";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import "../../styles/globals.css";
import { SidebarProps } from "./types";

export const Sidebar: React.FC<SidebarProps> = ({ isVisible, onClose }) => {
  console.log("Sidebar render, isVisible:", isVisible);

  return (
    <div
      className={`fixed top-0 h-screen w-[500px] bg-white shadow-lg transition-all duration-300 ease-in-out z-[9999] p-5
        ${isVisible ? "right-0" : "-right-[500px]"}`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-500" />
          <h2 className="text-xl font-bold text-gray-800 m-0">SumX</h2>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Main Content */}
      <div className="space-y-4">
        {/* Summarize Button */}
        <button
          onClick={() => console.log("Summarize clicked")}
          className="w-full py-3 px-4 bg-blue-500 text-white border-none rounded-lg
                   cursor-pointer text-sm font-medium hover:bg-blue-600 
                   transition-colors flex items-center justify-center gap-2"
        >
          <BookOpen className="w-4 h-4" />
          Summarize
        </button>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {/* Copy Button */}
          <button
            className="flex-1 py-2 px-4 bg-gray-100 hover:bg-gray-200 
                         rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <FiCopy className="w-4 h-4" />
            Copy
          </button>

          {/* Share Button */}
          <button
            className="flex-1 py-2 px-4 bg-gray-100 hover:bg-gray-200 
                         rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <BiShareAlt className="w-4 h-4" />
            Share
          </button>

          {/* Download Button */}
          <button
            className="flex-1 py-2 px-4 bg-gray-100 hover:bg-gray-200 
                         rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <HiOutlineDocumentDownload className="w-4 h-4" />
            Download
          </button>
        </div>

        {/* Summary Content */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Summary</h3>
          <p className="text-gray-600">
            Your summary will appear here after clicking the summarize button.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t">
        <p className="text-xs text-gray-500 text-center">Powered by SumX AI</p>
      </div>
    </div>
  );
};
