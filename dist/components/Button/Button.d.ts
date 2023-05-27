import React from "react";
interface ButtonProps {
    text: string;
    bgColor: string;
    textColor: string;
    onClick: () => void;
}
export declare const Button: ({ text, bgColor, textColor, onClick }: ButtonProps) => React.JSX.Element;
export {};
