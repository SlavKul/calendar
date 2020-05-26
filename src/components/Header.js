import React from 'react'

const Header = (props) => {
    return(
        <div className="ui segment" date={props.date}>
            <i className="large chevron left icon"></i>
            <p style={{display: 'inline'}}>{props.date}</p>
            <i className="large chevron right icon"></i>
            <button className="mini ui right floated button">New event</button>
        </div>
    )
}

export default Header