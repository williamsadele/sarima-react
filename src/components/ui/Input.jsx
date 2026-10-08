import { useId } from "react";
import "./Input.css";
export default function Input({
  label,
  value,
  onChange,
  placeholder,
  error,
  disabled = false,
  ...rest
}) {
  const id = useId();
  const errorId = `${id}-error`;
 
  return (
    <div className="ui-input">
      {label && (
        <label htmlFor={id} className="ui-input__label">
          {label}
        </label>
      )}
 
      <input
        id={id}
        className={`ui-input__field ${error ? "ui-input__field--error" : ""}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
 
      {error && (
        <p id={errorId} className="ui-input__error">
          {error}
        </p>
      )}
    </div>
  );
}