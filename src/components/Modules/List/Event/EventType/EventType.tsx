import React from 'react'
import {EventTypeContainer} from './EventType.styles'
import {Popup} from 'semantic-ui-react'

interface EventTypeProps{
    eventType?: object
}
const EventType: React.FC<EventTypeProps>=()=>{
    return(
        <Popup content='Sport' size='mini' trigger={<EventTypeContainer />}
        />
    )
}

export default EventType