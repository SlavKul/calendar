import React, {useState} from 'react'
import {Icon} from 'semantic-ui-react'
import {WrapperDetail} from '../EventDetails.styles'
import AttendeesPopup from './AttendeesPopup/AttendeesPopup'

interface AttendeesProps{
    visible?: boolean
}
const Attendees: React.FC<AttendeesProps> = ({visible}) => {
    const [isAttendeeVisible, showAttendee] = useState<boolean>(false)
    return(
        <>
            <Icon name="users" />
            <WrapperDetail hover onClick={()=>showAttendee(true)}>
                14 Attendees {isAttendeeVisible && visible ? <AttendeesPopup/> : null}
            </WrapperDetail>
            
        </>
    )
}

export default Attendees