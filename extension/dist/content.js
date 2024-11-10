var o=Object.defineProperty;var n=(i,e,s)=>e in i?o(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s;var l=(i,e,s)=>n(i,typeof e!="symbol"?e+"":e,s);class a{constructor(){l(this,"sidebarElement");l(this,"isVisible",!1);console.log("Sidebar constructor called"),this.sidebarElement=document.createElement("div"),this.sidebarElement.className="sumx-sidebar",this.createSidebarContent(),this.attachEventListeners()}createSidebarContent(){console.log("Creating sidebar content"),this.sidebarElement.innerHTML=`
      <div class="sumx-header">
        <h2 class="sumx-title">SumX</h2>
        <button id="sumx-close-btn" class="sumx-close-btn">×</button>
      </div>
      <button id="sumx-summarize-btn" class="sumx-summarize-btn">
        Summarize
      </button>
    `}attachEventListeners(){console.log("Attaching event listeners");const e=this.sidebarElement.querySelector("#sumx-close-btn");e==null||e.addEventListener("click",()=>{console.log("Close button clicked"),this.hide()});const s=this.sidebarElement.querySelector("#sumx-summarize-btn");s==null||s.addEventListener("click",()=>{console.log("Summarize button clicked")})}show(){console.log("Showing sidebar"),this.sidebarElement.classList.add("visible"),this.isVisible=!0,this.sidebarElement.offsetHeight,console.log("Sidebar visibility state:",this.isVisible),console.log("Sidebar classes:",this.sidebarElement.className)}hide(){console.log("Hiding sidebar"),this.sidebarElement.classList.remove("visible"),this.isVisible=!1,console.log("Sidebar visibility state:",this.isVisible),console.log("Sidebar classes:",this.sidebarElement.className)}toggle(){console.log("Toggling sidebar, current visibility:",this.isVisible),this.isVisible?this.hide():this.show()}mount(){console.log("Mounting sidebar to document body"),document.body.appendChild(this.sidebarElement)}}let t=null;function r(){console.log("Content script initialized"),t=new a,t.mount(),console.log("Sidebar mounted"),chrome.runtime.onMessage.addListener((i,e,s)=>(console.log("Message received:",i),i.action==="toggleSidebar"&&t?(console.log("Toggling sidebar"),t.toggle(),s({success:!0,message:"Sidebar toggled"}),!0):!1))}r();chrome.runtime.connect({name:"content-script"});
