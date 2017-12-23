import React from "react";
import styled from "styled-components";
import banner from "../comic/img/banner.png";
import { Link } from "react-router-dom";

const Pontainer = styled.div`
position: relative;
margin: auto;
background-color: #f98ff9;
top: 200px;
height: calc(100% - 200px);
width:100%;
max-width:1200px;
`;

const Button = styled(Link)`
display: block;
maxWidth: 100%;
color: white;
&:hover{
  opacity: 0.9;
  cursor:pointer;
}
`;

const StyledImage = styled.img`
  width: calc(100% - 16px);
  border: 8px solid white;
`;

const ShelfMenu = props => (
  <Pontainer>
    <Button to="/mandy">
      <StyledImage src={banner}/>
    </Button>
  </Pontainer>
);

export default ShelfMenu;
