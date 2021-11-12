/* eslint-disable import/prefer-default-export */
import React from 'react';
import { StillLookingContainer, SLTop, SLBottom } from './StillLookingElements';

function StillLooking() {
  return (
    <StillLookingContainer className="StillLookingContainer">
      <SLTop className="SLTop">Still looking?</SLTop>
      <SLBottom className="SLBottom"></SLBottom>
    </StillLookingContainer>
  );
}

export default StillLooking;
