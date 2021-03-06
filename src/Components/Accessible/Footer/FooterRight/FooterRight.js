/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  FooterRightContainer,
  OuterLinks,
  OLImage,
} from './FooterRightElements';
import FB from '../../../../Assets/OuterLinks/FB.png';
import GH from '../../../../Assets/OuterLinks/GH.png';
import IG from '../../../../Assets/OuterLinks/IG.png';
import LB from '../../../../Assets/OuterLinks/LB.png';
import LI from '../../../../Assets/OuterLinks/LI.png';
import S from '../../../../Assets/OuterLinks/S.png';
import T from '../../../../Assets/OuterLinks/T.png';
import email from '../../../../Assets/OuterLinks/email.png';

function FooterRight() {
  return (
    <FooterRightContainer className="FooterRightContainer">
        <OuterLinks className="OuterLinks">
            <a href="https://github.com/thedigitalmenagerie" target="_blank" rel="noopener noreferrer"><OLImage src={GH} className="OLImage"/></a>
            <a href="https://www.linkedin.com/in/honeyraeswan/" target="_blank" rel="noopener noreferrer"><OLImage src={LI} className="OLImage"/></a>
            <a href="https://open.spotify.com/playlist/1eoJ8lWVrKzPBuyVHx2q55?si=81bebeca425c4898" target="_blank" rel="noopener noreferrer"><OLImage src={S} className="OLImage"/></a>
            <a href="https://boxd.it/fxgnW" target="_blank" rel="noopener noreferrer"><OLImage src={LB} className="OLImage"/></a>
            <a href="https://twitter.com/digitlmenagerie" target="_blank" rel="noopener noreferrer"><OLImage src={T} className="OLImage"/></a>
            <a href="https://instagram.com/thedigitalmenagerie?utm_medium=copy_link" target="_blank" rel="noopener noreferrer"><OLImage src={IG} className="OLImage"/></a>
            <a href="https://www.facebook.com/Honey-Rae-Swan-106115451890080/" target="_blank" rel="noopener noreferrer"><OLImage src={FB} className="OLImage"/></a>
            <a href="mailto:honeyraeswan@gmail.com?subject=So,%20I%20was%20looking%20at%20your%20site%20and%20..." target="_blank" rel="noopener noreferrer"><OLImage src={email} className="OLImage"/></a>
          </OuterLinks>
    </FooterRightContainer>
  );
}

export default FooterRight;
