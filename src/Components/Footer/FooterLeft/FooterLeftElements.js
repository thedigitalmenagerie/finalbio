/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FooterLeftContainer = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 49.9%;
  margin-left: .1%;
  height: 400px;
  bottom:0;
  margin-bottom: .5%;
  border-radius: 0px 0px 0px 15px;

  @media screen and (max-width: 735px) {
    height: 200px;
    width: 25%;
  }
`;

export const OLImage = styled.img`
  height: 100%;
  border-radius: 0px 0px 0px 15px;
`;
