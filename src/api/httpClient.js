import axios from "axios"
import toast from "react-hot-toast"
import { QueryClient } from "react-query"

export const request = axios.create({
  baseURL: "http://localhost:1337/api",
})

request.interceptors.request.use(
  (response) => response,
  (error) => {
    toast.error(error)
    return Promise.reject(error)
  }
)

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})
