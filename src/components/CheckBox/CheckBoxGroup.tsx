import React from 'react';
import CheckBox, { CheckBoxProps } from './CheckBox';

interface CheckBoxGroupProps {
    options: CheckBoxProps[];
    onChange: (checkedItems: string[]) => void;
}

const CheckBoxGroup = (props: CheckBoxGroupProps) => {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checkedItems = props.options
            .filter(option => option.id === event.target.id && event.target.checked)
            .map(option => option.value);
        props.onChange(checkedItems);
    };
    
    return (
        <div>
            {props.options.map(option => (
                <CheckBox
                    key={option.id}
                    id={option.id}
                    value={option.value}
                    label={option.label}
                    onChange={handleChange}
                />
            ))}
        </div>
    );
};

export default CheckBoxGroup;