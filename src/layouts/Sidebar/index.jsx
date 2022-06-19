import "./style.scss"
import LogoImg from "../../assets/images/logo.png"
import PermissionWrapper from "../../components/PermissionWrapper"
import menuElements from "./menuElements"
import { NavLink } from "react-router-dom"
import "./style.scss"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="header">
        <img src={LogoImg} alt="logo" width={32} height={32} />
        <span>Onlayn dorixona</span>
      </div>
      <div>
        <div className="items">
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
      </div>
    </div>
  )
}

export default Sidebar
