/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FooterRightContainer = styled.div`
  display: block;
  text-align: center;
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 49%;
  margin-right: 1%;
  height: 50px;
  bottom: 0;
  margin-bottom: .5%;
  border-radius: 0px 0px 15px 0px;

  @media screen and (max-width: 735px) {
    flex-direction: column;
    width: 5%;
    right: 0;
    height: 50%;
  }

  @media screen and (max-width: 610px) {
    width: 7%;
  }

  @media screen and (max-width: 435px) {
    width: 10%;
  }

  @media screen and (max-width: 300px) {
    width: 12%;
  }
`;

export const OuterLinks = styled.div`
`;

export const OLImage = styled.img`
  width: 20px;
  padding: 15px;

  @media screen and (max-width: 925px) {
    padding: 10px;
  }

  @media screen and (max-width: 735px) {
    padding: 8px;
  }
`;
