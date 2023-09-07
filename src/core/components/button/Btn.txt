import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  disabled = false,
  onClick = () => {},
  className,
  ...rest
}) => {
  const buttonClasses = clsx(
    "rounded",
    "py-2",
    "px-4",
    {
      "bg-blue-500 text-white": variant === "primary",
      "bg-gray-300 text-gray-700": variant === "secondary",
    },
    {
      "opacity-50 cursor-not-allowed": disabled,
    },
    className
  );

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
