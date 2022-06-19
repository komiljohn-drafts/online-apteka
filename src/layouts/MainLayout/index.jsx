import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar"
import "./style.scss"

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
