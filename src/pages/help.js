import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HomepageCard from "../components/homepageCard"

const HelpPage = ({data, }) => (
  <Layout>
    <SEO title="How I can help" />
    <h2>Let’s Do This Together.</h2>
    <HomepageCard card_info={data.cardOne} image_info={data.imageOne}/>
  </Layout>
)

export const cardQuery = graphql`
  query howtohelp {
    cardOne: markdownRemark(frontmatter: {title: {eq: "h2h_one"}}) {
      html
      frontmatter {
        image_side
      }
    }
    imageOne: file(relativePath: {eq: "help.png"}) {
      childImageSharp{
        fixed(width:500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default HelpPage
