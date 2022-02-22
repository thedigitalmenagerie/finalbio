/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  ExperienceContainer,
  ExperienceTop,
  ExperienceBottom,
  ExperienceImg
} from './ExperienceElements';
import waste from '../../../Assets/wm.png';
import axiom from '../../../Assets/axiom.png';
import service from '../../../Assets/service.png';

function Experience() {
  return (
    <ExperienceContainer className="ExperienceContainer">
      <ExperienceTop className="ExperienceTop">
        And my work outside the classroom
      </ExperienceTop>
      <ExperienceBottom className="ExperienceBottom">
        <ExperienceImg src={waste}/>
        <ExperienceImg src={axiom}/>
        <ExperienceImg src={service}/>
      </ExperienceBottom>
    </ExperienceContainer>
  );
}

export default Experience;
