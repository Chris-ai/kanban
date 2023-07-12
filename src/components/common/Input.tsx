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

const Input: React.FC<CustomInputProps> = ({id,label, value, placeholder, onChange, className}) => {

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }

    return (
        <div className={'flex flex-col gap-y-2 w-full'}>
            {label && <label htmlFor={id} className={'font-bold text-xs'}>{label}</label>}
            <input
                id={id}
                type="text"
                value={value}
                className={cn('body-l bg-dark-grey border border-medium-grey border-opacity-25 rounded px-4 py-2 outline-0 placeholder-opacity-25', className)}
                placeholder={placeholder}
                onChange={handleOnChange}/>
        </div>
    )
}

export default Input;