import React, {Component} from "react";
import Plx from "../../common/Parallax";
import ShelfMenu from "./ShelfMenu.jsx";
import shelf from "./img/plxLayers/6.gif";
import styled from "react-emotion";

const layerPath = "./img/plxLayers/";

const imageHeight = 3839;

const divHeight = 1919;

const titleHeight = 1840;

const PageContainer = styled("div")`
  position: relative;
  background-color: #898989;
  overflow: hidden;
`

const ShelfLayer = styled("div")`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-image: url(${shelf});
  background-position: center;
`

const ShelfContainer = styled("div")`
  position: absolute;
  top: ${divHeight}px;
  left: 0px;
  width: 100%;
`

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
                <div style={{height:imageHeight, backgroundColor:"#252525"}}/>
                <Plx image={require(layerPath + "1.gif")} strength={800} height={1691} divHeight={divHeight}/>
                <Plx image={require(layerPath + "2.gif")} strength={600} height={1397} divHeight={divHeight}/>
                <Plx image={require(layerPath + "4.gif")} strength={200} height={1677} divHeight={divHeight}/>
                <Plx image={require(layerPath + "5.gif")} strength={100} height={1663} divHeight={divHeight}/>
                <ShelfLayer/>
                <Plx image={require(layerPath + "7.gif")} strength={-30} height={1919} divHeight={divHeight}/>
                <ShelfContainer>
                    <ShelfMenu/>
                </ShelfContainer>
            </PageContainer>
        );
    }
}
