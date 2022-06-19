import "./style.scss"

const Card = ({ title, rightElement, children, width }) => (
  <div className="card" style={{ width }}>
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
