import React from 'react';
import Input, { InputProps } from './Input';

interface InputPasswordProps extends Omit<InputProps, 'type'> {
    type?: 'password';
}

const InputPassword = (props: InputPasswordProps) => {
    return <Input type={props.type} {...props} />;
};

export default InputPassword;