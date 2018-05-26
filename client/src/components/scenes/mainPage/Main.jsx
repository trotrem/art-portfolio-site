import React, {Component} from "react";
import withParallax from "../../common/Parallax";
import ShelfMenu from "./ShelfMenu.jsx";
import shelfTop from "./img/DeskImages/Pieces/deskplank.gif";
import styled from "react-emotion";

const layerPath = "./img/plxLayers/";

const imageHeight = 4000;

const divHeight = "1570px";

const shelfTopHeight = "300px";

const titleHeight = 1840;

const PageContainer = styled("div")`
  position: relative;
  overflow: hidden;
  width: 100%;
`

const ShelfContainer = styled("div")`
  position: absolute;
  top: ${divHeight};
  left: 0px;
  height: 100%;
  width: 100%;
`

const ShelfTop = styled("div")`
  background-image: url(${shelfTop});
  background-size: cover;
  height: ${shelfTopHeight};
  width: 100%;
`

const ParallaxLayer = styled("div")`
  position: fixed;
  background-image: url(${props => props.src});
  background-position: top center;
  height: ${props => props.height}px;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
`

const Layer1 = withParallax(ParallaxLayer, 100);
const Layer2 = withParallax(ParallaxLayer, 200);
const Layer3 = withParallax(ParallaxLayer, 400);
const Layer4 = withParallax(ParallaxLayer, 1000);
const Layer5 = withParallax(ParallaxLayer, 1000);

var autoScroll;

const scrollAtBegining = () => {
    let x = 8 * window.scrollY / (titleHeight - window.innerHeight);
    let scrollValue = -0.2 * Math.pow(x - 5, 2) + 8;
    window.scrollBy(0, scrollValue);
    if (window.scrollY + window.innerHeight >= titleHeight) {
        clearInterval(autoScroll);
    }
}

export default class MainPage extends Component {

    componentDidMount() {
        let hash = this.props.location.hash;
        setTimeout(function () {
            if(hash){
                window.scrollTo(0, titleHeight - window.innerHeight);
            }
            else{
                window.scrollTo(0, 0);
                autoScroll = setInterval(scrollAtBegining, 10);
            }
        },40);
    }

    componentWillUnmount() {
        clearInterval(autoScroll);
    }

    render(){
        return (
            <PageContainer >
                <div style={{height:imageHeight}}/>
                <Layer1 src={require(layerPath + "1.gif")} height={1920}/>
                <Layer2 src={require(layerPath + "2.gif")} height={1423}/>
                <Layer3 src={require(layerPath + "4.gif")} height={1756}/>
                <ShelfContainer>
                    <ShelfTop/>
                    <ShelfMenu/>
                </ShelfContainer>
                <Layer4 src={require(layerPath + "5.gif")} height={1656}/>
                <Layer5 src={require(layerPath + "7.gif")} height={1888}/>
            </PageContainer>
        );
    }
}
