/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import React from "react";

export const Button = ({
    className,
    size = "md",
    onClick,
    children,
    type,
    isLoading,
    bgColor = "primary",
}:{
    type: 'button' | 'submit' | 'reset';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
    isLoading: boolean;
    bgColor?: "primary" | "secondary" | "danger" | "none";
}) => {

    const sizes = {
        sm: "w-1/2 h-8 text-lg",
        md: "w-3/4 h-10 text-base",
        lg: "w-full h-14 text-lg",
    };

    const bgColors = {
        primary: "bg-secondary text-black",
        secondary: "bg-gray-500 text-white",
        danger: "bg-red-500 text-white",
        none: "bg-transparent text-black border-gray-400 border-2 "
    };

    return (
        <button 
            type={type}
            onClick={onClick}
            className={cn(
                "p-2 rounded-md relative flex items-center justify-center font-bold font-ubuntu",
                bgColors[bgColor],
                sizes[size],
                className
            )}
            disabled={isLoading}
        >
            {
                isLoading ? loading() : children
            }
        </button>
    );
}


const loading = () => {
    return (
        <div className="absolute inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    );
}