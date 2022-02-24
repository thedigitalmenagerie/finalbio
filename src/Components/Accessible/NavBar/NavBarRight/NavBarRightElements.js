/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  text-align: right;
`;

export const LogoContainer = styled.div`
`;

export const LogoImg = styled.img`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 175px;

  @media screen and (width: 1920px) and (height: 1080px) {
    width: 300px;
  }

  @media screen and (width: 2560px) and (height: 1440px) {
    width: 400px;
  }

  @media screen and (width: 1680px) and (height: 1050px) {
    width: 300px;
  }
`;
