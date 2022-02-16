/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  BioContainer,
  BioTop,
  BioBottom
} from './BioElements';

function Bio() {
  return (
    <BioContainer className="BioContainer">
      <BioTop className="BioTop">
        A lady coder, cinephile, sci-fi aficianado, tough tufter, and cat mom orignally hailing from a holler roundabout Music City.
      </BioTop>
      <BioBottom className="BioBottom">
        I&apos;ve been off working in logistics since receiving my degree.
        Our office went remote with the onset of COVID-19 and it gave me the time and perspective to think on and commit to
        what I wanted to do next.
        Nashville Software School had been on my radar for sometime. Could I be useful and creative in a new career path?
        I decided to sign up for their jumpstart program and try it out.
        It took me back to the days of messing around in HTML and CSS- making my MySpace profile rain glitter and forcing each of my unsuspecting visitors to listen to whatever song I was obessed with upon arrival.
        (Yes, my spotify is linked here. Sharing music is my favorite feature on any platform.)
        Naturally, I signed up for the bootcamp and, now, I&apos;m looking forward to building and maintaining inclusive tech with all y&apos;all.
      </BioBottom>
    </BioContainer>
  );
}

export default Bio;
