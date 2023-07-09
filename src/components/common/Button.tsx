'use client'
import cn from 'classnames';
import React from "react";

interface ButtonProps {
    appearance?: 'primary' | 'secondary' | 'destructive' | 'transparent',
    type?: 'default' | 'icon',
    children: React.ReactNode,
    className?: string,
    loading?: boolean,
    disabled?: boolean,
    onClick: () => void
}


const Button: React.FC<ButtonProps> = ({className, appearance = 'primary', type= 'default', children, onClick}) => {
    const handleOnClick = () => {
        onClick();
    }
    const getAppearanceBgColor = () => {
        switch(appearance){
            case 'primary':
                return 'bg-main-purple'
            case 'secondary':
                return 'lines-light'
            case 'destructive':
                return 'bg-red'
            case 'transparent':
                return 'bg-transparent'
        }
    }

    if(type === 'icon') return (
        <button onClick={handleOnClick} className={`py-2 px-4 rounded-3xl ${getAppearanceBgColor()} ${className}`}>
            {children}
        </button>
    )

    return(
        <button onClick={handleOnClick} className={`${getAppearanceBgColor()} ${className}`}>
            {children}
        </button>
    )
}

export default Button;