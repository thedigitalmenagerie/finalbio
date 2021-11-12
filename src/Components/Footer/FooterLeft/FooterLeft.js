/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  FooterLeftContainer,
  OLImage,
} from './FooterLeftElements';
import me from '../../../Assets/me2.png';

function FooterLeft() {
  return (
    <FooterLeftContainer className="FooterRightContainer">
      <OLImage src={me} className="OLImage"/>
    </FooterLeftContainer>
  );
}

export default FooterLeft;
