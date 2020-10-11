import React, { useState } from 'react'
import {EventContainer, Card, PicBlock} from './Event.styles'
import EventType from './EventType/EventType'
import EventDate from './EventDate/EventDate'
import EventDetails from './EventDetails/EventDetails'
import Notes from './EventDetails/Notes/Notes'
import {MyIcon} from '../../../myComponents/Icon/MyIcon.styles'

interface EventProps{
    event?: object
}
//font-family Montserrat, sans-serif
const Event: React.FC<EventProps>=()=>{

    const [isIconVisible, setIconVisibility] = useState<boolean>(false);
    const [isNoteVisible, toggleNotes] = useState <boolean>(false)

    return(
        <Card onMouseOver={()=>setIconVisibility(true)}
            onMouseLeave={()=>{
                setIconVisibility(false)
                /*toggleNotes(false)*/
            }}> 
            <EventContainer>
                <EventDate date={'25'}/>
                <PicBlock>
                </PicBlock>
                <EventDetails
                    isIconVisible={isIconVisible}
                    isNoteVisible={isNoteVisible}
                    showNotes={()=>toggleNotes(!isNoteVisible)}
                />
            </EventContainer>
            {isNoteVisible ? <Notes/> : null}
        </Card>
    )
}

export default Event