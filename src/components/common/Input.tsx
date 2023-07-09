import React from "react";
import cn from "classnames";

interface CustomInputProps {
    id: string,
    label?: string,
    placeholder?: string,
    value?: string,
    onChange: (value: string) => void,
    className?: string
}

export const Input: React.FC<CustomInputProps> = ({id,label, value, placeholder, onChange, className}) => {

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }

    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                type="text"
                value={value}
                className={cn('', className)}
                placeholder={placeholder}
                onChange={handleOnChange}/>
        </div>
    )
}