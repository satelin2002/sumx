import React from "react";
import {
  X,
  MousePointerClick,
  TextSelect,
  Sliders,
  Share2,
  Sparkles,
} from "lucide-react";
import { H1, P, Large } from "../../components/ui/typography";
import { Button } from "../../components/ui/button";
import "../../styles/globals.css";
import { SidebarProps } from "./types";

export const Sidebar: React.FC<SidebarProps> = ({ isVisible, onClose }) => {
  return (
    <div
      className={`fixed top-0 h-screen w-[500px] bg-white transition-all duration-300 ease-in-out z-[9999] overflow-y-auto
        ${isVisible ? "right-0" : "-right-[500px]"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center">
          <img
            src="https://vercel.com/mktng/_next/static/media/vercel-logotype-light.700a8d26.svg"
            alt="Vercel Logo"
            className="h-5"
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <X className="h-5 w-5 text-gray-500" />
        </Button>
      </div>

      {/* Center content vertically */}
      <div className="flex flex-col justify-center h-[calc(100vh-65px)] p-8">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="space-y-4">
            <H1 className="text-4xl font-semibold tracking-tight">
              Go nomad and live anywhere
            </H1>
            <P className="text-xl text-gray-600">
              Nomad List is now Nomads.com, representing the millions of nomads
              now living and working remotely from around the world, not tied to
              a single place but making the entire globe their home.
            </P>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              <Large className="text-xl font-normal">
                <span className="underline">One-click summaries</span> of any
                content
              </Large>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">✨</span>
              <Large className="text-xl font-normal">
                <span className="underline">Smart highlighting</span> for
                targeted insights
              </Large>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <Large className="text-xl font-normal">
                <span className="underline">Customize length</span> and style as
                needed
              </Large>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">💫</span>
              <Large className="text-xl font-normal">
                <span className="underline">Share summaries</span> with your
                team
              </Large>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">💬</span>
              <Large className="text-xl font-normal">
                <span className="underline">Join our community</span> of power
                users
              </Large>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <Button
              className="w-full bg-black hover:bg-gray-900 text-white py-6 text-lg rounded-lg"
              size="lg"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
