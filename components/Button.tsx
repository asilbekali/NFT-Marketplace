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
        "flex items-center justify-center gap-[10px] px-[20px] py-[10px] rounded-[10px] text-[16px] font-medium transition-all duration-300";
    const filledStyles = "bg-white text-black hover:bg-opacity-90";
    const outlinedStyles =
        "border border-white text-white hover:bg-white hover:text-black";

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
