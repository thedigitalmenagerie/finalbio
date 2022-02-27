/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FooterRightContainer = styled.div`
  display: block;
  position: fixed;
  bottom: 0;
  right: 0;
`;

export const OuterLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
`;

export const OLImage = styled.img`
  width: 30px;
  padding-bottom: 10px;
  padding-right: 20px;

  @media screen and (width: 1920px) and (height: 1080px) {
    width: 50px;
  }

  @media screen and (width: 2560px) and (height: 1440px) {
    width: 75px;
  }


  @media screen and (width: 1680px) and (height: 1050px) {
    width: 50px;
  }

  @media screen and (width: 1792px) and (height: 1120px) {
    width: 50px;
  }

  @media screen and (width: 360px) and (height: 640px) {
    width: 20px;
  }

  @media screen and (width: 411px) and (height: 731px) {
    width: 20px;
  }

  @media screen and (width: 411px) and (height: 823px) {
    width: 25px;
  }

  @media screen and (width: 320px) and (height: 568px) {
    width: 25px;
  }

  @media screen and (width: 1024px) and (height: 1366px) {
    width: 50px;
  }

  @media screen and (width: 540px) and (height: 720px) {
    width: 25px;
  }
`;

export const Modal = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: white;
top: 0;
left: 0;
transitionL 0.3s ease-in-out;
opacity:  ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '100%')};
@media screen and (width: 1366px) and (height: 768px) {
  display: flex;
  flex-flow: row wrap;
}
`;

export const ButtonTwo = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
`;
