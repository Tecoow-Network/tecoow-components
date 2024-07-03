import React from 'react';
import Input, { InputProps } from './Input';

interface InputEmailProps extends Omit<InputProps, 'type'> {
    type?: 'email';
}

const InputEmail = (props: InputEmailProps) => {
    return <Input type={props.type} {...props} />;
};

export default InputEmail;