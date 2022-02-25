/* eslint-disable import/prefer-default-export */
// comment //
import styled from 'styled-components';

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
`;

export const IntroTop = styled.div`
  height: 50%;
  width: 50%;
  color: black;
  font-style: italic;
  font-weight: bold;
  font-size: 25px;
  padding-top: 15%;

  @media screen and (width: 1920px) and (height: 1080px) {
    font-size: 35px;
  }

  @media screen and (width: 1440px) and (height: 900px) {
    padding-top: 20%;
  }

  @media screen and (width: 2560px) and (height: 1440px) {
    font-size: 50px;
  }

  @media screen and (width: 1680px) and (height: 1050px) {
    padding-top: 17%;
    font-size: 40px;
  }

  @media screen and (width: 1280px) and (height: 800px) {
    padding-top: 20%;
  }

  @media screen and (width: 1792px) and (height: 1120px) {
    font-size: 30px;
    padding-top: 20%;
  }

  @media screen and (width: 360px) and (height: 640px) {
    font-size: 50px;
    padding-top: 80%;
    height: 50%;
    width: 100%;
    padding-left: 50%;
    color: #BF9000;
  }

  @media screen and (width: 411px) and (height: 731px) {
    font-size: 45px;
    width: 100%;
    padding-top: 80%;
    padding-left: 20%;
    height: 50%;
    color: #BF9000;
  }
`;

export const IntroBottom = styled.div`
  height: 50%;
  max-width: 50%;
  padding-top: 10%;
  text-align: right;
  margin-left: 30%;
  margin-bottom: 20%;

  @media screen and (width: 360px) and (height: 640px) {
    max-width: 100%;
    margin-left: 30%;
    padding-top: 150%;
  }

  @media screen and (width: 411px) and (height: 731px) {
    max-width: 100%;
    padding-right: 10%;
    padding-top: 150%;
  }
`;

export const Title = styled.div`
  color: #BF9000;
  font-weight: bold;
  font-size: 50px;

  @media screen and (width: 1920px) and (height: 1080px) {
    font-size: 55px;
  }

  @media screen and (width: 2560px) and (height: 1440px) {
    font-size: 75px;
  }

  @media screen and (width: 1680px) and (height: 1050px) {
    font-size: 50px;
  }

  @media screen and (width: 1792px) and (height: 1120px) {
    font-size: 50px;
  }

  @media screen and (width: 360px) and (height: 640px) {
    font-size: 30px;
    width: 100%;
  }

  @media screen and (width: 411px) and (height: 731px) {
    font-size: 28px;
    width: 100%;
  }
  
`;

export const Text = styled.div`
  font-weight: bold;
  font-size: 20px;
  font-style: italic;

  @media screen and (width: 1920px) and (height: 1080px) {
    font-size: 30px;
  }

  @media screen and (width: 2560px) and (height: 1440px) {
    font-size: 40px;
  }

  @media screen and (width: 1680px) and (height: 1050px) {
    font-size: 25px;
  }

  @media screen and (width: 1792px) and (height: 1120px) {
    font-size: 25px;
  }

  @media screen and (width: 360px) and (height: 640px) {
    font-size: 15px;
    width: 100%;
  }

  @media screen and (width: 411px) and (height: 731px) {
    font-size: 15px;
    width: 100%;
  }
`;
