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

  @media screen and (width: 1792px) and (height: 1120px) {
    width: 300px;
  }

  @media screen and (width: 360px) and (height: 640px) {
    width: 100px;
  }

  @media screen and (width: 411px) and (height: 731px) {
    width: 100px;
  }

  @media screen and (width: 411px) and (height: 823px) {
    width: 125px;
  }

  @media screen and (width: 320px) and (height: 568px) {
    width: 90px;
  }

  @media screen and (width: 375px) and (height: 667px) {
    width: 100px;
  }

  @media screen and (width: 414px) and (height: 736px) {
    width: 100px;
  }
`;
