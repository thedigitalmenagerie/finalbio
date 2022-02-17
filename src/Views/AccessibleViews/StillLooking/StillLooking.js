/* eslint-disable import/prefer-default-export */
import React from 'react';
import { StillLookingContainer, SLTop, SLBottom } from './StillLookingElements';

function StillLooking() {
  return (
    <StillLookingContainer className="StillLookingContainer">
      <SLTop className="SLTop">Still looking?</SLTop>
      <SLBottom className="SLBottom">
        You&apos;re clearly into me! These days, I&apos;m still working remotely and coding out new ideas while taking courses to improve my UI/UX execution. I am diligently searching for my way into tech and am waiting on the best fit. If you&apos;re looking to open the door to someone getting started and think I&apos;d be a good fit for your team, please drop me a line!
      </SLBottom>
    </StillLookingContainer>
  );
}

export default StillLooking;
