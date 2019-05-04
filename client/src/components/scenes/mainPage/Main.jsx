import React, {Component} from "react";
import withParallax from "../../common/Parallax";
import ShelfMenu from "./ShelfMenu.jsx";
import styled from "react-emotion";

const layerPath = "./img/plxLayers/";

const mobileLayerPath = "./img/MobileLayers/";

const divHeight = 1880;

const shelfTopHeight = "300px";

const titleHeight = 1840;

const PageContainer = styled("div")`
  position: relative;
  overflow: hidden;
  width: 100%;
`

const ShelfContainer = styled("div")`
  /*margin-top: ${shelfTopHeight};*/
  width: 100%;
`

const ParallaxLayer = styled("div")`
  position: fixed;
  background-image: url(${props => require("" + layerPath + props.image)});
  background-position: top center;
  height: ${props => props.height}px;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  @media (max-width: 1056px) {
    background-image: url(${props => require("" + mobileLayerPath + props.image)});
    background-size:cover;
    height: calc(${props => props.mHeight} * 100vw /1056);
  }
`

const TopGap = styled("div")`
  height: ${props => props.height}px;
  width: 100%;
  @media (max-width: 1056px) {
    height: calc(1895 * 100vw / 1056);
  }
`

const FrontLayer = styled("div")`
  position: absolute;
  background-image: url(${props => require("" + layerPath + props.image)});
  background-position: top center;
  height: ${props => props.height}px;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  @media (max-width: 1056px) {
    background-image: url(${props => require("" + mobileLayerPath + props.image)});
    background-size:cover;
    height: calc(${props => props.mHeight} * 100vw / 1056);
  }
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
                <TopGap height={divHeight}/>
                <Layer1 image={"1.gif"} height={1920} mHeight={1916}/>
                <Layer2 image={"2.gif"} height={1423} mHeight={1412}/>
                <Layer3 image={"4.gif"} height={1756} mHeight={1759}/>
                <FrontLayer image={"5.gif"} height={1656} mHeight={2000}/>
                <FrontLayer image={"6.gif"} height={1880} mHeight={1895}/>
                <ShelfContainer>                
                    <ShelfMenu/>
                </ShelfContainer>
            </PageContainer>
        );
    }
}
