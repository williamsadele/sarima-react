import Spinner from "./Spinner";
import "./List.css";
export default function List({
  items = [],
  renderItem,
  loading = false,
  emptyMessage = "Nothing to show yet.",
}) {
  if (loading) {
    return (
      <div className="ui-list__status">
        <Spinner size={20} />
        <span>Loading...</span>
      </div>
    );
  }
 
  if (items.length === 0) {
    return <p className="ui-list__empty">{emptyMessage}</p>;
  }
 
  return (
    <ul className="ui-list">
      {items.map((item, index) => (
        <li key={item.id ?? index} className="ui-list__item">
          {renderItem ? renderItem(item) : String(item)}
        </li>
      ))}
    </ul>
  );
}