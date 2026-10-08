import "./Spinner.css";
export default function Spinner({ size = 24 }) {
  return (
    <span
      className="ui-spinner"
      role="status"
      aria-label="Loading"
      style={{ width: size, height: size }}
    />
  );
}