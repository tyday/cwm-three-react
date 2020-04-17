import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import Menu from "./menu"
import "./header.css"
import { useStaticQuery, graphql } from "gatsby"


const Header = ({siteTitle, isIndex}) => {
  const data = useStaticQuery(graphql`
    query HeroImageQuery {
      heroImage: file(relativePath: {eq: "Cbus Skyline at Night.jpeg"}) {
        childImageSharp {
          fluid {
            originalImg
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: {eq: "Existing Logo - White.png"}) {
        childImageSharp {
          fixed(width: 890, height: 370) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log(data)
  let headerDiv;
  if(isIndex){
    headerDiv = (
      <div >
        <Img
          fixed={data.logo.childImageSharp.fixed}
          className="siteLogo"
        />
        <img className="heroImage"  src={data.heroImage.childImageSharp.fluid.originalImg} alt="" srcset=""/>
        {/* <Img 
          fluid={data.heroImage.childImageSharp.fluid} 
          style={{ maxHeight: "100%" }}
          className="heroImage" fit="OUTSIDE" 
          imgStyle={{ objectFit: "cover", }}
          /> */}
      </div>
    )
  } else{
    headerDiv = (
      <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    )
  }
  return (
    <div>
  <header>
    {headerDiv}
    
  </header>
  </div>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
