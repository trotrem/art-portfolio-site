import React, {Component} from "react";
import withParallax from "../../common/Parallax";
import ShelfMenu from "./ShelfMenu.jsx";
import styled from "react-emotion";

const layerPath = "./img/plxLayers/";

const mobileLayerPath = "./img/MobileLayers/";

const divHeight = 1570;

const shelfTopHeight = "300px";

const titleHeight = 1840;

const PageContainer = styled("div")`
  position: relative;
  overflow: hidden;
  width: 100%;
`

const ShelfContainer = styled("div")`
  margin-top: ${shelfTopHeight};
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
                <div style={{height:divHeight}}/>
                <Layer1 image={"1.gif"} height={1920}/>
                <Layer2 image={"2.gif"} height={1423}/>
                <Layer3 image={"4.gif"} height={1756}/>
                <ShelfContainer>
                    <ShelfMenu/>
                </ShelfContainer>
                <Layer4 image={"5.gif"} height={1656}/>
                <Layer5 image={"6.gif"} height={1888}/>
            </PageContainer>
        );
    }
}
