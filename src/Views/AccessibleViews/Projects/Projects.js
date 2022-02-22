/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ProjectsContainer, ProjectsTop, ProjectsBottom } from './ProjectElements';

function Projects() {
  const style = {
    width: '600px',
    height: '350px',
  };
  return (
    <ProjectsContainer className="ProjectsContainer">
      <ProjectsTop className="PojectsTop">And the stories I&apos;ve told using my newly acquired languages and narrative form</ProjectsTop>
      <ProjectsBottom className="ProjectsBottom">
      <iframe style={style} src="https://www.loom.com/embed/936f9cd09a4f4633bec8cbd031adc971" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
      </ProjectsBottom>
    </ProjectsContainer>
  );
}

export default Projects;
