import React from 'react'
import './Attendees.css'
import Attendee from './Attendee/Attendee'


const Attendees = (props) => {
    const {attendees} = props
    const listOfAttendess = attendees.map((attendee, index) => {
        return <Attendee key={index} name={attendee} removeAttendee={() => props.removeAttendee(index)}/>
    })
    return(
            <>
                <label>Attendees:</label> {/*TODO: Add labeled button with attendees number and icor add user*/}
                <div className="ui icon input creator" style={{borderBottom: '.5px solid rgba(34,36,38,.15)'}}>
                    <i className="test user plus icon"/>  
                    <input type="text" name="creator" placeholder="New attendee" autoComplete="off" onKeyPress={props.addNewAttendee} style={{marginBottom: '5px'}}/>                           
                </div>
                <div style={{overflow: 'auto', height: '442px', marginTop: '5px'}}>
                    {listOfAttendess.length ? listOfAttendess : <p className="empty-list">List is empty</p>}
                </div>    
            </>
    )
}

export default Attendees