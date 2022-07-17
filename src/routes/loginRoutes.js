import { lazy } from "react"

const Login = lazy(() => import("../views/Login"))

const loginRoutes = [
  {
    path: "/login",
    component: Login,
    permission: "LOGIN",
  },
]

export default loginRoutes
