import React from "react";
import styled from "styled-components";

const Grid = styled.div`
        display: grid;
        grid-template-columns: 2fr 4fr 2fr;
        grid-template-rows: 50px 1fr;
        grid-template-areas: "top       top     top"
                             "left      comic   right";
        height: 100vh;`;

const Comic = styled.div`
        grid-area: comic;
        background-color: #aa44bb;`;

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
                <Comic>comic</Comic>
                <Right>right</Right>
        </Grid>;

export default ComicPage;