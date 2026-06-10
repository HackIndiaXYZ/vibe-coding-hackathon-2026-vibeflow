import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { CyberProvider } from "./context/CyberProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <CyberProvider>
      <App />
    </CyberProvider>

  </React.StrictMode>
);