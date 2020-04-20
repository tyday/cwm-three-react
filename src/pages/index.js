import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import HomepageCard1 from "../components/homepageCard1"

const IndexPage = ({data, }) => (
  <Layout isIndex={true}>
    <SEO title="Home" />
    <h2>Deep Insights.</h2>
    <h2>Long-Term Goal Acquisition.</h2>
    <h2>No Bullshit.</h2>
    <HomepageCard1 card_info={data.cardOne} image_info={data.imageOne}/>
    <HomepageCard1 card_info={data.cardTwo} image_info={data.imageTwo}/>
    <HomepageCard1 card_info={data.cardThree} image_info={data.imageThree}/>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
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
  imageOne: file(relativePath: {eq: "fp_one.bmp"}) {
    id
    publicURL
  }
  cardTwo: markdownRemark(frontmatter: {title: {eq: "fp_two"}}) {
    html
    frontmatter {
      image_side
    }
  }
  imageTwo: file(relativePath: {eq: "fp_two.bmp"}) {
    id
    publicURL
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

  

