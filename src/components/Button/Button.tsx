import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    ariaLabel?: string;
    id?: string;
    title?: string;
    autoFocus?: boolean;
    tabIndex?: number;
    dataTestId?: string;

}

const Button = (props: ButtonProps) => {
    return (
        <button
            onClick={props.onClick}
            style={props.style}
            className={props.className}
            type={props.type}
            disabled={props.disabled}
            aria-label={props.ariaLabel}
            id={props.id}
            title={props.title}
            autoFocus={props.autoFocus}
            tabIndex={props.tabIndex}
            data-testid={props.dataTestId}
        >
            {props.label}
        </button>
    );
};

export default Button;