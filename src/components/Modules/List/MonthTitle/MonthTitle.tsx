import React, {useState} from 'react'
import {StyledMonthTitle, Divider} from './MonthTitle.styles'
import {MyIcon} from '../../../myComponents/Icon/MyIcon.styles'
import {Header} from '../Event/EventDetails/EventDetails.styles'
import {Badge} from '../../../myComponents/Badge/Badge.styles'
import {Wrapper} from '../../../myComponents/Wrapper/Wrapper.styles'
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
            <StyledMonthTitle>{date}</StyledMonthTitle>
            <Badge>6</Badge>
            <Wrapper>
                <MyIcon name="chevron down" visible={'visible'} onClick={()=>showEvent(!isEventShown)}/>
            </Wrapper>
            
        </Header>
        <Divider/>
        {isEventShown ? renderEvents : null}
    </>
    )
}

export default MonthTitle