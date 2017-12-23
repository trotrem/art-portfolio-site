import React from "react";
import glamorous from "glamorous";
import Plx from "../../common/Parallax";
import ShelfMenu from "./ShelfMenu.jsx"

const layerPath = "./img/plxLayers/";

const imageHeight = 3839;

const PageContainer = glamorous.div(
  {
  position: "relative",
  backgroundColor: "#898989",
  overflow: "hidden"
  }
);

const ShelfContainer = glamorous.div(
  {
  top: imageHeight.toString(),
  left: "0px",
  backgroundColor: "#898ff9"
  }
);

const MainPage = props => (
  <PageContainer >
    <div style={{height:imageHeight}}/>
    <Plx image={require(layerPath + "1.png")} strength={700} height={imageHeight}/>
    <Plx image={require(layerPath + "2.png")} strength={600} height={imageHeight}/>
    <Plx image={require(layerPath + "3.png")} strength={300} height={imageHeight}/>
    <Plx image={require(layerPath + "4.png")} strength={200} height={imageHeight}/>
    <Plx image={require(layerPath + "5.png")} strength={100} height={imageHeight}/>
    <Plx image={require(layerPath + "6.png")} strength={0}   height={imageHeight}/>
    <Plx image={require(layerPath + "7.png")} strength={-30} height={imageHeight}/>
    <ShelfContainer>
      <ShelfMenu/>
    </ShelfContainer>
  </PageContainer>
);

export default MainPage;
