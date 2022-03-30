/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  EducationContainer,
  EducationTop,
  EducationBottom,
  Button,
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
        <Link to="/NSS"><Button><EdImage src={nss}/></Button></Link>
        <Link to="/MTSU"><Button><EdImage src={mtsu}/></Button></Link>
        <Link to="/VolunteerState"><Button><EdImage src={vscc}/></Button></Link>
      </EducationBottom>
    </EducationContainer>
  );
}

export default Education;
