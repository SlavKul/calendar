import styled from 'styled-components'

export const EventContainer = styled.div`
    display:flex;
    height: 75px;
`

export const Card = styled.div`
    border-radius: 10px;
    margin: 5px 10px 5px 10px;
    padding: 10px;
    background: white;
    transition: .25s;
    &:hover {
            margin: 5px 0px 5px 0px;
            box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .15);
            transition: cubic-bezier(.165, .1, .44, 1) .25s;   
    }
`

export const PicBlock = styled.div`
    height: 100%;
    width: 125px;
    background: lightblue;
    margin: 0px 30px;
    border: 1px solid black;
    border-radius: 5px;
`
    
