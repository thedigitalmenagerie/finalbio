/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ProjectsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 100%;
max-height: 100%;
`;

export const ProjectsTop = styled.div`
height: 50%;
width: 50%;
font-weight: bold;
font-size: 25px;
// padding-top: 15%;
 font-style: italic;

@media screen and (width: 1920px) and (height: 1080px) {
    font-size: 35px;
  }
`;

export const ProjectsBottom = styled.div`
// display: flex;
// flex-flow: row wrap;
// justify-content: center;
// align-items: center;
// height: 50%;
max-width: 50%;
padding-top: 5%;
// text-align: right;
margin-left: 30%;
// margin-bottom: 20%;
// font-weight: bold;
// font-size: 20px;
// font-style: italic;
`;

export const Image = styled.img`
  width: 650px;
  border-radius: 10px;

  @media screen and (width: 1920px) and (height: 1080px) {
  }
`;
