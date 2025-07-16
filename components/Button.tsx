"use client";
import React from "react";
import classNames from "classnames";

export interface ButtonType {
    title: string;
    type?: "button" | "submit" | "reset";
    variant?: "filled" | "outlined";
    icon?: React.ReactNode;
    iconPostion?: "left" | "right";
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonType> = ({
    title,
    type = "button",
    variant = "filled",
    icon,
    iconPostion = "left",
    onClick,
    className,
}) => {
    const baseStyles =
        "flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 ease-in-out transform";

    const filledStyles = `
    bg-[#A259FF] 
    text-white 
    shadow-md 
    hover:bg-[#944dff] 
    hover:shadow-lg 
    active:scale-95 
    focus:ring-2 
    focus:ring-[#A259FF]/50 
    focus:outline-none
  `;

    const outlinedStyles = `
    border-2 
    border-[#A259FF] 
    text-[#A259FF] 
    hover:bg-[#A259FF] 
    hover:text-white 
    active:scale-95 
    focus:ring-2 
    focus:ring-[#A259FF]/50 
    focus:outline-none
  `;

    const combinedClass = classNames(
        baseStyles,
        variant === "filled" ? filledStyles : outlinedStyles,
        className
    );

    return (
        <button type={type} className={combinedClass} onClick={onClick}>
            {iconPostion === "left" && icon}
            <span>{title}</span>
            {iconPostion === "right" && icon}
        </button>
    );
};

export default Button;
