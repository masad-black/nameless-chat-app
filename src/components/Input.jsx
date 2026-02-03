export default function Input({
  type,
  placeholder,
  value,
  onChangeHandler,
  required,
  className,
  disabled,
  onEnter,
  onPress,
  onUp,
}) {
  return (
    <input
      required={required}
      type={type}
      name=""
      id=""
      placeholder={placeholder}
      className={`${className} outline-0 `}
      value={value}
      onChange={(e) => onChangeHandler(e.target.value)}
      disabled={disabled}
      onKeyDown={onEnter}
      // these both are used to detect typing
      onKeyPress={onPress}
      onKeyUp={onUp}
    />
  );
}
