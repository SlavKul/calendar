import React from 'react'
import './Attendee.css'

const style = {
    segment: {
        padding: '10px',
        margin: '0px 0px 5px',
    }
}

const Attendee = (props) => {
    return(
        <div className="ui clearing segment" style={style.segment}>
            <p style={{display: 'inline'}}>{props.name}</p>
            <i className="times circle outline icon remove-attendee" onClick={props.removeAttendee}/>
        </div>
    )
}

export default Attendee