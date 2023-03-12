import { HashRouter } from "react-router-dom"

import React from "react"
import ReactDOM from "react-dom"
import { App } from "@app"

import "./reset.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense>
      <HashRouter>
        <App />
      </HashRouter>
    </React.Suspense>
  </React.StrictMode>
)
