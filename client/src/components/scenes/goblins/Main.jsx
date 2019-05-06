import React from "react";
import styled from "react-emotion";
import scrollPattern from "./img/scrollPattern.gif";
import scrollTop from "./img/scrollTop.gif";
import frame from "./img/Frame.gif";
import withParallax from "../../common/Parallax";
import mobiPreview from "./img/Preview-The-Truth-About-Goblins.mobi"
import epubPreview from "./img/Preview-The-Truth-About-Goblins.epub"


const imgPath = "./img/";

const Container = styled("div")`
  width: 100%;
  overflow: hidden;
`;

const BlueGradient = styled("div")`
  background-size: 100% auto;
  position: relative;
  width: 100%;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#010202+0,010404+3,03090a+7,19474b+35,1a4a4f+37,1a4a4f+41,153e42+48,040e0f+69,010404+75,000000+80,000000+100 */
  background: #010202; /* Old browsers */
  background: linear-gradient(to bottom, #010202 0%,#010404 3%,#03090a 7%,#19474b 35%,#1a4a4f 37%,#1a4a4f 41%,#153e42 48%,#040e0f 69%,#010404 75%,#000000 80%,#000000 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#010202', endColorstr='#000000',GradientType=0 );
`

const Frame = styled("div")`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  box-sizing: border-box;
  border: 15vw solid transparent;
  border-image: url(${frame}) 370 round;
  height: 100%;
  width: 100%;
  pointer-events: none;
`

const Scroll = styled("div")`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding: 15% 0 0 0;
    width: 70%;
    @media (max-width: 600px) {
      width: 85%;
    }
`;

const ScrollTop = styled("div")`
  background-image: url(${scrollTop});
  background-size: 100% 100%;
  margin: 5% 0 0 0;
  width: 100%;
  height: 314px;
  max-height: 20vw;
`

const ScrollPattern = styled("div")`
  background-image: url(${scrollPattern});
  background-repeat: repeat-y;
  background-size: 100% auto;
  width: 100%;
`

const Stump = styled("img")`
  position: absolute;
  width: 100%;
  bottom: 4vw;
  margin-left: auto;
  margin-right: auto;
`

const Content = styled("div")`
  width: 75%;
  margin: 0 auto 0 auto;
  padding-bottom: 60vw;
  text-align: center;
  font-family: MinionPro;
  p {
    font-size: 1.5em; /* 14px/16=0.875em */
  @media (max-width: 1600px) {
    font-size: 1.3em;
  }
  @media (max-width: 600px) {
    font-size: 0.8em;
  }
};
  h1, h2 {
    font-size: 3em; /* 14px/16=0.875em */
  @media (max-width: 1600px) {
    font-size: 2.5em;
  }
  @media (max-width: 600px) {
    font-size: 1.3em;
  }
};
`;

const PreviewFormats = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormatImage = styled("img")`
  width: 10vw;
  &:hover{
    filter: brightness(105%);
  }
`;

const ClickToDownload = styled("img")`
  width: 40%;
`;

const BuyButton = styled("img")`
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  &:hover{
    filter: brightness(120%);
  }
`

const Title = styled("img")`
  display: block;
  width: 100%;
`

const About = styled("div")`
  padding-top: 1em;
`

const Preview = styled("div")`
  margin-top: 5em;
`

const Buy = styled("div")`
  margin-top: 8em;
`

const Author = styled("div")`
margin-top: 6em;
font-size: 1.2em;
`

const Link = styled("a")`
  color: black;
  font-size: 1.6em; /* 14px/16=0.875em */
  @media (max-width: 1600px) {
    font-size: 1.1em;
  }
  @media (max-width: 600px) {
    font-size: 0.9em;
  }
`
const Fireflies = styled("div")`
  top: 20%;
  right: ${props => props.right? props.right : undefined};
  position: fixed;
  background-repeat: repeat-y;
  background-image: url(${props => require("" + imgPath + props.image)});
  width: 20%;
  height: 100%;
`

const LeftFireflies = withParallax(Fireflies, 200);

const RightFireflies = withParallax(Fireflies, 200);

const MainPage = props => (
  <Container>
    <BlueGradient>
      <LeftFireflies image="FirefliesLeft.png"/>
      <RightFireflies image="FirefliesRight.png" right="0px"/>
      <Frame/> 
      <Scroll>
        <h1 style={{margin:"0 0 0 0"}}>
          <Title src={require(imgPath + "Title.gif")} alt="The Truth About Goblins"/>
        </h1>
        <ScrollTop/>
        <ScrollPattern>
          <Content>
            <About>
              <h2>ABOUT</h2>
              <p>Anny's parents are dead. In an instant, she is alone, forced to face an
                impossible question that has shadowed her existence since she was a child. But
                the answer to this question will not be found above ground.</p>
              <p>Far beneath the surface, there is another world, a secret world. A nocturnal
                society where magic is not dead, and where the fine line between fact and fairy
                tale is dangerously undefined.</p>
              <p>Amidst inexplicable wonders and nightmarish monsters, Anny will discover the
                truth about her past. Far from the city and all that she knows, deep below
                ground in the Goblin Market.</p>
            </About>
            <Preview>
              <h2>PREVIEW</h2>
              <p>Read the first three chapters!</p>
              <PreviewFormats>
                <a href={epubPreview} download>
                  <FormatImage src={require(imgPath + "epub.png")} alt="epub sample"/>
                </a>
                <ClickToDownload src={require(imgPath + "ctd.png")}/>
                <a href={mobiPreview} download>
                  <FormatImage src={require(imgPath + "kindle.png")} alt="mobi Sample"/>
                </a>
              </PreviewFormats>
            </Preview>
            <Buy>
              <h2>BUY THE BOOK</h2>
              <p>Paperbacks available on Amazon!</p>
              <a href="https://www.books2read.com/thetruthaboutgoblins" target="_blank" rel="noopener noreferrer">
                <BuyButton src={require(imgPath + "buy.png")} alt="Buy the Book!"/>
              </a>
            </Buy>
            <Author>
              <h2>
                ABOUT THE AUTHOR
              </h2>
              <Link href="https://www.amazon.com/-/e/B07CRN7XPM" target="_blank" rel="noopener noreferrer">
                Visit Miranda Eastwood's author profile page!
              </Link>
            </Author>
          </Content>
        </ScrollPattern>
        <Stump src={require(imgPath + "Stump.gif")}/>
      </Scroll>
    </BlueGradient>
  </Container>
);

export default MainPage;
