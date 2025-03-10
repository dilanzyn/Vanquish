import React from 'react';
import './Button.css';

interface ButtonProps {
  text?: string;
  icon?: string | React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text,icon, onClick, className, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} button`}
      disabled={disabled}
    >
       {typeof icon === 'string' ? (
        <img src={icon} alt="icon" className="w-4 h-4 bg-transparent" />
      ) : (
        icon && <span className="mr-2">{icon}</span>
      )}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;