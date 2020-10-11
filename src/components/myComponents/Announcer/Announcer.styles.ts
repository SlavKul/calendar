import styled from 'styled-components'
interface MyProps {
    today?: boolean;
}

export const Announcer = styled.div.attrs((props: MyProps)=>({
    children: props.today ? 'Dnes' : 'Zítra'
}))`
    border: ${(props: MyProps) => props.today ? '1.5px solid red' : '1.5px solid rgb(18, 84, 23)'};
    border-radius: 3px;
    padding: 3px 5px;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 700;
    margin-left: 10px;
    margin-bottom: 1px;
    line-height: 1.1em;
    font-family: "Roboto", sans-serif;
`