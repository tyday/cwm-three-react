import React from "react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = (props) => (
  <Layout>
    {console.log(props)}
    <SEO title="About" />
    <h2>Welcome to Chaney Wealth Management</h2>
    <section className="about clearfix">
    <Img
            className="about-image"
            imgStyle={{
                objectFit: "contain",
              }}
            fixed={props.data.imageHeadshot.childImageSharp.fixed}
            />
      <p>
      I’m Joel Chaney, founder of Chaney Wealth Management. 
      I have 24 years of experience in providing sound, objective advice to investors looking for guidance with their financial decision-making. 
      I work closely with you to develop a custom, comprehensive plan that helps you pursue your goals with confidence.
      </p>
      <p>
      I listen to you carefully to ensure that the financial plan we create together aligns with your values, investment philosophy, risk tolerance,
      and both your short and long-term objectives. 
      To make certain you remain on course, we meet regularly to discuss changes in your life and how to best support them with smart financial planning. 
      </p>
      <p>
      I understand that your wealth represents what you have accomplished in the past and your aspirations for the future,
      and I take my role helping you grow and preserve your financial assets very seriously. 
      I pride myself in my accessibility, in regard to time and temperament. 
      I am responsive, easy to talk with, and am genuinely invested in helping you.
      </p>
    </section>
  </Layout>
)
export const cardQuery = graphql`
  query aboutPage {
    imageHeadshot: file(relativePath: {eq: "JoelAtDesk-Headshot.jpg"}) {
      childImageSharp{
        fixed(width:350, height:600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default AboutPage
