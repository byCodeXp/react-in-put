import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Input } from "./input";

import './main.css'; 

const domRoot = document.getElementById("root");

if (!domRoot) {
   throw new Error("Root element is not defined");
}

createRoot(domRoot).render(
   <StrictMode>
      <div className="container">
         <Input />
      </div>
   </StrictMode>
);