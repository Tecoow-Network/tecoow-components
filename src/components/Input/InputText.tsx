import React from 'react';
import Input, { InputProps } from './Input';

interface InputTextProps extends Omit<InputProps, 'type'> {
    type?: 'text';
}
const InputText = (props: InputTextProps) => {
    return <Input type={props.type} {...props} />;
};

export default InputText;