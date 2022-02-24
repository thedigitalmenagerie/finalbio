/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const BioContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 100%;
max-height: 100%;
`;

export const BioTop = styled.div`
height: 50%;
width: 50%;
color: #BF9000;
font-weight: bold;
font-size: 25px;
// padding-top: 15%;

@media screen and (width: 1920px) and (height: 1080px) {
    font-size: 35px;
  }

@media screen and (width: 1440px) and (height: 900px) {
    padding-top: 20%;
  }

  @media screen and (width: 1536px) and (height: 864px) {
    padding-top: 20%;
  }

  @media screen and (width: 2560px) and (height: 1440px) {
    padding-top: 20%;
    font-size: 50px;
  }

  @media screen and (width: 1680px) and (height: 1050px) {
    font-size: 30px;
    padding-top: 20%;
  }

  @media screen and (width: 1280px) and (height: 720px) {
    font-size: 25px;
    padding-top: 20%;
  }

  @media screen and (width: 1280px) and (height: 800px) {
    padding-top: 20%;
  }
`;

export const BioBottom = styled.div`
height: 50%;
max-width: 50%;
padding-top: 5%;
text-align: right;
margin-left: 30%;
margin-bottom: 20%;
font-weight: bold;
font-size: 20px;
font-style: italic;

@media screen and (width: 1920px) and (height: 1080px) {
    font-size: 30px;
  }

  @media screen and (width: 2560px) and (height: 1440px) {
    font-size: 35px;
  }

  @media screen and (width: 1680px) and (height: 1050px) {
    font-size: 25px;
  }
`;
