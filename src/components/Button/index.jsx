import "./index.scss"

const Button = ({ shape = "primary", children, leftIcon, rightIcon, widthFull = false, className, ...rest }) => {
  const primaryColors = "bg-primary text-white hover:bg-primaryHover"

  return (
    <button
      className={`btn ${shape === "primary" ? primaryColors : "secondary__btn"} ${
        widthFull ? "w-full" : ""
      } ${className}`}
      {...rest}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  )
}

export default Button
