import React from 'react';
import { LucideIcon } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'base' | 'sm';

interface ButtonProps {
  variant: ButtonVariant;
  size?: ButtonSize;
  text?: string;
  icon?: LucideIcon;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size = 'base',
  text,
  icon: Icon,
  onClick,
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-md font-semibold';

  const variantStyles = {
    primary: 'bg-secondary text-white hover:bg-secondary/90',
    secondary: 'bg-white text-primary border border-gray hover:bg-gray-50',
  };

  const sizeStyles = {
    base: 'px-4 py-2 text-sm',
    sm: 'px-2 py-1.5 text-xs',
  };

  const iconSize = size === 'sm' ? 14 : 16;

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}>
      {Icon && <Icon size={iconSize} />}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
