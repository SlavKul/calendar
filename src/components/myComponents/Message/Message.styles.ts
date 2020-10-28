import styled from "styled-components";

export const StyledMessage = styled.div`
  min-width: 400px;
  background-color: white;
  position: fixed;
  border: 1px solid transparent;
  padding: 20px;
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  margin: auto;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-content: space-between;

  /*-webkit-animation: cssAnimation 5s forwards;
  animation: cssAnimation 5s forwards;
  @keyframes cssAnimation {
    0% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      //opacity: 0;
      display: none;
    }
  }
  @-webkit-keyframes cssAnimation {
    0% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      //opacity: 0;
      display: none;
    }
  }*/
`;

export const TextMessage = styled.span`
  margin: 0px 10px;
  font-size: 16px;
  font-weight: 500;
`;
