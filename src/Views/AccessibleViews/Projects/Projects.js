/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ProjectsContainer, ProjectsTop, ProjectsBottom } from './ProjectElements';

function Projects() {
  return (
    <ProjectsContainer className="ProjectsContainer">
      <ProjectsTop className="PojectsTop">And the stories I&apos;ve told using my newly acquired languages and narrative form</ProjectsTop>
      <ProjectsBottom className="ProjectsBottom"></ProjectsBottom>
    </ProjectsContainer>
  );
}

export default Projects;
