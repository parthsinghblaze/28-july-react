import App from "./App"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
const container = document.getElementById("root")
const app = createRoot(container)


app.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

// 1 -> BrowserRouter wrap up tumhare app ko
// 2 -> Routes > route path="define path" element = "define element"