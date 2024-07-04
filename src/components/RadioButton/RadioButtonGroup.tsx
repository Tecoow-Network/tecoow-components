import React from 'react';
import RadioButton, { RadioButtonProps } from './RadioButton';

interface RadioGroupProps {
    options: RadioButtonProps[];
    name: string;
    onChange: (selectedValue: string) => void;
}

const RadioGroup = (props: RadioGroupProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value);
    };

    return (
        <div>
            {props.options.map(option => (
                <RadioButton
                    key={option.id}
                    id={option.id}
                    value={option.value}
                    label={option.label}
                    name={props.name}
                    onChange={handleChange}
                />
            ))}
        </div>
    );
};

export default RadioGroup;