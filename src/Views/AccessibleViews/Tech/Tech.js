/* eslint-disable import/prefer-default-export */
import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import { TechContainer, TechTop, TechBottom } from './TechElements';

export const words = [
  {
    text: 'VS CODE',
    value: 63,
  },
  {
    text: 'GITHUB',
    value: 63,
  },
  {
    text: 'TERMINAL',
    value: 62,
  },
  {
    text: 'GITBASH',
    value: 62,
  },
  {
    text: 'UNIX COMMANDS',
    value: 62,
  },
  {
    text: 'FIGMA WIREFRAME',
    value: 63,
  },
  {
    text: 'FEATURE TICKETS',
    value: 63,
  },
  {
    text: 'WORK FLOW',
    value: 63,
  },
  {
    text: 'GIT',
    value: 63,
  },
  {
    text: 'BRANCHING',
    value: 63,
  },
  {
    text: 'PULL REQUESTS',
    value: 63,
  },
  {
    text: 'HTML',
    value: 64,
  },
  {
    text: 'CSS',
    value: 64,
  },
  {
    text: 'JAVASCRIPT',
    value: 64,
  },
  {
    text: 'ES6',
    value: 63,
  },
  {
    text: 'DOM INTERACTION',
    value: 63,
  },
  {
    text: 'DEBUGGING',
    value: 63,
  },
  {
    text: 'ERD',
    value: 63,
  },
  {
    text: 'SASS',
    value: 63,
  },
  {
    text: 'NPM',
    value: 62,
  },
  {
    text: 'WEBPACK',
    value: 62,
  },
  {
    text: 'ESLINT',
    value: 62,
  },
  {
    text: 'API',
    value: 63,
  },
  {
    text: 'FIREBASE',
    value: 63,
  },
  {
    text: 'AUTHENTICATION',
    value: 63,
  },
  {
    text: 'AXIOS',
    value: 63,
  },
  {
    text: 'REACT',
    value: 64,
  },
  {
    text: 'JSX',
    value: 62,
  },
  {
    text: 'LIFECYCLE METHODS',
    value: 62,
  },
  {
    text: 'C#',
    value: 64,
  },
  {
    text: 'LINQ',
    value: 64,
  },
  {
    text: 'SQL',
    value: 64,
  },
  {
    text: '.NET CORE',
    value: 64,
  },
  {
    text: 'REMOTE',
    value: 63,
  },
  {
    text: 'COLLABORATION',
    value: 63,
  },
  {
    text: 'ARCHITECTURE',
    value: 63,
  },
];

const options = {
  rotations: 2,
  rotationAngles: [0, 0],
  colors: ['#BF8B30', '#87441D', '#916649', '#B81711', '#C84627', '#A82E20', '#fff'],
  padding: 2,
  // fontSizes: [10, 20],
  // scale: 'sqrt',
  spiral: 'archimedean',
};

function Tech() {
  return (
    <TechContainer className='TechContainer'>
      <TechTop className='TechTop'>
        Let me show you what I&apos;m working with-
      </TechTop>
      <TechBottom className='TechBottom'>
        <ReactWordcloud words={words} options={options} />
      </TechBottom>
    </TechContainer>
  );
}

export default Tech;
