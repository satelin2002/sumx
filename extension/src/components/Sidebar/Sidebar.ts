/**
 * Sidebar class responsible for creating and managing the sidebar UI
 */
export class Sidebar {
  private sidebarElement: HTMLDivElement;
  private isVisible: boolean = false;

  constructor() {
    console.log("Sidebar constructor called");
    this.sidebarElement = document.createElement("div");
    this.sidebarElement.className = "sumx-sidebar";
    this.createSidebarContent();
    this.attachEventListeners();
  }

  private createSidebarContent(): void {
    console.log("Creating sidebar content");
    this.sidebarElement.innerHTML = `
      <div class="sumx-header">
        <h2 class="sumx-title">SumX</h2>
        <button id="sumx-close-btn" class="sumx-close-btn">×</button>
      </div>
      <button id="sumx-summarize-btn" class="sumx-summarize-btn">
        Summarize
      </button>
    `;
  }

  private attachEventListeners(): void {
    console.log("Attaching event listeners");
    const closeBtn = this.sidebarElement.querySelector("#sumx-close-btn");
    closeBtn?.addEventListener("click", () => {
      console.log("Close button clicked");
      this.hide();
    });

    const summarizeBtn = this.sidebarElement.querySelector(
      "#sumx-summarize-btn"
    );
    summarizeBtn?.addEventListener("click", () => {
      console.log("Summarize button clicked");
    });
  }

  public show(): void {
    console.log("Showing sidebar");
    this.sidebarElement.classList.add("visible");
    this.isVisible = true;
    this.sidebarElement.offsetHeight;
    console.log("Sidebar visibility state:", this.isVisible);
    console.log("Sidebar classes:", this.sidebarElement.className);
  }

  public hide(): void {
    console.log("Hiding sidebar");
    this.sidebarElement.classList.remove("visible");
    this.isVisible = false;
    console.log("Sidebar visibility state:", this.isVisible);
    console.log("Sidebar classes:", this.sidebarElement.className);
  }

  public toggle(): void {
    console.log("Toggling sidebar, current visibility:", this.isVisible);
    if (this.isVisible) {
      this.hide();
    } else {
      this.show();
    }
  }

  public mount(): void {
    console.log("Mounting sidebar to document body");
    document.body.appendChild(this.sidebarElement);
  }
}
