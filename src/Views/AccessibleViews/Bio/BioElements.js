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

@media screen and (max-width: 1149px) {
    padding-top: 20%;
}

@media screen and (max-width: 1000px) {
    padding-top: 20%;
}

@media screen and (max-width: 550px) {
  font-size: 20px;
  padding-right: 25%;
}

@media screen and (max-width: 400px) {
    margin-top: 20%;
  }

  @media screen and (max-width: 350px) {
    font-size: 15px;
  }

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

  @media screen and (width: 1792px) and (height: 1120px) {
    font-size: 30px;
    padding-top: 20%;
    padding-left: 10%;
  }

  @media screen and (width: 360px) and (height: 640px) {
    font-size: 25px;
    padding-top: 80%;
    height: 50%;
    width: 75%;
    padding-left: 20%;
  }

  @media screen and (width: 411px) and (height: 731px) {
    font-size: 25px;
    padding-top: 80%;
    height: 50%;
    width: 75%;
    padding-right: 3%;
  }

  @media screen and (width: 411px) and (height: 823px) {
    font-size: 25px;
    padding-top: 80%;
    height: 50%;
    width: 75%;
    padding-right: 3%;
  }

  @media screen and (width: 320px) and (height: 568px) {
    font-size: 20px;
    padding-top: 80%;
    height: 50%;
    width: 75%;
    padding-right: 3%;
  }

  @media screen and (width: 375px) and (height: 667px) {
    font-size: 20px;
    padding-top: 80%;
    height: 50%;
    width: 75%;
    padding-right: 3%;
  }

  @media screen and (width: 414px) and (height: 736px) {
    font-size: 20px;
    padding-top: 80%;
    height: 50%;
    width: 60%;
    padding-right: 15%;
  }

  @media screen and (width: 375px) and (height: 812px) {
    font-size: 20px;
    padding-top: 80%;
    height: 50%;
    width: 60%;
    padding-right: 15%;
  }

  @media screen and (width: 768px) and (height: 1024px) {
    padding-top: 80%;
    height: 50%;
    width: 60%;
    padding-right: 15%;
  }

  @media screen and (width: 1024px) and (max-height: 1366px) {
    padding-top: 80%;
    height: 50%;
    width: 60%;
    padding-right: 15%;
    font-size: 35px;
  }

  @media screen and (width: 540px) and (height: 720px) {
    padding-top: 80%;
    height: 50%;
    width: 60%;
    padding-right: 15%;
    font-size: 20px;
  }

  @media screen and (width: 280px) and (height: 653px) {
    padding-top: 80%;
    height: 50%;
    width: 60%;
    padding-right: 5%;
    font-size: 15px;
  }

  @media screen and (width: 1024px) and (height: 600px) {
    padding-top: 30%;
  }

  @media screen and (width: 390px) and (height: 884px) {
    padding-top: 120%;
    padding-right: 30%;
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

@media screen and (max-width: 1149px) {
    padding-right: 5%;
    font-size: 18px;
  }

  @media screen and (max-width: 1000px) {
    padding-right: 7%;
    font-size: 15px;
  }

  @media screen and (max-width: 500px) {
    margin-right: 10%;
    max-width: 75%;
  }

  @media screen and (max-width: 400px) {
    margin-left: 20%;
    font-size: 12px;
  }

@media screen and (width: 1920px) and (height: 1080px) {
    font-size: 30px;
  }

  @media screen and (width: 2560px) and (height: 1440px) {
    font-size: 35px;
  }

  @media screen and (width: 1680px) and (height: 1050px) {
    font-size: 25px;
  }

  @media screen and (width: 1792px) and (height: 1120px) {
    font-size: 25px;
  }

  @media screen and (width: 360px) and (height: 640px) {
    font-size: 12px;
    // padding-top: 80%;
    // height: 50%;
    max-width: 100%;
    margin-left: 20%;
    // padding-left: 20%;
  }

  @media screen and (width: 411px) and (height: 731px) {
    font-size: 12px;
    // padding-top: 80%;
    // height: 50%;
    max-width: 100%;
    margin-left: 20%;
    padding-right: 10%;
  }

  @media screen and (width: 411px) and (height: 823px) {
    font-size: 12px;
    // padding-top: 80%;
    // height: 50%;
    max-width: 100%;
    margin-left: 20%;
    padding-right: 10%;
  }

  @media screen and (width: 320px) and (height: 568px) {
    font-size: 10px;
    // padding-top: 80%;
    // height: 50%;
    max-width: 100%;
    margin-left: 20%;
    padding-right: 10%;
  }

  @media screen and (width: 375px) and (height: 667px) {
    font-size: 10px;
    // padding-top: 80%;
    // height: 50%;
    max-width: 100%;
    margin-left: 20%;
    padding-right: 10%;
  }

  @media screen and (width: 414px) and (height: 736px) {
    font-size: 10px;
    // padding-top: 80%;
    // height: 50%;
    max-width: 100%;
    margin-left: 20%;
    padding-right: 20%;
  }

  @media screen and (width: 375px) and (height: 812px) {
    font-size: 10px;
    // padding-top: 80%;
    // height: 50%;
    max-width: 100%;
    margin-left: 20%;
    padding-right: 20%;
  }

  @media screen and (width: 768px) and (height: 1024px) {
    // padding-top: 80%;
    // height: 50%;
    max-width: 100%;
    margin-left: 20%;
    padding-right: 20%;
  }

  @media screen and (width: 1024px) and (max-height: 1366px) {
    padding-top: 0%;
    // height: 50%;
    max-width: 100%;
    margin-left: 40%;
    padding-right: 17%;
    font-size: 25px;
  }

  @media screen and (width: 540px) and (height: 720px) {
    padding-top: 0%;
    // height: 50%;
    max-width: 100%;
    margin-left: 40%;
    padding-right: 17%;
    font-size: 12px;
  }

  @media screen and (width: 280px) and (height: 653px) {
    padding-top: 0%;
    // height: 50%;
    max-width: 100%;
    margin-left: 20%;
    padding-right: 15%;
    font-size: 12px;
  }

  @media screen and (width: 1024px) and (height: 600px) {
    padding-right: 5%;
  }

  @media screen and (width: 390px) and (height: 884px) {
    padding-top: 0%;
    // height: 50%;
    max-width: 100%;
    margin-left: 20%;
    padding-right: 10%;
    font-size: 15px;
  }
`;
