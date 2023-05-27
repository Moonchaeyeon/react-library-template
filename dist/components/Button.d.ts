import React from "react";
interface ButtonProps {
    text: string;
    onClick: () => void;
}
export declare const Button: ({ text, onClick }: ButtonProps) => React.JSX.Element;
export {};
