import React, {useState, useEffect} from 'react'
import {Icon} from 'semantic-ui-react'
import {WrapperDetail} from '../EventDetails.styles'
import AttendeesPopup from './AttendeesPopup/AttendeesPopup'

interface AttendeesProps{
    visible?: boolean
}

const Attendees: React.FC<AttendeesProps> = ({visible}) => {
    const [isAttendeePopup, showAttendeePopup] = useState<boolean>(false)
    console.log('I has been rendered', isAttendeePopup)

    useEffect(()=>{
        showAttendeePopup(false)
    }, [visible])

    return(
        <>
            <Icon name="users" />
            <WrapperDetail hover onClick={()=>showAttendeePopup(true)} onMouseLeave={()=>showAttendeePopup(false)}>
                14 Attendees {isAttendeePopup && visible ? <AttendeesPopup/> : null}
            </WrapperDetail>
        </>
    )
}

export default Attendees