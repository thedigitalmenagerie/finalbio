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

  @media screen and (width: 1920px) and (height: 1080px) {
    font-size: 25px;
  }
`;
