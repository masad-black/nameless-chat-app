export default function Input({ type, placeholder, value, onChangeHandler, required, className }) {
  return (
    <input
      required={required}
      type={type}
      name=""
      id=""
      placeholder={placeholder}
      className={`${className} outline-0`}
      value={value}
      onChange={(e) => onChangeHandler(e.target.value)}
    />
  );
}
