/* eslint-disable import/prefer-default-export */
import React from 'react';
import FooterLeft from '../../Components/Footer/FooterLeft/FooterLeft';
import FooterRight from '../../Components/Footer/FooterRight/FooterRight';
import NavBarLeft from '../../Components/NavBar/NavBarLeft/NavBarLeft';
import NavBarRight from '../../Components/NavBar/NavBarRight';
// import Bio from '../Bio/Bio';
// import Education from '../Education/Education';
// import Experience from '../Experience/Experience';
// import Intro from '../Intro/Intro';
// import Projects from '../Projects/Projects';
// import StillLooking from '../StillLooking/StillLooking';
// import Tech from '../Tech/Tech';
import {
  AccessibleContainer,
  AccessibleLeft,
  AccessibleLeftTop,
  AccessibleLeftBottom,
  AccessibleRight,
  AccessibleRightTop,
  AccessibleRightBottom,
} from './AccessibleElements';

function Accessible() {
  return (
    <AccessibleContainer className="AccessibleContainer">
      <AccessibleLeft className="AccessibleLeft">
        <AccessibleLeftTop className="AccessibleLeftTop">
          <NavBarLeft/>
          {/* <Intro/>
          <Bio/>
          <Projects/>
          <Tech/>
          <Education/>
          <Experience/>
          <StillLooking/> */}
        </AccessibleLeftTop>
        <AccessibleLeftBottom className="AccessibleLeftBottom">
          <FooterLeft/>
        </AccessibleLeftBottom>
      </AccessibleLeft>
      <AccessibleRight className="AccessibleRight">
        <AccessibleRightTop class="AccessibleRightTop">
          <NavBarRight/>
        </AccessibleRightTop>
        <AccessibleRightBottom className="AccessibleRightBottom">
          <FooterRight/>
        </AccessibleRightBottom>
      </AccessibleRight>
    </AccessibleContainer>
  );
}

export default Accessible;
