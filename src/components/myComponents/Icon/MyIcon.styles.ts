import  styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

export const MyIcon = styled(Icon)`
    ${(props)=> props.visible ? "" : "display:  none!important;"};
    color: #666;
    cursor: pointer;
        &:hover {
            color: #2C3E50;
            transform: scale3d(1.2, 1.2, 1);
            transition: transform .3s;
        }
`
