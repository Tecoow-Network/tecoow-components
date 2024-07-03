import React from 'react';

interface ButtonIconProps {
    label: string;
    iconSrc: string;
    iconAlt: string;
    iconStyle?: React.CSSProperties;
    iconClassName?: string;
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
const ButtonIcon = (props: ButtonIconProps) => {
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
            <img 
                src={props.iconSrc} 
                alt={props.iconAlt} 
                style={props.iconStyle} 
                className={props.iconClassName}
            />
            <span>{props.label}</span>
        </button>
    );
};

export default ButtonIcon;