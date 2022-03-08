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

@media screen and (width: 1366px) and (height: 768px) {
  font-size: 30px;
}

@media screen and (width: 1440px) and (height: 900px) {
  padding-top: 10%;
}

@media screen and (width: 1536px) and (height: 864px) {
  padding-top: 20%;
}

@media screen and (width: 2560px) and (height: 1440px) {
  padding-top: 20%;
  font-size: 50px;
}

@media screen and (width: 1680px) and (height: 1050px) {
  font-size: 30px;
  padding-top: 15%;
}

@media screen and (width: 1280px) and (height: 800px) {
  font-size: 30px;
  padding-top: 15%;
}

@media screen and (width: 1792px) and (height: 1120px) {
  font-size: 30px;
  padding-top: 20%;
  padding-left: 5%;
}

@media screen and (width: 360px) and (height: 640px) {
  font-size: 25px;
  padding-top: 80%;
  height: 50%;
  width: 75%;
  padding-left: 20%;
}

@media screen and (width: 411px) and (height: 731px) {
  font-size: 25px;
  padding-top: 80%;
  height: 50%;
  width: 75%;
}

@media screen and (width: 411px) and (height: 823px) {
  font-size: 25px;
  padding-top: 80%;
  height: 50%;
  width: 75%;
}

@media screen and (width: 320px) and (height: 568px) {
  font-size: 20px;
  padding-top: 80%;
  height: 50%;
  width: 75%;
}

@media screen and (width: 375px) and (height: 667px) {
  font-size: 20px;
  padding-top: 80%;
  height: 50%;
  width: 75%;
}

@media screen and (width: 414px) and (height: 736px) {
  font-size: 20px;
  padding-top: 80%;
  height: 50%;
  width: 60%;
  padding-right: 20%;
}

@media screen and (width: 375px) and (height: 812px) {
  font-size: 20px;
  padding-top: 80%;
  height: 50%;
  width: 60%;
  padding-right: 20%;
}

@media screen and (width: 768px) and (height: 1024px) {
  padding-top: 80%;
  height: 50%;
  width: 60%;
  padding-right: 20%;
}

@media screen and (width: 1024px) and (height: 1366px) {
  padding-top: 80%;
  height: 50%;
  width: 60%;
  padding-right: 20%;
  font-size: 32px;
}

@media screen and (width: 540px) and (height: 720px) {
  padding-top: 80%;
  height: 50%;
  width: 60%;
  padding-right: 20%;
  font-size: 25px;
}

@media screen and (width: 280px) and (height: 653px) {
  padding-top: 80%;
  height: 50%;
  width: 60%;
  padding-right: 20%;
  font-size: 20px;
}

@media screen and (width: 1024px) and (height: 600px) {
  padding-top: 30%;
}

@media screen and (width: 390px) and (height: 884px) {
  padding-top: 120%;
  height: 50%;
  width: 60%;
  padding-right: 20%;
  font-size: 30px;
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

@media screen and (width: 1149px) {
  padding-right: 5%;
}

@media screen and (width: 1920px) and (height: 1080px) {
  font-size: 25px;
}

@media screen and (width: 1366px) and (height: 768px) {
  font-size: 20px;
}

@media screen and (width: 2560px) and (height: 1440px) {
  font-size: 35px;
}

@media screen and (width: 1680px) and (height: 1050px) {
  font-size: 20px;
}

@media screen and (width: 1792px) and (height: 1120px) {
  font-size: 25px;
}

@media screen and (width: 360px) and (height: 640px) {
  font-size: 12px;
  max-width: 100%;
  padding-top: 15%;
}

@media screen and (width: 411px) and (height: 731px) {
  font-size: 12px;
  max-width: 100%;
  padding-top: 5%;
  padding-right: 10%;
}

@media screen and (width: 411px) and (height: 823px) {
  font-size: 12px;
  max-width: 100%;
  padding-top: 5%;
  padding-right: 10%;
}

@media screen and (width: 320px) and (height: 568px) {
  font-size: 10px;
  max-width: 100%;
  padding-top: 5%;
  padding-right: 10%;
}

@media screen and (width: 375px) and (height: 667px) {
  font-size: 10px;
  max-width: 100%;
  padding-top: 5%;
  padding-right: 10%;
}

@media screen and (width: 414px) and (height: 736px) {
  font-size: 10px;
  max-width: 100%;
  padding-top: 5%;
  padding-right: 20%;
}

@media screen and (width: 375px) and (height: 812px) {
  font-size: 10px;
  max-width: 100%;
  padding-top: 5%;
  padding-right: 20%;
}

@media screen and (width: 768px) and (height: 1024px) {
  max-width: 100%;
  padding-top: 5%;
  padding-right: 20%;
}

@media screen and (width: 1024px) and (height: 1366px) {
  max-width: 100%;
  padding-top: 5%;
  padding-right: 16%;
  font-size: 25px;
  padding-left: 10%;
}

@media screen and (width: 540px) and (height: 720px) {
  max-width: 100%;
  padding-top: 5%;
  padding-right: 16%;
  font-size: 12px;
  padding-left: 10%;
}

@media screen and (width: 280px) and (height: 653px) {
  max-width: 100%;
  padding-top: 5%;
  padding-right: 15%;
  font-size: 12px;
}

@media screen and (width: 1024px) and (height: 600px) {
  padding-right: 5%;
}

@media screen and (width: 390px) and (height: 884px) {
  max-width: 100%;
  padding-top: 5%;
  padding-right: 10%;
  font-size: 15px;
  margin-left: 20%;
}
`;

export const TechBottomTop = styled.div`
`;

export const TechBottomMiddle = styled.div`
`;

export const TechBottomBottom = styled.div`
`;

export const TechPhoto = styled.img`
  width: 60px;
  padding: 20px;

  @media screen and (width: 1149px) {
    width: 40px;
    padding: 10px;
  }

  @media screen and (width: 1366px) and (height: 768px) {
    width: 50px;
    padding: 10px;
  }

  @media screen and (width: 1440px) and (height: 900px) {
    width: 60px;
    padding: 10px;
  }

  @media screen and (width: 1536px) and (height: 864px) {
    width: 60px;
  }

  @media screen and (width: 1280px) and (height: 720px) {
    width: 40px;
  }

  @media screen and (width: 1280px) and (height: 800px) {
    width: 40px;
  }

  @media screen and (width: 1792px) and (height: 1120px) {
    width: 45px;
  }

  @media screen and (width: 360px) and (height: 640px) {
    width: 23px;
    padding: 5px;
  }

  @media screen and (width: 411px) and (height: 731px) {
    width: 25px;
    padding: 5px;
  }

  @media screen and (width: 411px) and (height: 823px) {
    width: 25px;
    padding: 5px;
  }

  @media screen and (width: 320px) and (height: 568px) {
    width: 20px;
    padding: 5px;
  }

  @media screen and (width: 375px) and (height: 667px) {
    width: 20px;
    padding: 5px;
  }

  @media screen and (width: 375px) and (height: 667px) {
    width: 20px;
    padding: 5px;
  }

  @media screen and (width: 414px) and (height: 736px) {
    width: 20px;
    padding: 5px;
  }

  @media screen and (width: 375px) and (height: 812px) {
    width: 20px;
    padding: 5px;
  }

  @media screen and (width: 768px) and (height: 1024px) {
    width: 50px;
    padding: 5px;
  }

  @media screen and (width: 1024px) and (height: 1366px) {
    width: 40px;
    padding: 10px;
  }

  @media screen and (width: 540px) and (height: 720px) {
    width: 20px;
    padding: 5px;
  }

  @media screen and (width: 280px) and (height: 653px) {
    width: 15px;
    padding: 3px;
  }

  @media screen and (width: 1024px) and (height: 600px) {
    width: 50px;
    padding: 10px;
  }

  @media screen and (width: 390px) and (height: 884px) {
    width: 30px;
    padding: 3px;
  }
`;
