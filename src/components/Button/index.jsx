import "./index.scss"

const Button = ({ shape = "primary", children, leftIcon, rightIcon, ...rest }) => {
  console.log("children", children)
  return (
    <button className={`btn ${shape === "primary" ? "primary__btn" : "secondary__btn"}`} {...rest}>
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  )
}

export default Button
