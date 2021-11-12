/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: block;
  text-align: right;
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 49%;
  margin-right: .1%;
  margin-top: .5%;
  height: 150px;
  top: 0;
  border-radius: 0px 15px 0px 0px;

  @media screen and (max-width: 735px) {
    flex-direction: column;
    width: 20%;
    right: 0;
    height: 50%;
    margin-right: 1%;
  }
`;

export const LogoContainer = styled.div`
`;

export const LogoImg = styled.img`
  width: 175px;

  @media screen and (max-width: 735px) {
    width: 100%;
  }
`;
