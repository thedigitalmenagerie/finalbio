/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ExperienceContainer, ExperienceTop, ExperienceBottom } from './ExperienceElements';

function Experience() {
  return (
    <ExperienceContainer className="ExperienceContainer">
      <ExperienceTop className="ExperienceTop">
        And my work outside the classroom
      </ExperienceTop>
      <ExperienceBottom className="ExperienceBottom">
        WORK WORK WORK
      </ExperienceBottom>
    </ExperienceContainer>
  );
}

export default Experience;
