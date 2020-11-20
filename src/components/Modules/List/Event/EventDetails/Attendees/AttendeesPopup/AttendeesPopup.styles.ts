import styled from "styled-components";
import { MyIcon } from "../../../../../../myComponents/Icon/MyIcon.styles";

export const AttendeeList = styled.div`
  height: calc(700px - 55%);
  overflow: auto;
  margin-top: 5px;
`;

export const StyledAttendee = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 0px;
  padding: 8px 10px;
  background-color: #c3c3c3;
  border-radius: 5px;

  & > ${MyIcon} {
    visibility: hidden;
  }

  &:hover {
    cursor: pointer;
    background-color: #c3c3c3;
    border-radius: 5px;
    & > ${MyIcon} {
      visibility: visible;
    }
  }
`;

export const EmptyAttendeeList = styled.span`
  justify-content: space-around;
  display: flex;
  margin-top: 25px;
  color: grey;
`;
