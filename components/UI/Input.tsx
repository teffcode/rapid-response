import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps {
  icon?: LucideIcon;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  widthClass?: string;
}

const Input: React.FC<InputProps> = ({
  icon: Icon,
  placeholder,
  value,
  onChange,
  disabled = false,
  widthClass = 'w-full max-w-sm',
}) => {
  return (
    <div className={`flex items-center border border-gray rounded-md px-3 py-2 ${widthClass}`}>
      {Icon && <Icon className="text-gray" size={16} />}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`outline-none w-full text-sm placeholder-gray-400 ${Icon ? 'ml-2' : ''}`}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
