import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Easter egg for curious developers
console.log(
  '%c🔍 If you are that curious, you should contact me so we can work together! 🚀',
  'background: linear-gradient(45deg, #00d2ff, #3a7bd5); color: white; padding: 10px 20px; border-radius: 8px; font-size: 16px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);'
);

console.log(
  '%c📧 Email: samisafatli@live.com\n💼 LinkedIn: https://linkedin.com/in/safatlisami\n🌐 Portfolio: https://samisafatli.com',
  'color: #00d2ff; font-size: 14px; font-family: monospace; margin-top: 10px;'
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
