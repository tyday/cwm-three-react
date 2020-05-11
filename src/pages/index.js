import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HomepageCard from "../components/homepageCard"

const IndexPage = ({data, }) => (
  <Layout isIndex={true}>
    <SEO title="Home" />
    <h2>Deep Insights.</h2>
    <h2>Long-Term Goal Acquisition.</h2>
    <h2>No Bullshit.</h2>
    <HomepageCard card_info={data.cardOne} image_info={data.imageOne}/>
    <HomepageCard card_info={data.cardTwo} image_info={data.imageTwo}/>
    <HomepageCard card_info={data.cardThree} image_info={data.imageThree}/>
  </Layout>
)

export default IndexPage

export const cardQuery = graphql`
query cardOne {
  cardOne: markdownRemark(frontmatter: {title: {eq: "fp_one"}}) {
    html
    frontmatter {
      image_side
    }
  }
  imageOne: file(relativePath: {eq: "fp_one.png"}) {
    childImageSharp{
      fixed(width:500) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  cardTwo: markdownRemark(frontmatter: {title: {eq: "fp_two"}}) {
    html
    frontmatter {
      image_side
    }
  }
  imageTwo: file(relativePath: {eq: "fp_two.png"}) {
    childImageSharp{
      fixed(width:500) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  cardThree: markdownRemark(frontmatter: {title: {eq: "fp_three"}}) {
    html
    frontmatter {
      image_side
    }
  }
  imageThree: file(relativePath: {eq: "fp_three.bmp"}) {
    id
    publicURL
  }
}
`

  

