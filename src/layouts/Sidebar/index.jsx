import LogoImg from "../../assets/images/logo.jpg"
import PermissionWrapper from "../../components/PermissionWrapper"
import menuElements from "./menuElements"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import PersonIcon from "@mui/icons-material/Person"
import "./style.scss"
import { ArrowLeftIcon } from "../../assets/icons/svgs"
import { useState } from "react"

const Sidebar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={`sidebar ${isCollapsed ? "w-[65px]" : "w-[260px]"}`}>
      <div className="header">
        <img
          src={LogoImg}
          alt="logo"
          width={32}
          height={32}
          className="rounded-md"
          onClick={() => setIsCollapsed((p) => !p)}
        />
        {!isCollapsed && (
          <>
            <span>Onlayn dorixona</span>
            <div
              className="absolute right-2 top-3 w-8 h-8 border rounded-md flex items-center justify-center"
              onClick={() => setIsCollapsed(true)}
            >
              <ArrowLeftIcon />
            </div>
          </>
        )}
      </div>
      <div className="itemsWrapper">
        <div className="topItems">
          {menuElements.map((element) => (
            <PermissionWrapper permission={element.permission} key={element.path}>
              <NavLink exact={0} to={element.path}>
                {({ isActive }) => (
                  <div className={`item ${isActive ? "bg-primary" : ""}`}>
                    <span className={isActive ? "text-white" : "icon"}>
                      <element.icon />
                    </span>
                    {!isCollapsed && (
                      <span className={`title ${isActive ? "text-white" : "text-[#6e8bb7]"}`}>{element.title}</span>
                    )}
                  </div>
                )}
              </NavLink>
            </PermissionWrapper>
          ))}
        </div>
        <div className="bottomItems">
          <div className={`item ${pathname.includes("profile") ? "active" : ""}`} onClick={() => navigate("profile")}>
            <span className={`icon ${isCollapsed ? "mx-auto" : ""}`}>
              <PersonIcon />
            </span>
            {!isCollapsed && <span className="title">Shaxsiy kabinet</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
