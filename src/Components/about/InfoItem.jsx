export default function InfoItem({ title, iconClass, text, type, href }) {
  return (
    <div className="info-item">
      <i className={iconClass}></i>
      <div>
        <h3>{title}</h3>
        {type === "link" ? <a href={href}>{text}</a> : <p>{text}</p>}
      </div>
    </div>
  );
}
