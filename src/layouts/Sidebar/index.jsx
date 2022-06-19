import LogoImg from "../../assets/images/logo.png"
import PermissionWrapper from "../../components/PermissionWrapper"
import menuElements from "./menuElements"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import PersonIcon from "@mui/icons-material/Person"
import "./style.scss"

const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="sidebar">
      <div className="header">
        <img src={LogoImg} alt="logo" width={32} height={32} />
        <span>Onlayn dorixona</span>
      </div>
      <div className="itemsWrapper">
        <div className="topItems">
          {menuElements.map((element) => (
            <PermissionWrapper permission={element.permission} key={element.path}>
              <NavLink exact={0} to={element.path}>
                {({ isActive }) => (
                  <div className={`item ${isActive ? "active" : ""}`}>
                    <span className="icon">
                      <element.icon />
                    </span>
                    <span className="title">{element.title}</span>
                  </div>
                )}
              </NavLink>
            </PermissionWrapper>
          ))}
        </div>
        <div className="bottomItems">
          <div
            className={`item ${location.pathname.includes("profile") ? "active" : ""}`}
            onClick={() => navigate("profile")}
          >
            <span className="icon">
              <PersonIcon />
            </span>
            <span className="title">Shaxsiy kabinet</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
