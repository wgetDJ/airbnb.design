import React from "react";
import styled from 'styled-components'

import Header from "./libs/header";
import LatestPost from "./libs/latestpost";
import PostCardMedium from "./libs/post-card-medium";

const Homepage = () => {
    return (
        <>
            <Header />
            <LatestPost />
            <TwoGridWrapper>
                <PostCardMedium></PostCardMedium>
                <PostCardMedium></PostCardMedium>
            </TwoGridWrapper>
            <ThreeGridWrapper>

            </ThreeGridWrapper>
        </>
    )
}

export default Homepage 

const TwoGridWrapper = styled.div`
    width: calc(100% - 96px);
    margin: 30px 48px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 48px
`

const ThreeGridWrapper = styled.div`
    width: calc(100% - 96px);
    margin: 30px 48px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 48px
`