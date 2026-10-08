import "./Card.css";
export default function Card({ image, title, description, footer, children }) {
  return (
    <div className="ui-card">
      {image && <img className="ui-card__image" src={image} alt={title || ""} />}
 
      <div className="ui-card__body">
        {title && <h3 className="ui-card__title">{title}</h3>}
        {description && <p className="ui-card__description">{description}</p>}
        {children}
      </div>
 
      {footer && <div className="ui-card__footer">{footer}</div>}
    </div>
  );
}