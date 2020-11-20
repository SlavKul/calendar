import styled from "styled-components";
import logo from "../../../logo/logo_edited.png";

export const ApptDetailsModal = styled.div`
  width: 70%;
  height: 600px;
  border-radius: 10px;
  background: #fff;
  margin: 10% auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  //flex-grow: 1;
  border-bottom: 0.5px solid rgba(34, 36, 38, 0.15);
  //padding: 0px 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 10px 10px;
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1px 10px;
`;

export const FlexRight = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 10px;
`;

export const BackgroundImg = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.7);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const ModalBody = styled.div`
  overflow: auto;
  flex: 2 1 0;
  //flex-grow: 3;
  padding: 20px;
  background-color: rgb(240, 240, 240);
`;

export const ModalFooter = styled.div`
  border-top: 0.5px solid rgba(34, 36, 38, 0.15);
  width: 100%;
  padding: 10px 10px;
  //flex-grow: 1;
`;

export const Divider = styled.span`
  border-left: 2px solid rgba(34, 36, 38, 0.15);
  position: absolute;
  top: 10px;
  bottom: 10px;
`;

export const EventDateBlock = styled.div`
  display: flex;
  justify-content: space-around;
  background: #fff;
  //border-radius: 5px;
  //border: 0.5px solid rgba(34, 36, 38, 0.15);
  //margin: 5px;
  height: 65px;
  width: auto;
  position: relative;
`;

export const EventDate = styled.div`
  padding: 5px 0px;
  text-align: center;
`;

export const DateTitle = styled.p`
  color: grey;
  margin: 0px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const DateBody = styled.p`
  margin: 0px;
  text-transform: uppercase;
`;