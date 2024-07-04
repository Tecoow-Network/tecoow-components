import React from 'react';
import Input, { InputProps } from './Input';

interface InputNumberProps extends Omit<InputProps, 'type'> {
    type?: 'number';
}

const InputNumber = (props: InputNumberProps) => {
    return <Input type={props.type} {...props} />;
};

export default InputNumber;