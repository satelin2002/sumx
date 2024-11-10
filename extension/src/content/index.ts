import { mountSidebar } from "../components/Sidebar";
import "../styles/globals.css";

function initialize(): void {
  console.log("Content script initialized");

  setTimeout(() => {
    mountSidebar();
    console.log("Sidebar mounted with delay");
  }, 100);
}

initialize();

chrome.runtime.connect({ name: "content-script" });
