/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const TechContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 100%;
max-height: 100%;
`;

export const TechTop = styled.div`
height: 50%;
width: 50%;
color: #BF9000;
font-weight: bold;
font-size: 25px;
// padding-top: 15%;
`;

export const TechBottom = styled.div`
height: 50%;
max-width: 50%;
padding-top: 10%;
text-align: right;
margin-left: 30%;
margin-bottom: 20%;
flex-flow: row wrap;
font-style: italic;
font-weight: bold;
`;

export const TechBottomTop = styled.div`
`;

export const TechBottomMiddle = styled.div`
`;

export const TechBottomBottom = styled.div`
`;

export const TechPhoto = styled.img`
  width: 50px;
  padding: 20px;
`;
