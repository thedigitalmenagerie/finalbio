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
  @media (max-width: 1060px) {
    padding-top: 20%;
    align-self: left;
    font-size: 20px;
  }
`;

export const IntroBottom = styled.div`
  height: 50%;
  max-width: 50%;
  padding-top: 10%;
  text-align: right;
  margin-left: 30%;
  margin-bottom: 20%;
  @media (max-width: 1060px) {
    padding-top: 5%;
  }
`;

export const Title = styled.div`
  color: #BF9000;
  font-weight: bold;
  font-size: 50px;
  @media (max-width: 1060px) {
    font-size: 35px;
  }
`;

export const Text = styled.div`
  font-weight: bold;
  font-size: 20px;
  font-style: italic;
`;
