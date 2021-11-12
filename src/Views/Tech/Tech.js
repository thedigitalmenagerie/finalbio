/* eslint-disable import/prefer-default-export */
import React from 'react';
import { TechContainer, TechTop, TechBottom } from './TechElements';

function Tech() {
  return (
    <TechContainer className="TechContainer">
      <TechTop className="TechTop">
        Let me show you what I&apos;m working with-
      </TechTop>
      <TechBottom className="TechBottom">
        TECH STACK BB
      </TechBottom>
    </TechContainer>
  );
}

export default Tech;
