import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { NavLink } from "react-router-dom"
import "./style.scss"

const Header = ({ title = "Dorixona", rightElement, backLink }) => {
  return (
    <div className="header">
      <div className="title">
        {backLink && (
          <span className="icon">
            <NavLink to={backLink}>
              <ArrowBackIcon />
            </NavLink>
          </span>
        )}
        <span>{title}</span>
      </div>
      {rightElement}
    </div>
  )
}

export default Header
