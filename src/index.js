import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MapContextProvider } from "./contexts/Map.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MapContextProvider>
        <App />
      </MapContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
