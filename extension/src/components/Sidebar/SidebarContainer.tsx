import React, { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";

export const SidebarContainer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);

  useEffect(() => {
    console.log("Setting up message listener");
    const messageListener = (
      message: any,
      _sender: chrome.runtime.MessageSender,
      sendResponse: (response: any) => void
    ) => {
      console.log("Message received:", message);
      if (message.action === "toggleSidebar") {
        console.log("Toggling sidebar visibility");
        setIsVisible((prev) => !prev);
        sendResponse({ success: true, message: "Sidebar toggled" });
      }
      return true;
    };

    chrome.runtime.onMessage.addListener(messageListener);

    return () => {
      console.log("Cleaning up message listener");
      chrome.runtime.onMessage.removeListener(messageListener);
    };
  }, []);

  const handleSummarize = async () => {
    console.log("Summarizing...");
    // Add your summarization logic here
  };

  const handleCopy = () => {
    if (summary) {
      navigator.clipboard.writeText(summary);
      // You might want to show a toast notification here
    }
  };

  const handleShare = () => {
    console.log("Sharing...");
    // Add your sharing logic here
  };

  const handleDownload = () => {
    if (summary) {
      const blob = new Blob([summary], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "summary.txt";
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <Sidebar
      isVisible={isVisible}
      onClose={() => {
        console.log("Closing sidebar");
        setIsVisible(false);
      }}
      onSummarize={handleSummarize}
      onCopy={handleCopy}
      onShare={handleShare}
      onDownload={handleDownload}
    />
  );
};
