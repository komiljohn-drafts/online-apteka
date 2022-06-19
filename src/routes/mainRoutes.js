import { lazy } from "react"

const Dashboard = lazy(() => import("../views/Dashboard"))
const Medicine = lazy(() => import("../views/Medicine"))

const mainRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
    permission: "DASHBOARD",
  },
  {
    path: "/medicine",
    component: Medicine,
    permission: "MEDICINE",
  },
]

export default mainRoutes
