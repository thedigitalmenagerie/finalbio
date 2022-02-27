/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const EducationContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 100%;
max-height: 100%;
`;

export const EducationTop = styled.div`
height: 50%;
width: 50%;
color: #BF9000;
font-weight: bold;
font-size: 25px;
padding-top: 20%;

@media screen and (width: 1920px) and (height: 1080px) {
    font-size: 35px;
    padding-left: 15%;
  }

  @media screen and (width: 1366px) and (height: 768px) {
    padding-left: 15%;
  }

  @media screen and (width: 1536px) and (height: 864px) {
    padding-top: 30%;
  }

  @media screen and (width: 2560px) and (height: 1440px) {
    padding-top: 20%;
    font-size: 50px;
  }

  @media screen and (width: 1680px) and (height: 1050px) {
    font-size: 50px;
    padding-top: 30%;
    padding-left: 10%;
  }

  @media screen and (width: 1280px) and (height: 720px) {
    padding-top: 30%;
    padding-left: 15%;
  }

  @media screen and (width: 1280px) and (height: 800px) {
    padding-top: 30%;
    padding-left: 15%;
  }

  @media screen and (width: 1792px) and (height: 1120px) {
    font-size: 35px;
    padding-top: 20%;
    padding-left: 15%;
  }

  @media screen and (width: 360px) and (height: 640px) {
    font-size: 20px;
    padding-top: 80%;
    height: 50%;
    width: 75%;
    color: #BF9000;
    padding-left: 20%;
  }

  @media screen and (width: 411px) and (height: 731px) {
    font-size: 20px;
    padding-top: 80%;
    height: 50%;
    width: 75%;
    color: #BF9000;
    padding-left: 20%;
  }

  @media screen and (width: 411px) and (height: 823px) {
    font-size: 20px;
    padding-top: 80%;
    height: 50%;
    width: 75%;
    color: #BF9000;
    padding-left: 20%;
  }

  @media screen and (width: 320px) and (height: 568px) {
    font-size: 20px;
    padding-top: 80%;
    height: 50%;
    width: 75%;
    color: #BF9000;
    padding-left: 20%;
  }

  @media screen and (width: 375px) and (height: 667px) {
    font-size: 20px;
    padding-top: 80%;
    height: 50%;
    width: 75%;
    color: #BF9000;
    padding-left: 20%;
  }

  @media screen and (width: 414px) and (height: 736px) {
    font-size: 20px;
    padding-top: 80%;
    height: 50%;
    width: 75%;
    color: #BF9000;
    padding-left: 20%;
  }

  @media screen and (width: 375px) and (height: 812px) {
    font-size: 20px;
    padding-top: 80%;
    height: 50%;
    width: 75%;
    color: #BF9000;
    padding-left: 20%;
  }

  @media screen and (width: 768px) and (height: 1024px) {
    font-size: 20px;
    padding-top: 80%;
    height: 50%;
    width: 75%;
    color: #BF9000;
    padding-left: 20%;
  }

  @media screen and (width: 1024px) and (height: 1366px) {
    font-size: 35px;
    padding-top: 80%;
    height: 50%;
    width: 75%;
    color: #BF9000;
    padding-left: 20%;
  }
`;

export const EducationBottom = styled.div`
height: 50%;
max-width: 50%;
padding-top: 10%;
text-align: right;
margin-left: 30%;
margin-bottom: 20%;

@media screen and (width: 360px) and (height: 640px) {
    width: 100%;
    padding-left: 20%;
  }

  @media screen and (width: 411px) and (height: 731px) {
    width: 100%;
  }

  @media screen and (width: 411px) and (height: 823px) {
    width: 100%;
  }

  @media screen and (width: 320px) and (height: 568px) {
    width: 100%;
  }

  @media screen and (width: 375px) and (height: 667px) {
    width: 100%;
  }

  @media screen and (width: 414px) and (height: 736px) {
    width: 100%;
  }

  @media screen and (width: 375px) and (height: 812px) {
    width: 100%;
  }

  @media screen and (width: 768px) and (height: 1024px) {
    width: 100%;
  }

  @media screen and (width: 1024px) and (height: 1366px) {
    width: 100%;
  }
`;

export const EdImage = styled.img`
  width: 200px;
  filter: grayscale(100%);
  padding-right: 30px;

  @media screen and (width: 1920px) and (height: 1080px) {
      padding-right: 100px;
  }

  @media screen and (width: 1366px) and (height: 768px) {
    width: 150px;
  }

  @media screen and (width: 2560px) and (height: 1440px) {
    width: 300px;
    padding-right: 100px;
  }

  @media screen and (width: 1680px) and (height: 1050px) {
    padding-right: 50px;
  }

  @media screen and (width: 1280px) and (height: 720px) {
    width: 150px;
    padding-right: 50px;
  }

  @media screen and (width: 1280px) and (height: 800px) {
    width: 150px;
    padding-right: 50px;
  }

  @media screen and (width: 1792px) and (height: 1120px) {
    width: 200px;
    padding-right: 50px;
  }
  @media screen and (width: 360px) and (height: 640px) {
    width: 100px;
    padding-bottom: 25px;
  }

  @media screen and (width: 411px) and (height: 731px) {
    width: 100px;
    padding-bottom: 25px;
  }

  @media screen and (width: 411px) and (height: 823px) {
    width: 100px;
    padding-bottom: 25px;
  }

  @media screen and (width: 320px) and (height: 568px) {
    width: 100px;
    padding-bottom: 25px;
  }

  @media screen and (width: 375px) and (height: 667px) {
    width: 100px;
    padding-bottom: 25px;
  }

  @media screen and (width: 414px) and (height: 736px) {
    width: 100px;
    padding-bottom: 25px;
    margin-right: 10%;
  }

  @media screen and (width: 375px) and (height: 812px) {
    width: 100px;
    padding-bottom: 25px;
    margin-right: 10%;
  }

  @media screen and (width: 768px) and (height: 1024px) {
    width: 125px;
    padding-bottom: 25px;
    margin-right: 20%;
  }

  @media screen and (width: 1024px) and (height: 1366px) {
    width: 200px;
    padding-bottom: 25px;
    margin-right: 20%;
  }
`;
