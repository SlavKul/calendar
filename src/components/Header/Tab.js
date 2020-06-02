import React from 'react'

const Tab = (props) => {
    return (
        <a data={props.data} className={props.classes} onClick={() => props.switchTab(props.data)}>
            {props.children}
        </a>
    )
}

export default Tab