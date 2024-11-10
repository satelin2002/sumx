import React, { useState } from "react";
import { X } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple } from "react-icons/fa6";
import { H1, P, Large } from "../../components/ui/typography";
import { Button } from "../../components/ui/button";
import { ScrollArea } from "../../components/ui/scroll-area";
import "../../styles/globals.css";
import { SidebarProps } from "./types";
import { SummarizationChat } from "../SummarizationChat/SummarizationChat";

export const Sidebar: React.FC<SidebarProps> = ({ isVisible, onClose }) => {
  const [currentView, setCurrentView] = useState<"home" | "chat">("home");

  return (
    <div
      className={`fixed top-4 bottom-4 h-[calc(100vh-32px)] w-[420px] transition-all duration-300 ease-in-out z-[9999] overflow-hidden
        rounded-xl border border-gray-200/20 shadow-2xl bg-[#0A0A0A]/95 backdrop-blur-sm
        ${isVisible ? "right-4" : "-right-[420px]"}`}
    >
      {currentView === "chat" ? (
        <SummarizationChat
          onBack={() => setCurrentView("home")}
          onClose={onClose}
        />
      ) : (
        <ScrollArea className="h-full">
          <div className="flex flex-col p-8 pt-16">
            <div className="space-y-10">
              {/* Hero Section with Logo */}
              <div className="space-y-6">
                <img
                  src="https://vercel.com/mktng/_next/static/media/vercel-logotype-dark.e8c0a742.svg"
                  alt="Vercel Logo"
                  className="h-5"
                />
                <div className="space-y-3">
                  <H1 className="text-2xl font-bold tracking-tight text-white">
                    Summarize, search & write,{" "}
                    <span className="text-gray-400">anywhere, anytime</span>
                  </H1>
                  <P className="text-base text-gray-400">
                    SumX helps you extract key insights from PDFs and web pages
                    instantly, powered by AI.
                  </P>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🚀</span>
                  <Large className="text-base font-normal text-gray-300">
                    <span className="underline font-semibold">
                      One-click summaries
                    </span>{" "}
                    of any content
                  </Large>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">✨</span>
                  <Large className="text-base font-normal text-gray-300">
                    <span className="underline font-semibold">
                      Smart highlighting
                    </span>{" "}
                    for targeted insights
                  </Large>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">📊</span>
                  <Large className="text-base font-normal text-gray-300">
                    <span className="underline font-semibold">
                      Customize length
                    </span>{" "}
                    and style as needed
                  </Large>
                </div>
              </div>

              {/* Sign In Buttons */}
              <div className="space-y-3">
                <Button
                  className="w-full py-5 text-base rounded-lg bg-white hover:bg-gray-100 text-black font-normal transition-all"
                  size="lg"
                >
                  <FcGoogle className="w-5 h-5" />
                  <span className="flex-1 text-center">
                    Continue with Google
                  </span>
                </Button>

                <Button
                  className="w-full py-5 text-base rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-normal transition-all"
                  size="lg"
                >
                  <FaGithub className="w-5 h-5" />
                  <span className="flex-1 text-center">
                    Continue with GitHub
                  </span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full py-5 text-base rounded-lg border-gray-700 hover:border-gray-600 text-gray-300 font-normal transition-all"
                  size="lg"
                >
                  <FaApple className="w-5 h-5" />
                  <span className="flex-1 text-center">
                    Continue with Apple
                  </span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full py-5 text-base rounded-lg border-gray-700 hover:border-gray-600 text-gray-300 font-normal transition-all"
                  size="lg"
                  onClick={() => setCurrentView("chat")}
                >
                  <span className="w-5 h-5 text-xl">🚀</span>
                  <span className="flex-1 text-center">Test Summarization</span>
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>
      )}
    </div>
  );
};
