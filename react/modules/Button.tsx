import React from 'react'

interface ButtonProps{
    onclick: Function;
    variant? : string,
    disabled? : boolean;
    children? : React.ReactNode;
    className? : string;

}

const Button : React.FC<ButtonProps> = ({onclick, variant="primary", disabled=false, children, className}) : React.ReactElement=> {

    const onclickFunc : any = (...params: any) => onclick(...params);
    const classNames = `button-module ${className} ${variant}`;

    return (
        <button 
            onClick={onclickFunc}
            className={classNames}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button


//<Button onclick={onButtonClick}>Button</Button>
//<Button onclick={onButtonClick} disabled={true} variant="secondary">Disabled Button</Button> 