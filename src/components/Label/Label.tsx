import React from 'react';

interface LabelProps {
    htmlFor: string;
    text: string;
    style?: React.CSSProperties;
    className?: string;
    id?: string;

}

const Label = (props: LabelProps) => {

    return (
        <label 
            htmlFor={props.htmlFor}
            style={props.style}
            className={props.className}
            id={props.id}
        >
            {props.text}
        </label>
    );
};

export default Label;