import React from 'react'
import {AttendeePopupContainer} from '../../EventDetails.styles'
import {Input, Segment} from 'semantic-ui-react'

interface Props {
    attendees?: string[]
}

const AttendeesPopup: React.FC<Props> = () =>{
    return(
        <AttendeePopupContainer>
            <Input
                type="text"
                name="creator"
                placeholder="New attendee"
                autoComplete="off"
                size="mini"
                icon="user plus"
                style={{ marginBottom: "5px" }}
            />
            <p style={{margin: '0px'}}>Name</p>
            <hr style={{margin: '5px'}}/>
            <p style={{margin: '0px'}}>Name</p>
            <hr style={{margin: '5px'}}/>
            <p style={{margin: '0px'}}>Name</p>
            <hr style={{margin: '5px'}}/>
            <p style={{margin: '0px'}}>Name</p>
            <hr style={{margin: '5px'}}/>
            <p style={{margin: '0px'}}>Name</p>
            <hr style={{margin: '5px'}}/>
            <p style={{margin: '0px'}}>Name</p>
            <hr style={{margin: '5px'}}/>

        </AttendeePopupContainer>
    )
}

export default AttendeesPopup