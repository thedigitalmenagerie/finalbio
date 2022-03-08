/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
`;

export const LogoContainer = styled.div`
  margin-top: 10px;
  writing-mode: vertical-rl;

  @media screen and (width: 1149px) {
    font-size: 15px;
  }

  @media screen and (width: 1920px) and (height: 1080px) {
    font-size: 25px;
  }

  @media screen and (width: 2560px) and (height: 1440px) {
    font-size: 35px;
  }

  @media screen and (width: 1680px) and (height: 1050px) {
    font-size: 25px;
  }

  @media screen and (width: 1792px) and (height: 1120px) {
    font-size: 25px;
  }

  @media screen and (width: 411px) and (height: 731px) {
    font-size: 15px;
  }

  @media screen and (width: 768px) and (height: 1024px) {
    font-size: 20px;
  }

  @media screen and (width: 1024px) and (height: 1366px) {
    font-size: 25px;
  }
`;
