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

@media screen and (width: 1920px) and (height: 1080px) {
  font-size: 35px;
}
`;

export const TechBottom = styled.div`
height: 50%;
max-width: 50%;
padding-top: 5%;
text-align: right;
margin-left: 30%;
margin-bottom: 20%;
flex-flow: row wrap;
font-style: italic;
font-weight: bold;

@media screen and (width: 1920px) and (height: 1080px) {
  font-size: 25px;
}
`;

export const TechBottomTop = styled.div`
`;

export const TechBottomMiddle = styled.div`
`;

export const TechBottomBottom = styled.div`
`;

export const TechPhoto = styled.img`
  width: 75px;
  padding: 20px;
`;
