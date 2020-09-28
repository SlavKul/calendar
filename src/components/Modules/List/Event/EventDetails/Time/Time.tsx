import React from 'react'
import {Icon} from 'semantic-ui-react'
import {WrapperDetail} from '../EventDetails.styles'

const Time: React.FC = () =>{
    return (
        <WrapperDetail>
            <Icon name="clock outline" />
            16:30-17:00
        </WrapperDetail>
        
    )
}

export default Time