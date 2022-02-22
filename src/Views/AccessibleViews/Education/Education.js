/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  EducationContainer,
  EducationTop,
  EducationBottom,
  EdImage
} from './EducationElements';
import mtsu from '../../../Assets/MTSU.png';
import vscc from '../../../Assets/VSCC.png';
import nss from '../../../Assets/nss.png';

function Education() {
  return (
    <EducationContainer className="EducationContainer">
      <EducationTop className="EducationTop">Education</EducationTop>
      <EducationBottom className="EducationBottom">
        <EdImage src={nss}/>
        <EdImage src={mtsu}/>
        <EdImage src={vscc}/>
      </EducationBottom>
    </EducationContainer>
  );
}

export default Education;
