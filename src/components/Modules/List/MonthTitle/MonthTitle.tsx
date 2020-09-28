import React, {useState} from 'react'
import {StyledMOnthTitle, Divider} from './MonthTitle.styles'
import {MyIcon} from '../../../myComponents/Icon/MyIcon.styles'
import {Header} from '../Event/EventDetails/EventDetails.styles'
import {Badge} from '../../../myComponents/Badge/Badge.styles'
import Event from '../Event/Event'

interface MonthTitleProps {
    date: string
}
const events:  string[] = ['dsds', 'dsds', 'dsdsds']
const MonthTitle: React.FC<MonthTitleProps> = ({date}) =>{

    const [isEventShown, showEvent] = useState<boolean>(true)

    const renderEvents = events.map(()=>{
        return <Event/>
    })
    return(
        <>
        <Header >
            <StyledMOnthTitle>{date}</StyledMOnthTitle>
            <Badge>6</Badge>
            <MyIcon name="chevron down" visible={'visible'} onClick={()=>showEvent(!isEventShown)}/>
        </Header>
        <Divider/>
        {isEventShown ? renderEvents : null}
    </>
    )
}

export default MonthTitle