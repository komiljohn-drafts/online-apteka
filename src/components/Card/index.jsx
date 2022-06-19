import "./style.scss"

const Card = ({ title, rightElement, children }) => (
  <div className="card">
    {title && (
      <div className="card__head">
        <span className="card__title">{title}</span>
        {rightElement}
      </div>
    )}
    <div className="card__body">{children}</div>
  </div>
)

export default Card
