/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  NavBarContainer,
  LogoContainer,
  LogoImg,
} from './NavBarRightElements';
import logo from '../../../../Assets/Logo.png';

function NavBarRight() {
  return (
    <NavBarContainer className="FooterRightContainer">
        <LogoContainer className="OuterLinks">
            <LogoImg src={logo} className="OLImage"/>
          </LogoContainer>
    </NavBarContainer>
  );
}

export default NavBarRight;
