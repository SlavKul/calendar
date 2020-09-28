import React from 'react'
import {StyledDate} from './EventDate.styles'
import EventType from '../EventType/EventType'

interface EvenDateProps{
    date: string
}
const EventDate: React.FC<EvenDateProps> = ({date}) => {
    return(
    <>
        <EventType/>
        <StyledDate>
            <div style={{height: '50px'}}>{date}</div>
            <div style={{lineHeight: '1em', fontSize: '25px',}}>Pa</div>
        </StyledDate>
    </>
    )
}

export default EventDate