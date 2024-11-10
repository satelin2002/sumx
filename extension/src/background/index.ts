/// <reference types="chrome" />

/**
 * Handles the extension icon click event
 * Sends a message to the active tab to toggle the sidebar
 */
chrome.action.onClicked.addListener(async (tab) => {
  console.log("Extension icon clicked");

  if (!tab.id) {
    console.error("No tab ID found");
    return;
  }

  try {
    console.log("Sending message to tab:", tab.id);
    const response = await chrome.tabs.sendMessage(tab.id, {
      action: "toggleSidebar",
    });
    console.log("Response received:", response);
  } catch (error) {
    console.error("Error sending message:", error);
  }
});
