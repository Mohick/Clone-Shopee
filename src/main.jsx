import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter defaultSetOptions={{ path: '/' }}>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);
