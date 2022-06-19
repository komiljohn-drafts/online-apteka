import { BrowserRouter } from "react-router-dom"
import Router from "./routes/Router"
import "./App.css"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <BrowserRouter>
      <Router />
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  )
}

export default App
