import React from "react";
import styled from "styled-components";
import Scroller from "./Scroller.js";

const Grid = styled.div`
        display: grid;
        grid-template-columns: 1fr 4fr 1fr;
        grid-template-rows: 50px 1fr;
        grid-template-areas: "top       top     top"
                             "left      center   right";
        height: 100vh;`;

const Center = styled.div`
        grid-area: center;
        display: grid;
        grid-template-rows: 200px 1fr;
        grid-template-areas: "comic-margin"
                             "comic";`;

const ComicMargin = styled.div`
        grid-area: comic-margin;
        background-color: #aa44bb;`;

const Comic = styled.div`
        grid-area: comic;
        background-color: #aaaabb;`;

const Left = styled.div`
        grid-area: left;
        background-color: #aa99bb`;

const Right = styled.div`
        grid-area: right;
        background-color: #aa4455`;

const Top = styled.div`
        grid-area: top;
        background-color: #4499ff;`;

const ComicPage = ({props}) =>
        <Grid>
                <Top>top</Top>
                <Left>left</Left>
                <Center>
                        <ComicMargin>
                        margin
                        </ComicMargin>
                        <Comic>
                                <Scroller></Scroller>
                        </Comic>
                </Center>
                <Right>right</Right>
        </Grid>;

export default ComicPage;