import React, { useState } from 'react'
import {EventDetailsStyled, Header, Body, Footer} from './EventDetails.styles'
import CustomTitle from './CustomTitle/CustomTitle'
import Time from './Time/Time'
import Location from './Location/Location'
import Attendees from './Attendees/Attendees'
import {MyIcon, MyAnimIcon} from '../../../../myComponents/Icon/MyIcon.styles'
import {Wrapper} from '../../../../myComponents/Wrapper/Wrapper.styles'
import {Announcer} from '../../../../myComponents/Announcer/Announcer.styles'

interface EventDetailsProps{
    event?: object
    isIconVisible: boolean
    isNoteVisible: boolean
    showNotes(): void
}

const EventDetails: React.FC<EventDetailsProps>=({isIconVisible, isNoteVisible, showNotes })=>{
    const [isSettingVisible, setSettingVisibility] = useState<boolean>(false)
    const [test, setTest] = useState(false)
    return(
    <EventDetailsStyled>
        <Header>
            <CustomTitle/>
            <Announcer/>
            <Wrapper>
                {isSettingVisible && <MyAnimIcon test hoverdirection="down" name="info circle"/>}
                {/*<MyAnimIcon test hoverdirection="down" name="pencil alternate"/>
                <MyAnimIcon test hoverdirection="down" name="trash alternate"/>*/}
                <MyAnimIcon hoverdirection="down" name="ellipsis vertical" onClick={()=>setSettingVisibility(!isSettingVisible)}/>
            </Wrapper>    
        </Header>
        <Body>
            <Time/>
            <Location/>
            <Attendees visible={isIconVisible}/>
        </Body>
        <Footer>
            <MyAnimIcon
                className={test ? 'clicked' : ''}
                hoverdirection="up"
                name={/*isNoteVisible ? "chevron up" : */"chevron down"}
                onClick={()=>{
                
                    setTest(!test)
                    showNotes()
                    }
                }
            />
        </Footer>
    </EventDetailsStyled>
    )
}

export default EventDetails