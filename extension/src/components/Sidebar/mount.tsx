import React from "react";
import ReactDOM from "react-dom";
import { SidebarContainer } from "./SidebarContainer";

const createContainer = () => {
  console.log("Creating sidebar container");
  const container = document.createElement("div");
  container.id = "sumx-sidebar-container";
  document.body.appendChild(container);
  console.log("Sidebar container created and mounted");
  return container;
};

export const mountSidebar = () => {
  console.log("Mounting sidebar");
  const container = createContainer();
  ReactDOM.render(<SidebarContainer />, container);
  console.log("Sidebar mounted");
};
