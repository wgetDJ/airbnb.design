import React from "react";
import styled from 'styled-components'

import Header from "./libs/header";
import LatestPost from "./libs/latestpost";
import PostCardMedium from "./libs/post-card-medium";
import PostCardSmall from "./libs/post-card-small";

const Homepage = () => {
    return (
        <>
            <Header />

            <LatestPost
                image = './WebHeaderLarge.png'
            >
                <a href='#'><b>Archetypes for creative leadership</b> How to define the behaviors you value</a>
            </LatestPost>

            <TwoGridWrapper>

                <PostCardMedium
                    image = './Leadership-archetypes-blog-header.png'
                >
                    <a href='#'><b>Archetypes for creative leadership</b> How to define the behaviors you value</a>
                </PostCardMedium>

                <PostCardMedium
                    image = './Header_Trauma-Informed-Design.jpg'
                >
                    <a href='#'><b>Designing for crisis</b> 5 learnings from developing trauma-informed products</a>
                </PostCardMedium>

            </TwoGridWrapper>

            <ThreeGridWrapper>

                <PostCardSmall
                    image = './Service-Design-Header-3.png'
                >
                    <a href='#'><b>The New Normal</b> Creating services to keep our travel community safe</a>
                </PostCardSmall>

                <PostCardSmall
                    image = './Tyrus-Header-for-Airbnb.Design-1.jpg'
                >
                    <a href='#'><b>Introducing Tyrus</b> Our free digital toolkit for freelance illustrators</a>
                </PostCardSmall>

                <PostCardSmall
                    image = './Header-Final.png'
                >
                    <a href='#'><b>Introducing Quicksand</b> Explore our new film series on overcoming creative adversity.</a>
                </PostCardSmall>

                <PostCardSmall
                    image = './wordpress-header-3x.jpg'
                >
                    <a href='#'><b>Closing the Experience Gap</b> 3 ways to use research to build more inclusive products</a>
                </PostCardSmall>

                <PostCardSmall
                    image = './Dogs-of-Chernobyl-cropped-small.png'
                >
                    <a href='#'><b>Designing for a changing world</b> Inside our mission to revamp the product for shifting consumer needs</a>
                </PostCardSmall>

                <PostCardSmall
                    image = './LowRes-AirbnbDesign_Header.jpg'
                >
                    <a href='#'><b>Calling all Illustrators</b> Collaborate on a quick survey to help shape a community-driven project</a>
                </PostCardSmall>

                <PostCardSmall
                    image = './PredictionsHeader.jpg'
                >
                    <a href='#'><b>Forecasting the Future</b> Eleven in-house creative leaders tell us what’s next for design in 2020</a>
                </PostCardSmall>

                <PostCardSmall
                    image = './header.jpg'
                >
                    <a href='#'><b>Ten Minutes With Cecilia Yang</b> What makes the design leader tick</a>
                </PostCardSmall>

                <PostCardSmall
                    image = './blog_imgs-01.jpg'
                >
                    <a href='#'><b>Calling all Creatives</b> A first look at Airbnb's multidisciplinary fellowship program</a>
                </PostCardSmall>

                <PostCardSmall
                    image = './language_expansion_blog_post-hero@1x.png'
                >
                    <a href='#'><b>Words of Welcome</b> With 62 supported languages worldwide, Airbnb reaches even more native speakers</a>
                </PostCardSmall>

                <PostCardSmall
                    image = './EPIC_crowd.jpg'
                >
                    <a href='#'><b>Capturing the Bigger Picture</b>  A grassroots approach to photographing the world</a>
                </PostCardSmall>

                <PostCardSmall
                    image = './MG_2038-Alfonso-De-Bejar.jpg'
                >
                    <a href='#'><b>Evolving by Design</b> Two newly appointed creative leaders on the next chapter at Airbnb</a>
                </PostCardSmall>

                <PostCardSmall
                    image = './Resized-header-image.jpg'
                >
                    <a href='#'><b>Documenting Space and Place</b> Design Week Mexico unites craft and culture</a>
                </PostCardSmall>

                <PostCardSmall
                    image = './Airbnb_Beijing_people-11-smaller.jpg'
                >
                    <a href='#'><b>Designing the Future</b> Design Week Mexico’s Inédito program celebrates work that makes a social impact</a>
                </PostCardSmall>

                <PostCardSmall
                    image = './PJMPHOTO19Q102_ARX9832_BLOG-1.jpg'
                >
                    <a href='#'><b>Worldly Workspaces</b> Approaching interior design through a cultural lens</a>
                </PostCardSmall>

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