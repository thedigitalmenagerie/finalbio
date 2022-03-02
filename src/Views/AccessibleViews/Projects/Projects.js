/* eslint-disable import/prefer-default-export */
import React from 'react';
// import CarouselContainer, { CarouselItem } from './Carousel/Carousel';
import {
  ProjectsContainer,
  ProjectsTop,
  // ProjectsBottom,
  // Image
} from './ProjectElements';
// import lll from '../../../Assets/slidebackgroundLLL.png';
// import grat from '../../../Assets/slidebackgroundGRATITUDE.png';
// import mesi from '../../../Assets/slidebackgroundMESI.png';

function Projects() {
  // const style = {
  //   width: '600px',
  //   height: '350px',
  // };
  return (
    <ProjectsContainer className='ProjectsContainer'>
      <ProjectsTop className='PojectsTop'>
        The stories I&apos;ve told using my newly acquired languages and
        narrative form
      </ProjectsTop>
      {/* <ProjectsBottom className='ProjectsBottom'>
        <CarouselContainer>
          <CarouselItem>
            <Image src={mesi}/>
          </CarouselItem>
          <CarouselItem>
            <iframe
              style={style}
              src='https://www.loom.com/embed/936f9cd09a4f4633bec8cbd031adc971'
              frameBorder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowFullScreen
            ></iframe>
          </CarouselItem>
          <CarouselItem>
            <Image src={lll}/>
          </CarouselItem>
          <CarouselItem>
            <iframe
              style={style}
              src='https://www.loom.com/embed/936f9cd09a4f4633bec8cbd031adc971'
              frameBorder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowFullScreen
            ></iframe>
          </CarouselItem>
          <CarouselItem>
            <Image src={grat}/>
          </CarouselItem>
          <CarouselItem>
            <iframe
              style={style}
              src='https://www.loom.com/embed/936f9cd09a4f4633bec8cbd031adc971'
              frameBorder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowFullScreen
            ></iframe>
          </CarouselItem>
        </CarouselContainer>
      </ProjectsBottom> */}
    </ProjectsContainer>
  );
}

export default Projects;
