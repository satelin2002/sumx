import React from "react";
import {
  X,
  MousePointerClick,
  TextSelect,
  Sliders,
  Share2,
  Sparkles,
  Clock,
  Wand2,
  Download,
} from "lucide-react";
import "../../styles/globals.css";
import { SidebarProps } from "./types";

export const Sidebar: React.FC<SidebarProps> = ({ isVisible, onClose }) => {
  return (
    <div
      className={`fixed top-0 h-screen w-[500px] bg-[#1C1C1C] transition-all duration-300 ease-in-out z-[9999] overflow-y-auto
        ${isVisible ? "right-0" : "-right-[500px]"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center">
          <img
            src="https://vercel.com/mktng/_next/static/media/vercel-logotype-dark.e8c0a742.svg"
            alt="Vercel Logo"
            className="h-5"
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

      {/* Welcome Section */}
      <div className="p-8 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-white mb-3">Welcome to SumX</h1>
        <p className="text-gray-300 text-base mb-6 leading-relaxed">
          Summarize PDFs and web pages instantly with the power of AI.
        </p>
      </div>

      {/* Key Features */}
      <div className="px-8 py-6 border-b border-gray-800">
        <h2 className="text-lg font-semibold text-white mb-6">Key Features</h2>
        <div className="space-y-6">
          {/* Feature items */}
          <div className="group">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full border-2 border-purple-500/70">
                <MousePointerClick className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-white text-base font-medium mb-1">
                  One-Click Summarization
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Summarize entire PDFs or web pages with just one click.
                </p>
              </div>
            </div>
          </div>
          {/* ... other key features with same styling ... */}
        </div>
      </div>

      {/* Premium Features */}
      <div className="px-8 py-6 border-b border-gray-800">
        <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          Premium Features
          <Sparkles className="w-5 h-5 text-yellow-400" />
        </h2>
        <div className="space-y-6">
          {/* Premium feature items */}
          <div className="group">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-full border-2 border-green-500/70">
                <Clock className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-white text-base font-medium mb-1">
                  Faster Processing
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Priority processing for instant summaries.
                </p>
              </div>
            </div>
          </div>
          {/* ... other premium features with same styling ... */}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-8">
        <div className="flex flex-col gap-3 w-full">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg text-base transition-colors">
            Get Started
          </button>
          <button className="w-full border border-gray-700 hover:border-gray-600 text-gray-300 font-medium px-6 py-3 rounded-lg text-base transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
