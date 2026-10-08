import "./Button.css";
export default function Button({
  children,
  variant = "primary",
  disabled = false,
  loading = false,
  onClick,
  ...rest
}) {
  return (
    <button
      className={`ui-button ui-button--${variant}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...rest}
    >
      {loading ? <span className="ui-button__spinner" aria-hidden="true" /> : children}
    </button>
  );
}