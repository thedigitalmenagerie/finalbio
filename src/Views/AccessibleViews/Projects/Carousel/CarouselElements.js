/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Carousel = styled.div`
overflow: hidden;
@media screen and (width: 1920px) and (height: 1080px) {
    width: 100%;
  }
`;

export const Inner = styled.div`
white-space: nowrap;
transition: transform 0.3s;
@media screen and (width: 1920px) and (height: 1080px) {
    width: 100%;
  }
`;

export const Indicators = styled.div`
display: flex;
justify-content: center;
`;

export const Button = styled.button`
  margin: 5px;
`;

export const Item = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  color: black;
  @media screen and (width: 1920px) and (height: 1080px) {
    width: 100%;
  }
`;
