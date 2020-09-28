import React from 'react'
import {Icon} from 'semantic-ui-react'
import {WrapperDetail} from '../EventDetails.styles'

const Location: React.FC = () =>{
    return (
        <WrapperDetail>
            <Icon  name="map marker alternate"/>
            Brno
        </WrapperDetail>
    )
}

export default Location