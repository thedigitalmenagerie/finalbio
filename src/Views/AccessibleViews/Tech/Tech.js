/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  TechContainer,
  TechTop,
  TechBottom,
  TechBottomTop,
  TechBottomMiddle,
  TechBottomBottom,
  TechPhoto
} from './TechElements';
import Javascript from '../../../Assets/Javascript.png';
import api from '../../../Assets/api.png';
import csharp from '../../../Assets/csharp.png';
import figma from '../../../Assets/Figma.png';
import firebase from '../../../Assets/Firebase.png';
import git from '../../../Assets/git.png';
import github from '../../../Assets/github.png';
import HTML from '../../../Assets/HTML.png';
import react from '../../../Assets/React.png';
import sass from '../../../Assets/sass.png';
import sql from '../../../Assets/SQLBlack.png';
import vscode from '../../../Assets/VSCode.png';
import postman from '../../../Assets/postman.png';
import npm from '../../../Assets/npm.png';
import jsx from '../../../Assets/jsx.png';
import eslint from '../../../Assets/eslint.png';
import webpack from '../../../Assets/webpack.png';
import net from '../../../Assets/NETCORE.png';
import LINQ from '../../../Assets/LINQ.png';

function Bio() {
  return (
    <TechContainer className="TechContainer">
      <TechTop className="TechTop">
        Let me show you what I&apos;m working with -
      </TechTop>
      <TechBottom className="TechBottom">
        Since January 2021, I&apos;ve been working with Nashville Software School at night while working during the day. I&apos;ve been an architect and remote collaborator using the tech stacks below.
        <TechBottomTop className="TechBottomTop">
          <TechPhoto src={Javascript} className="TechPhoto"/>
          <TechPhoto src={api} className="TechPhoto"/>
          <TechPhoto src={csharp} className="TechPhoto"/>
          <TechPhoto src={figma} className="TechPhoto"/>
          <TechPhoto src={firebase} className="TechPhoto"/>
          <TechPhoto src={git} className="TechPhoto"/>
        </TechBottomTop>
        <TechBottomMiddle className="TechBottomMiddle">
          <TechPhoto src={net} className="TechPhoto"/>
          <TechPhoto src={postman} className="TechPhoto"/>
          <TechPhoto src={webpack} className="TechPhoto"/>
          <TechPhoto src={npm} className="TechPhoto"/>
          <TechPhoto src={eslint} className="TechPhoto"/>
          <TechPhoto src={jsx} className="TechPhoto"/>
          <TechPhoto src={LINQ} className="TechPhoto"/>
        </TechBottomMiddle>
        <TechBottomBottom className="TechBottomBottom">
          <TechPhoto src={github} className="TechPhoto"/>
          <TechPhoto src={HTML} className="TechPhoto"/>
          <TechPhoto src={react} className="TechPhoto"/>
          <TechPhoto src={sass} className="TechPhoto"/>
          <TechPhoto src={sql} className="TechPhoto"/>
          <TechPhoto src={vscode} className="TechPhoto"/>
        </TechBottomBottom>
        While working with them, I&apos;ve gained experience in utilizing terminal commands, gitbash, unix commands, feature tickets, work flow, branching, pull requests, ES6, DOM Interaction, debugging, ERDs, authentication, axios, and lifecylce methods when executing assignments and personal projects.
      </TechBottom>
    </TechContainer>
  );
}

export default Bio;
