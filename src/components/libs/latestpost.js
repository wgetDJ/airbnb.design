import React from 'react'
import styled from 'styled-components'

const LatestPost = () => {
  return (
    <>
        <PostImage />
        <PostDetails>
            <Title>
                <a href='#'>
                    <b>Learning Lessons</b> How to build a Design education program for creative work
                </a>
            </Title>
            <WrittenBY>
                <a href='#'>Behind the Scenes</a>, <a href='#'>Perspectives</a>
            </WrittenBY>
        </PostDetails>
    </>
  )
}

export default LatestPost

const PostImage = styled.div`
    width: 96%;
    margin: 30px auto;
    height: 600px;
    background-image: url('./WebHeaderLarge.png');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
`

const PostDetails = styled.div`
    width: 35%;
    margin-left: 4%;
    margin-top: -100px;
    background-color: var(--white);
    padding: 40px;
`

const Title = styled.div`
    font-size: 30px;

    & a {
        text-decoration: none;
        line-height: 40px;
        color: var(--light-gray);
    }
    & a b {
        color: var(--dark-gray);
    }
    & a:hover {
        text-decoration: underline;
        text-decoration-color: var(--dark-gray);
        text-decoration-thickness: 2px;
        text-underline-offset: 2px;
    }
`

const WrittenBY = styled.div`
    margin-top: 30px;
    
    & a {
        text-decoration: none;
        color: var(--dark-gray);
    }

    & a:hover {
        text-decoration: underline;
        text-underline-offset: 2px;
    }
`