import styled, {css, keyframes } from 'styled-components'

interface StyledProps {
    hover?: boolean;
}

const breatheAnimation = keyframes`
    from { height: 0px; opacity: 0.6;}

    to { height: auto; opacity: 1; }
`
export const EventDetailsStyled = styled.div`
    flex-grow: 4;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
`

export const Header = styled.div`
    margin: 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const Body = styled.div`
    margin-top: 5px;
    flex-grow: 2;   
    display: flex;
`

export const Footer = styled.div`
    align-self: center;
`

export const WrapperDetail = styled.div`
    font-size: 15px;
    margin-right: 15px;
    ${(props: StyledProps) => props.hover && 
    css`
    cursor: pointer;
        &:hover{
            transition: transform .3s;
            text-decoration: underline;
        }
    `};
`

export const StyledNotes = styled.div`
    /*border: 1px solid #2C3E50;
    border-radius: 5px;*/
    padding: 10px;
    margin-top: 10px;
    margin-right: 10px;
    margin-left: 10px;
    /*transition: all 3s ease;*/
    /*animation-name: ${breatheAnimation};
    animation-duration: 8s;
    animation-fill-mode: forwards;*/
    /*animation-name: changeLetter;
    animation-duration: 0.1s;
    @keyframes changeLetter {
        from {
            opacity: 0.5;
            height: 0px;
        }
        to {
            height:100px;
            opacity: 1;
        }
    }*/
    /*h3{
        animation: changeLetter 0.9s 1 linear;
        width:90%;
    }
    @keyframes changeLetter {
        0% {
            width: 10%;
        }
        100% {
            width: 100%;
        }
    }*/
    
    h3 {
        content: " ";
        display: block; 
        width: 50%;
        height: 1px;
        background: #2C3E50;
        transition:all 0.9s
    }  
    
    /*animation: 0.2s slide-down;
    margin-top:0%;
    @keyframes slide-down {
        from {
            margin-top: -100%;
            height: 300%; 
        }

        to {
            margin-top: 0%;
            height: 100%;
        }
    }*/
`

export const AttendeePopupContainer = styled.div`
    height: 200px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    position: absolute;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .15);
    overflow: auto;
    padding: 2px;
`