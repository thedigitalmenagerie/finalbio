/* eslint-disable import/prefer-default-export */
import React from 'react';
import FooterLeft from '../../../Components/Accessible/Footer/FooterLeft/FooterLeft';
import FooterRight from '../../../Components/Accessible/Footer/FooterRight/FooterRight';
import NavBarLeft from '../../../Components/Accessible/NavBar/NavBarLeft/NavBarLeft';
import NavBarRight from '../../../Components/Accessible/NavBar/NavBarRight/NavBarRight';
import Intro from '../Intro/Intro';
import Bio from '../Bio/Bio';
import Tech from '../Tech/Tech';
import Projects from '../Projects/Projects';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import StillLooking from '../StillLooking/StillLooking';
import {
  AccessibleContainer,
} from './AccessibleElements';

function Accessible() {
  return (
    <AccessibleContainer className="AccessibleContainer">
          <NavBarLeft/>
          <NavBarRight/>
          <FooterLeft/>
          <FooterRight/>
          <Intro/>
          <Bio/>
          <Tech/>
          <Projects/>
          <Education/>
          <Experience/>
          <StillLooking/>
    </AccessibleContainer>
  );
}

export default Accessible;
