import React, { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  ArrowLeft,
  Send,
  Upload,
  Globe,
  Paperclip,
  RotateCcw,
  X,
} from "lucide-react";
import { H2, H3, P, Large } from "../ui/typography";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const SummarizationChat = ({
  onBack,
  onClose,
}: {
  onBack: () => void;
  onClose: () => void;
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="hover:bg-gray-800"
          >
            <ArrowLeft className="h-5 w-5 text-gray-400" />
          </Button>
          <H2 className="text-lg font-semibold text-white">SumX Chat</H2>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {}}
            className="hover:bg-gray-800"
          >
            <RotateCcw className="h-5 w-5 text-gray-400" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-gray-800"
          >
            <X className="h-5 w-5 text-gray-400" />
          </Button>
        </div>
      </div>

      {/* Chat Messages */}
      <ScrollArea className="flex-1 p-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <div className="text-4xl">🤖</div>
            <H3 className="text-xl font-semibold text-white">
              Start a conversation
            </H3>
            <P className="text-gray-400 max-w-sm">
              Upload a PDF, share a webpage, or ask a question to get started
            </P>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === "user"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-800 text-gray-100"
                  }`}
                >
                  <P className="text-sm">{message.content}</P>
                </div>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-800"
            title="Upload PDF"
          >
            <Upload className="h-5 w-5 text-purple-400" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-800"
            title="Analyze webpage"
          >
            <Globe className="h-5 w-5 text-purple-400" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-800"
            title="Attach file"
          >
            <Paperclip className="h-5 w-5 text-purple-400" />
          </Button>
          <div className="flex-1">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message SumX..."
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-800"
            disabled={!input.trim()}
            title="Send message"
          >
            <Send className="h-5 w-5 text-purple-400" />
          </Button>
        </div>
        <P className="text-xs text-gray-500 mt-2 text-center">
          SumX can make mistakes. Consider checking important information.
        </P>
      </div>
    </div>
  );
};
