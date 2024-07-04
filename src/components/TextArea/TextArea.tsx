import React from 'react';
import Input, { InputProps } from '../Input/Input';

interface TextAreaProps extends Omit<InputProps, 'type'> {
    type?: 'textarea';
    rows?: number;
}

const TextArea = (props: TextAreaProps) => {
    return <TextArea type="textarea" rows={props.rows} {...props} />;
};

export default TextArea;