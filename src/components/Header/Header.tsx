import Button from "../Button/Button.tsx";
import React from "react";

interface IHeaderPropsBase {
    scrollTo?: () => void;
    id?: string;
}

interface IHeaderProps extends IHeaderPropsBase {
    scrollTo_Projects?: () => void;
    scrollTo_Skills?: () => void;
    scrollTo_About?: () => void;
}

const Header: React.FC<IHeaderProps> = (props) => {
    const toggleDarkMode = () => {
        document.querySelector('html')?.classList.toggle('dark');
    }
    return (
        <div id={'header'} className={"mt-10 flex-row items-center justify-between sticky tablet:flex flex"}>
            <h1 className={"font-medium cursor-pointer mob:p-2 laptop:p-0 text-gray-900 dark:text-gray-100"}>
                Caleb Murphy
            </h1>
            <div className={"flex"}>
                <Button onClick={props.scrollTo_Projects}>Projects</Button>
                <Button onClick={props.scrollTo_Skills}>Skills</Button>
                <Button onClick={props.scrollTo_About}>About Me</Button>
                <Button >Resume</Button>
                <Button onClick={toggleDarkMode} >DM</Button>
            </div>
        </div>
    )
}

export default Header;