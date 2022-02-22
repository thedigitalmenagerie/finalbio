/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  StillLookingContainer,
  SLTop,
  SLBottom,
  SLSpecial
} from './StillLookingElements';

function StillLooking() {
  return (
    <StillLookingContainer className="StillLookingContainer">
      <SLTop className="SLTop">. . . still lookin&apos;?</SLTop>
      <SLBottom className="SLBottom">
        <SLSpecial>You&apos;re clearly into me!</SLSpecial>
        If you&apos;re thinking I&apos;d be a good fit for what you have going on, reach out and we&apos;ll talk the tech.
      </SLBottom>
    </StillLookingContainer>
  );
}

export default StillLooking;
