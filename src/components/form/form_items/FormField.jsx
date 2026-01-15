import Input from "@/components/Input";

export default function FormField({
  title,
  type,
  placeholder,
  value,
  onChangeHandler,
  required,
  className,
}) {
  return (
    <div className="flex flex-col space-y-1">
      <h3 className="font-medium text-sm">{title}</h3>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        className={className}
        onChangeHandler={onChangeHandler}
        required={required}
      />
    </div>
  );
}
