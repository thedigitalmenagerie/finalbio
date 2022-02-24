/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StillLookingContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 100%;
max-height: 100%;
`;

export const SLTop = styled.div`
height: 50%;
width: 50%;
color: black;
font-style: italic;
font-weight: bold;
font-size: 25px;

@media screen and (width: 1920px) and (height: 1080px) {
    font-size: 35px;
    padding-left: 10%;
  }

  @media screen and (width: 1366px) and (height: 768px) {
    padding-left: 15%;
  }

  @media screen and (width: 1440px) and (height: 900px) {
    padding-top: 10%;
  }

  @media screen and (width: 1536px) and (height: 864px) {
    padding-top: 10%;
  }

  @media screen and (width: 2560px) and (height: 1440px) {
    padding-top: 20%;
    font-size: 50px;
  }

  @media screen and (width: 1680px) and (height: 1050px) {
    font-size: 50px;
    padding-top: 20%;
    padding-left: 10%;
  }

  @media screen and (width: 1280px) and (height: 720px) {
    font-size: 30px;
    padding-top: 20%;
    padding-left: 15%;
  }

  @media screen and (width: 1280px) and (height: 800px) {
    font-size: 30px;
    padding-top: 20%;
    padding-left: 15%;
  }
`;

export const SLBottom = styled.div`
height: 50%;
max-width: 50%;
padding-top: 10%;
text-align: right;
margin-left: 30%;
margin-bottom: 20%;

@media screen and (width: 1920px) and (height: 1080px) {
  font-size: 25px;
  font-style: italic;
  font-weight: bold;
}

@media screen and (width: 2560px) and (height: 1440px) {
    font-size: 30px;
    font-style: italic;
    font-weight: bold;
  }

  @media screen and (width: 1680px) and (height: 1050px) {
    font-size: 30px;
    font-style: italic;
    font-weight: bold;
  }

  @media screen and (width: 1280px) and (height: 720px) {
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
    margin-bottom: 15%;
  }

  @media screen and (width: 1280px) and (height: 800px) {
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
    margin-bottom: 15%;
  }
`;

export const SLSpecial = styled.div`
color: #BF9000;
font-weight: bold;
font-size: 50px;
font-style: normal;
padding-bottom: 25px;

@media screen and (width: 2560px) and (height: 1440px) {
    font-size: 75px;
  }

  @media screen and (width: 1680px) and (height: 1050px) {
    font-size: 75px;
  }
`;
