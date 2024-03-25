import React from "react";
interface ITextBox {
  name: string;
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disable?: boolean;
  label?: string;
  placeholder?: string;
  IsRequired?: boolean;
}
const TextBox = ({
  name,
  type = "text",
  value,
  onChange,
  label = name,
  disable = false,
  placeholder = name,
  IsRequired = false,
}: ITextBox) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block ps-2 mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        disabled={disable}
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required={IsRequired}
      />
    </div>
  );
};

export default TextBox;
