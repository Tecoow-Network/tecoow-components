import React from 'react';
import Input, { InputProps } from './Input';

interface InputDateProps extends Omit<InputProps, 'type'> {
    type?: 'date';
}

const InputDate = (props: InputDateProps) => {
    return <Input type={props.type} {...props} />;
};

export default InputDate;