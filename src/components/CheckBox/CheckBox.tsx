import React from 'react';
import Input, { InputProps } from '../Input/Input';

export interface CheckBoxProps extends Omit<InputProps, 'type'> {
    type?: 'checkbox';
    label?: string;
}

const CheckBox = (props: CheckBoxProps) => {
    return (
        <div className="checkbox-wrapper">
            <Input type="checkbox" {...props} />
            {props.label && <label htmlFor={props.id}>{props.label}</label>}
        </div>
    );
};

export default CheckBox;