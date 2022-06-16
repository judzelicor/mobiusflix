import React from "react"
import ReactDOM, { createRoot } from "react-dom/client"
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom"

import App from "./App"

import "./index.css"

const root = createRoot(
    document.getElementById("root")
)

root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
)