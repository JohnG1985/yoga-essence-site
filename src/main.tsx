import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// === HOTFIX: Mobile navbar hamburger/menu background inside iframe ===
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("mobile-menu-hotfix-style")) {
    return;
  }

  const style = document.createElement("style");
  style.id = "mobile-menu-hotfix-style";
  style.textContent = `
    @media (max-width: 768px) {
      header,
      .navbar,
      .topbar,
      .app-header,
      nav {
        background-color: #ffffff !important;
      }

      button[aria-label*="menu"],
      button[aria-expanded] {
        background-color: #ffffff !important;
        color: #000000 !important;
      }

      button[aria-label*="menu"] svg,
      button[aria-label*="menu"] path,
      button[aria-expanded] svg,
      button[aria-expanded] path {
        fill: #000000 !important;
        stroke: #000000 !important;
      }

      .menu,
      .menu-drawer,
      .mobile-menu,
      .nav-drawer {
        background-color: #ffffff !important;
        z-index: 9999 !important;
      }
    }
  `;
  document.head.appendChild(style);
});
