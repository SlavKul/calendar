import styled from "styled-components";
interface MyProps {
  color?: string;
}

export const Announcer = styled.div`
  border-radius: 3px;
  padding: 1px 5px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 700;
  margin-left: 10px;
  color: white;
  background-color: ${(props: MyProps) => props.color};
  //margin-bottom: 1px;
  //line-height: 1.1em;
  font-family: "Roboto", sans-serif;
`;
