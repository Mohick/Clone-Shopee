import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import RouterPage from "./Container Router/Router";
import './handle string char vi to latinh/string__char__vi__to__latinh'
import './create__dot__number/create__dot__number'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter defaultSetOptions={{ path: '/' }}>
        <RouterPage />
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);
