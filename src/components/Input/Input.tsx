import React from 'react';

export interface InputProps {
    type?: 'text' | 'radio' | 'checkbox' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'datetime-local' | 'month' | 'time' | 'week';
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    style?: React.CSSProperties;
    className?: string;
    disabled?: boolean;
    ariaLabel?: string;
    id?: string;
    name?: string;
    autoFocus?: boolean;
    autoComplete?: 'on' | 'off';
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    error?: string;
    success?: string;
}


const Input = (props: InputProps) => {
    return (
        <div className={`input-container ${props.className}`} style={props.style}>
            <input
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                disabled={props.disabled}
                aria-label={props.ariaLabel}
                id={props.id}
                name={props.name}
                autoFocus={props.autoFocus}
                autoComplete={props.autoComplete}
                required={props.required}
                minLength={props.minLength}
                maxLength={props.maxLength}
                pattern={props.pattern}
                className={`input ${props.error ? 'input-error' : ''} ${props.success ? 'input-success' : ''}`}
            />
            {props.error && <div className="input-feedback input-error-feedback">{props.error}</div>}
            {props.success && <div className="input-feedback input-success-feedback">{props.success}</div>}
        </div>
    );
};

export default Input;