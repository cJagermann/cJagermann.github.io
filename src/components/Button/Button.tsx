import React, {type ReactNode} from 'react';

interface IButtonProps {
    children?: ReactNode;
    onClick?: () => void;
    type?: string;
    classes?: string;
}

const Button: React.FC<IButtonProps> = (props) => {
    if (props.type === 'primary') {
        return (
            <button onClick={props.onClick} type={'button'}
                    className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg
                bg-white  dark:bg-black  text-gray-900 dark:text-gray-100
                transition-all duration-300 ease-in-out
                hover:scale-105 active:scale-100 link`}>
                {props.children}
            </button>
        )
    }
    return (
        <button onClick={props.onClick}
                className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center 
                text-gray-900 dark:text-gray-100 transition-all ease-out duration-300
                hover:bg-slate-100 dark:hover:bg-slate-600 dar:text-white hover:scale-105 active:scale-100 link`}>
            {props.children}
        </button>
    )
}

export default Button;