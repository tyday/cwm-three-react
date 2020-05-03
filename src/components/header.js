import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
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
          fixed( height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoSecondary: file(relativePath: {eq: "Existing Logo - White.png"}) {
        childImageSharp {
          fixed(height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    
  `)
  let headerClass = (isIndex ? "header-main" : "header-secondary")
  let headerDiv;
  if(isIndex){
    headerDiv = (
      <div >
        <Img
          fixed={data.logo.childImageSharp.fixed}
          imgStyle={{
            objectFit: "contain",
          }}
          className="siteLogo"
          alt="Chaney Wealth Management"
        />
        <img className="heroImage"  
          src={data.heroImage.childImageSharp.fluid.originalImg} 
          alt="" srcSet={data.heroImage.childImageSharp.fluid.srcSet}/>
        {/* <Img 
          fluid={data.heroImage.childImageSharp.fluid} 
          style={{ maxHeight: "100%" }}
          className="heroImage" fit="OUTSIDE" 
          imgStyle={{ objectFit: "cover", }}
          /> */}
      </div>
    )
  } else if(1==2){
    headerDiv = (
      <div>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Img
          fixed={data.logoSecondary.childImageSharp.fixed}
          imgStyle={{
            objectFit: "contain",
          }}
          className="siteLogo"
          alt="Chaney Wealth Management"
        />
        </Link>
    </div>
    )
  } else {
    headerDiv = (<div></div>)
  }
  return (
  <header className={headerClass}>
    {headerDiv}    
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
