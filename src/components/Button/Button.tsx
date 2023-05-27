import React from "react";

interface ButtonProps {
    /**
     * Text to display in the button
     */
    text: string;
    /**
     * Background color of the button
     * @default "black"
     */
    bgColor: string;
    /**
     * Text color of the button
     * @default "white"
     */
    textColor: string;
    /**
     * Function to call when the button is clicked
     */
    onClick: () => void;
}

/**
 * Button component
 * @param text Text to display in the button
 * @param onClick Function to call when the button is clicked
 * @returns Button component
 */
export const Button = ({ text, bgColor="black", textColor="white", onClick }:ButtonProps) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: bgColor,
                color: textColor
            }}
        >
            { text }
        </button>
    )
}