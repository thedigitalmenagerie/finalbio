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
`;

export const Modal = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: white;
display: flex;
flex-flow: row wrap;
justify-content: center;
top: 0;
left: 0;
transitionL 0.3s ease-in-out;
opacity:  ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '100%')};
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
