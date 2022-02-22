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
font-style: italic;
font-weight: bold;
font-size: 25px;
padding-top: 20%;
`;

export const EducationBottom = styled.div`
height: 50%;
max-width: 50%;
padding-top: 10%;
text-align: right;
margin-left: 30%;
margin-bottom: 20%;
`;

export const EdImage = styled.img`
  width: 200px;
  filter: grayscale(100%);
  padding-right: 30px;
`;
