export interface SidebarProps {
  isVisible: boolean;
  onClose: () => void;
  onSummarize?: () => void;
  onCopy?: () => void;
  onShare?: () => void;
  onDownload?: () => void;
}

export interface ChromeMessage {
  action: "toggleSidebar";
}
