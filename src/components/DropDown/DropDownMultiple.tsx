import React, { useState } from 'react';

interface DropDownGroupProps {
    options: { 
        label: string; 
        value: string; 
        className?: string; 
        id?: string; 
        style?: React.CSSProperties; 
    }[];
    className?: string; 
    id?: string; 
    style?: React.CSSProperties; 
    selectedValues: string[];
    onChange: (selectedValues: string[]) => void;
}

const DropDownGroup = (props: DropDownGroupProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        props.onChange(selectedOptions);
    };

    return (
        <select 
            id={props.id} 
            className={props.className} 
            style={props.style} 
            multiple value={props.selectedValues} 
            onChange={handleChange}
        >
            {props.options.map(option => (
                <option 
                    id={props.id} 
                    className={props.className} 
                    style={props.style}  
                    key={option.value} 
                    value={option.value}
                >
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default DropDownGroup;