import { lazy } from "react"

const Dashboard = lazy(() => import("../views/Dashboard"))
const Medicine = lazy(() => import("../views/Medicine"))
const Profile = lazy(() => import("../views/Profile"))

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
  {
    path: "/profile",
    component: Profile,
    permission: "PROFILE",
  },
]

export default mainRoutes
