import { Sidebar } from "../components/Sidebar/Sidebar";

let sidebar: Sidebar | null = null;

/**
 * Initialize the content script
 */
function initialize(): void {
  console.log("Content script initialized");

  // Create and mount the sidebar
  sidebar = new Sidebar();
  sidebar.mount();
  console.log("Sidebar mounted");

  // Listen for messages from the extension
  chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    console.log("Message received:", message);

    if (message.action === "toggleSidebar" && sidebar) {
      console.log("Toggling sidebar");
      sidebar.toggle();
      sendResponse({ success: true, message: "Sidebar toggled" });
      return true;
    }
    return false;
  });
}

// Initialize when the content script loads
initialize();

// Let the extension know the content script is loaded
chrome.runtime.connect({ name: "content-script" });
