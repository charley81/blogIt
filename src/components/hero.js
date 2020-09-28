import React from 'react'
import styled from '@emotion/styled'
import { Link, graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const ImageBackground = styled(BackgroundImage)`
  background-position: center center;
  background-size: cover;
  height: 50vh;
  object-fit: contain;
`

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 calc((100vw - 550px) / 2);
  width: 100%;
  margin: 0;

  h1 {
    margin: 0;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "ben-dutton-mn.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <ImageBackground Tag='section' fluid={image.sharp.fluid} fadeIn='soft'>
      <TextBox>
        <h1>blogIt</h1>
        <p>
          My personal blog <Link to='/about'>Learn about me &rarr;</Link>
        </p>
      </TextBox>
    </ImageBackground>
  )
}

export default Hero
