/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  NavBarContainer,
  LogoContainer,
} from './NavBarLeftElements';

function NavBarLeft() {
  return (
    <NavBarContainer className="FooterRightContainer">
        <LogoContainer className="OuterLinks">
            HONEY-RAE SWAN, BS || SOFTWARE ENGINEER
          </LogoContainer>
    </NavBarContainer>
  );
}

export default NavBarLeft;
