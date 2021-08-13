import React from 'react'

interface Props {
    id? : string;
    className? : string;
    children: string
}

const Label: React.FC<Props> = (props:Props) :React.ReactElement => {
    return (
        <span id={props.id} className={props.className}>
            {props.children}
        </span>
    )
}

export default Label


//<Label id="app-label" className="app-label">This is a label from the component</Label>
