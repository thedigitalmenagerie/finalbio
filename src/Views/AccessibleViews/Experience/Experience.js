/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ExperienceContainer,
  ExperienceTop,
  ExperienceBottom,
  Button,
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
        <Link to="/WasteManagement"><Button><ExperienceImg src={waste}/></Button></Link>
        <Link to="/AxiomInstalls"><Button><ExperienceImg src={axiom}/></Button></Link>
        <Link to="/Serving"><Button><ExperienceImg src={service}/></Button></Link>
      </ExperienceBottom>
    </ExperienceContainer>
  );
}

export default Experience;
