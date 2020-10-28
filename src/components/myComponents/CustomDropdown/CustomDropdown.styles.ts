import styled from "styled-components";

export const StyledInput = styled.div`
  cursor: pointer;
  line-height: 1em;
  white-space: normal;
  outline: 0;
  -webkit-transform: rotateZ(0);
  transform: rotateZ(0);
  width: 100%;
  min-width: 1em;
  min-height: 2.71428571em;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0.78571429em;
  color: rgba(0, 0, 0, 0.87);
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid transparent;
  border-radius: 0.28571429rem;
  -webkit-transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;
  transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;
  transition: box-shadow 0.1s ease, width 0.1s ease;
  transition: box-shadow 0.1s ease, width 0.1s ease,
    -webkit-box-shadow 0.1s ease;

  &:hover {
    border-color: rgba(34, 36, 38, 0.35);
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

export const EventColor = styled.div`
  height: auto;
  width: 10px;
  background-color: ${(props) => props.color};
  margin-right: 10px;
  border: 1px solid transparent;
  border-radius: 2px;
`;

export const StyledDropdown = styled.div`
  width: 100%;
  cursor: pointer;
  line-height: 1em;
  white-space: normal;
  outline: 0;
  -webkit-transform: rotateZ(0);
  transform: rotateZ(0);
  min-width: 1em;
  min-height: 2.71428571em;
  background: #fff;
  position: relative;
  z-index: 1;
  color: rgba(0, 0, 0, 0.87);
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 0.28571429rem;
  -webkit-transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;
  transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;
  transition: box-shadow 0.1s ease, width 0.1s ease;
  transition: box-shadow 0.1s ease, width 0.1s ease,
    -webkit-box-shadow 0.1s ease;
`;

export const DropdownMenu = styled.div`
  width: 100%;
  line-height: 1em;
  outline: 0;
  min-width: 1em;
  min-height: 2.71428571em;
  background: #fff;
  position: absolute;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 0.28571429rem;
`;
export const MenuItem = styled.div`
  display: flex;
  padding: 0.78571429rem;

  &:hover {
    background-color: rgba(34, 36, 38, 0.35);
  }
`;
