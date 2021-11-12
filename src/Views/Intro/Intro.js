/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  IntroContainer,
  IntroTop,
  IntroBottom,
  Title,
  Text,
} from './IntroElements';

function Intro() {
  return (
    <IntroContainer className="IntroContainer">
      <IntroTop className="IntroTop">
        An english major turned software engineer?
      </IntroTop>
      <IntroBottom className="IntroBottom">
        <Title className="Title">Storytelling reveals the world around us and coding is a relevant narrative form in our computational society.</Title>
        <Text className="Tech">Both users and software engineers benefit greatly from a marriage of the humanities with tech. Here&apos;s to making sure my personal career does, too.</Text>
      </IntroBottom>
    </IntroContainer>
  );
}

export default Intro;
