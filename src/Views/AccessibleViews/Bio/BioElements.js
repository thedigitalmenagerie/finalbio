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
`;
