/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ProjectsContainer,
  ProjectsTop,
  ProjectsBottom,
  Button,
  ProjectImage
} from './ProjectElements';
import g from '../../../Assets/GRATITUDE.png';
import lll from '../../../Assets/LLLEM.png';
import mesi from '../../../Assets/MESI.png';

function Projects() {
  return (
    <ProjectsContainer className='ProjectsContainer'>
      <ProjectsTop className='PojectsTop'>
        The stories I&apos;ve told using my newly acquired languages and
        narrative form
      </ProjectsTop>
      <ProjectsBottom className='ProjectsBottom'>
        <Link to="/MESI"><Button><ProjectImage className='ProjectImage' src={mesi}/></Button></Link>
        <Link to="/LLLEmporium"><Button><ProjectImage className='ProjectImage' src={lll}/></Button></Link>
        <Link to="/Gratitude"><Button><ProjectImage className='ProjectImage' src={g}/></Button></Link>
      </ProjectsBottom>
    </ProjectsContainer>
  );
}

export default Projects;
