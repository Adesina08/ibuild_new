import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

function applyLazyLoading(img: HTMLImageElement) {
  if (!img.hasAttribute("loading")) {
    img.setAttribute("loading", "lazy");
  }
}

document.querySelectorAll("img").forEach((img) => applyLazyLoading(img));

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node instanceof HTMLImageElement) {
        applyLazyLoading(node);
      } else if (node instanceof HTMLElement) {
        node.querySelectorAll("img").forEach((img) => applyLazyLoading(img));
      }
    });
  });
});

observer.observe(document.body, { childList: true, subtree: true });

createRoot(document.getElementById("root")!).render(<App />);
