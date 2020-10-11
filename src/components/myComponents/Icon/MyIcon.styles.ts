import  styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import {Card} from '../../Modules/List/Event/Event.styles'

interface StyledProps {
    hoverdirection?: string
    test?: string
}

export const MyIcon = styled(Icon)`
    &&&&{
        color: #666;
        &:hover {
            color: #2C3E50;
            transform: scale3d(1.25, 1.25, 1);
            transition: transform .2s;
            cursor: pointer;
        }
        &.clicked{
            -moz-transform:rotate(180deg);
            -webkit-transform:rotate(180deg);
            transform: rotate(180deg);
            &:hover{
                -moz-transform:rotate(180deg) scale3d(1.25, 1.25, 1);
                -webkit-transform:rotate(180deg) scale3d(1.25, 1.25, 1);
                transform: rotate(180deg) scale3d(1.25, 1.25, 1);
            }
        }
    }

`
export const MyAnimIcon = styled(MyIcon)`
    &&{
        color: '#666';
        opacity: 0;
        transition: opacity .5s ease 0s, transform .5s ease 0s;
        transform: ${(props: StyledProps) => (
            props.hoverdirection === 'up' ? 'translate(0px, 10px)' : 'translate(0px, -10px)'
        )};
            ${Card}:hover &{
                opacity: 1;
                transform: translate(0px, 0px);
            };
    }
    
`
