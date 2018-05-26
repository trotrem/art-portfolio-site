import React, {Component} from "react";
import withParallax from "../../common/Parallax";
import ShelfMenu from "./ShelfMenu.jsx";
import shelf from "./img/DeskImages/Pieces/deskplank.gif";
import styled from "react-emotion";

const layerPath = "./img/plxLayers/";

const imageHeight = 3839;

const divHeight = 1700;

const titleHeight = 1840;

const PageContainer = styled("div")`
  position: relative;
  overflow: hidden;
`

const ShelfContainer = styled("div")`
  background-image: url(${shelf});
  background-repeat: repeat-x;
  position: absolute;
  top: ${divHeight}px;
  left: 0px;
  width: 100%;
`

const ParallaxLayer = styled("img")`
  display: block;
  position: fixed;
  top: 0;
  margin-left: auto;
  margin-right: auto;
`

const Layer1 = withParallax(ParallaxLayer, 2);
const Layer2 = withParallax(ParallaxLayer, 3);
const Layer3 = withParallax(ParallaxLayer, 5);
const Layer4 = withParallax(ParallaxLayer, 8);
const Layer5 = withParallax(ParallaxLayer, 10);

var autoScroll;

const scrollAtBegining = () => {
    let x = 10 * window.scrollY / (titleHeight - window.innerHeight);
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
                <Layer1 src={require(layerPath + "1.1.gif")} height={1264}/>
                <Layer2 src={require(layerPath + "2.gif")} height={1423}/>
                <Layer3 src={require(layerPath + "4.gif")} height={1756}/>
                <Layer4 src={require(layerPath + "5.gif")} height={1656}/>
                <Layer5 src={require(layerPath + "7.gif")} height={1888}/>
                <ShelfContainer>
                    <ShelfMenu/>
                </ShelfContainer>
            </PageContainer>
        );
    }
}
