import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App/App"
import './globals.css'
import { ProductProvider } from "./state/ProductContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>,
)
