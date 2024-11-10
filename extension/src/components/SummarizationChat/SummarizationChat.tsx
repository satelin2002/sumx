import React, { useState, useRef } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { ArrowLeft, Send, Upload, Globe, X, Paperclip } from "lucide-react";
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
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll function
  const autoScroll = () => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    autoScroll();
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-2 h-14 border-b border-gray-800">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="hover:bg-gray-800"
          >
            <ArrowLeft className="h-5 w-5 text-gray-400" />
          </Button>
          <div className="flex items-center ml-2">
            <H2 className="text-base font-semibold text-white leading-none">
              SumX Chat
            </H2>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {}}
            className="hover:bg-gray-800"
            title="Reset conversation"
          >
            <X className="h-4 w-4 text-gray-400" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-gray-800"
            title="Close"
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
                      ? "bg-indigo-600 text-white"
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
        <div className="relative">
          <Textarea
            ref={textareaRef}
            value={input}
            onChange={handleInput}
            placeholder="Message SumX..."
            className="min-h-[104px] max-h-[208px] pb-16 px-4 pt-4 resize-y bg-gray-800 
              border-[1.5px] border-gray-700 text-white placeholder-gray-400 rounded-lg
              focus:border-[2px] focus:border-indigo-500 focus:ring-0
              transition-all duration-200 font-sans text-[15px]
              scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent
              block w-full"
            style={{
              lineHeight: "20px",
            }}
          />
          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 bg-gray-800 px-1">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full border border-gray-700 hover:bg-gray-700/50
                  flex items-center justify-center transition-all duration-200"
                title="Attach PDF"
              >
                <Paperclip className="h-[22px] w-[22px] text-indigo-400 stroke-[2.5]" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full border border-gray-700 hover:bg-gray-700/50
                  flex items-center justify-center transition-all duration-200"
                title="Analyze webpage"
              >
                <Globe className="h-[22px] w-[22px] text-indigo-400 stroke-[2.5]" />
              </Button>
            </div>
            <div className="flex-1" />
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full border border-gray-700 hover:bg-gray-700/50
                flex items-center justify-center transition-all duration-200"
              disabled={!input.trim()}
              title="Send message"
            >
              <Send className="h-[22px] w-[22px] text-indigo-400 stroke-[2.5]" />
            </Button>
          </div>
        </div>
        <P className="text-xs text-gray-400 mt-2 text-center">
          SumX can make mistakes. Consider checking important information.
        </P>
      </div>
    </div>
  );
};
