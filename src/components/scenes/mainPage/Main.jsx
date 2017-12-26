import React from "react";
import glamorous from "glamorous";
import Plx from "../../common/Parallax";
import ShelfMenu from "./ShelfMenu.jsx";
import shelf from "./img/plxLayers/6.png";

const layerPath = "./img/plxLayers/";

const imageHeight = 3839;

const divHeight = 1919;

const PageContainer = glamorous.div({
  position: "relative",
  backgroundColor: "#898989",
  overflow: "hidden"
});

const ShelfContainer = glamorous.div({
  position: "absolute",
  top: divHeight.toString(),
  left: "0px",
  width: "100%",
});

const ShelfLayer = glamorous.div({
  position: "absolute",
  top: "0px",
  left: "0px",
  width: "100%",
  height: "100%",
  backgroundImage:"url("+shelf+")",
  backgroundPosition:"center"
});

const MainPage = props => (
  <PageContainer >
    <div style={{height:imageHeight}}/>
    <Plx image={require(layerPath + "1.png")} strength={700} height={1691} divHeight={divHeight}/>
    <Plx image={require(layerPath + "2.png")} strength={600} height={1397} divHeight={divHeight}/>
    <Plx image={require(layerPath + "3.png")} strength={300} height={1401} divHeight={divHeight}/>
    <Plx image={require(layerPath + "4.png")} strength={200} height={1677} divHeight={divHeight}/>
    <Plx image={require(layerPath + "5.png")} strength={100} height={1663} divHeight={divHeight}/>
    <ShelfLayer/>
    <Plx image={require(layerPath + "7.png")} strength={-30} height={1919} divHeight={divHeight}/>
    <ShelfContainer>
      <ShelfMenu/>
    </ShelfContainer>
  </PageContainer>
);

export default MainPage;
