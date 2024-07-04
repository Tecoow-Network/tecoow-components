import React from 'react';

interface DropDownProps {
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
    value: string;
    onChange: (value: string) => void;
}

const DropDown = (props: DropDownProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.onChange(event.target.value);
    };

    return (
        <select 
            id={props.id} 
            className={props.className} 
            style={props.style} 
            value={props.value} 
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

export default DropDown;