import React, { useState } from 'react'
import {EventDetailsStyled, Header, Body, Footer} from './EventDetails.styles'
import CustomTitle from './CustomTitle/CustomTitle'
import Time from './Time/Time'
import Location from './Location/Location'
import Attendees from './Attendees/Attendees'
import {MyIcon} from '../../../../myComponents/Icon/MyIcon.styles'

interface EventDetailsProps{
    event?: object
    isIconVisible: boolean
    isNoteVisible: boolean
    showNotes(): void
}

const EventDetails: React.FC<EventDetailsProps>=({isIconVisible,isNoteVisible, showNotes })=>{
    
    const notes = true
    return(
    <EventDetailsStyled>
        <Header>
            <CustomTitle/>
                <MyIcon visible={isIconVisible} name="ellipsis vertical"/>
                {/*<Popup flowing hoverable position='bottom center' trigger={<MyIcon visible={visible} name="info circle"/>}/>
                <Creator/>
                <MyIcon visible={visible} name="pencil alternate"/>
                <MyIcon visible={visible} name="trash alternate"/>*/}
        </Header>
        <Body>
            <Time/>
            <Location/>
            <Attendees visible={isIconVisible}/>
            {/*<MyIcon visible={isIconVisible} name="user plus" />*/}
        </Body>
        <Footer>
            <MyIcon 
                visible={isIconVisible}
                name={isNoteVisible ? "chevron up" : "chevron down"}
                onClick={showNotes}
            />
        </Footer>
    </EventDetailsStyled>
    )
}

export default EventDetails