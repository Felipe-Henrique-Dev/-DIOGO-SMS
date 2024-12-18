/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import React from "react";

export const Input = ({
    type,
    placeholder,
    classNameSpan,  
    classNameLabel,
    classNameInput,
    label,
    size = "md",
    icon,
    register,
    bgColor = "secondary",
    labelIsHidden = false,
    name
}:{
    type: 'text' | 'password' | 'email';
    placeholder: string;
    classNameSpan?: string;
    classNameLabel?: string;
    classNameInput?: string;
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
    register?: any;
    label?: string;
    bgColor?: "primary" | "secondary" | "danger" | "none";
    labelIsHidden?: boolean;
    name?: string;
}) => {

    const sizes = {
        sm: "w-1/2 h-6 text-sm",
        md: "w-3/4 h-8 text-base",
        lg: "w-full h-10 text-lg",
    };

    const bgColors = {
        primary: "bg-tertinary text-black",
        secondary: "bg-tertinary text-black",
        danger: "bg-red-500 text-black",
        none: "bg-transparent text-black border-gray-300 border-2"
    };


    return (
        <span className={cn(
                "relative flex flex-col",
                sizes[size],
                classNameSpan,
        )}>
            {
                labelIsHidden &&
                <label className={cn(
                    classNameLabel
                )} >
                    {label}
                </label>
            }
            <input
                type={type}
                placeholder={placeholder}
                {...register}
                className={cn(
                    "p-2 rounded-md relative w-full placeholder:text-gray-500 ",
                    classNameInput,
                    bgColors[bgColor]
                )}
            />
            {icon}
        </span>

    );
}