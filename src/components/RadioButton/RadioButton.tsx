import React from 'react';
import Input, { InputProps } from '../Input/Input';

export interface RadioButtonProps extends Omit<InputProps, 'type'> {
    type?: 'radio';
    label?: string;
}

const RadioButton = (props: RadioButtonProps) => {
    return (
        <div className="radio-button-wrapper">
            <Input type="radio" {...props} />
            {props.label && <label htmlFor={props.id}>{props.label}</label>}
        </div>
    );
};

export default RadioButton;