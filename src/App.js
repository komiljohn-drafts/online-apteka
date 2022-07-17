import { BrowserRouter } from "react-router-dom"
import Router from "./routes/Router"
import "./App.css"
import { Toaster } from "react-hot-toast"
import { QueryClientProvider } from "react-query"
import { queryClient } from "./api/httpClient"

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
        <Toaster position="top-center" reverseOrder={false} />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
