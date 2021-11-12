/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  EducationContainer,
  EducationTop,
  EducationBottom
} from './EducationElements';

function Education() {
  return (
    <EducationContainer className="EducationContainer">
      <EducationTop className="EducationTop"></EducationTop>
      <EducationBottom className="EducationBottom"></EducationBottom>
    </EducationContainer>
  );
}

export default Education;
