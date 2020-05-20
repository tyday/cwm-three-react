import { Link } from "gatsby"
import React, { createRef, useState, useEffect } from "react"
import "./menu.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Menu = ({children, sticky=false, isIndex, ...rest}) => {
    const className = "topnav-logo"
    const [isSticky, setIsSticky] = useState(false)
    const ref = React.createRef()   
    const handleClick = () =>{
      const ele = document.getElementById("contactForm")
      ele.classList.toggle('modal-show')
    } 
    console.log(ref)
    const data = useStaticQuery(graphql`
    query topnavlogo {
        logoSecondary: file(relativePath: {eq: "Existing Logo - White.png"}) {
            childImageSharp {
              fixed(height: 50) {
                ...GatsbyImageSharpFixed
              }
            }
          }
      }
    `)
    useEffect(()=>{
        const cachedRef = ref.current,
            observer = new IntersectionObserver(
                ([e]) => setIsSticky(e.intersectionRatio < 1),
                {threshold: [1]}
              )
    
        observer.observe(cachedRef)
        
        // unmount
        return function(){
          observer.unobserve(cachedRef)
        }
      }, [])
    return (
        <div
        className={"topnav" + (isSticky | !isIndex ? " isSticky" : "")}
        ref={ref}>
            <div className="topnavContainer">
            <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}>
            <Img
            id="topnavLogo"
          fixed={data.logoSecondary.childImageSharp.fixed}
          className="topnav-logo"
          imgStyle={{
            objectFit: "contain",
          }}
          alt="Chaney Wealth Management"
        />
            </Link>
            <ul>
                <Link to="/about/"><li>About</li></Link>
                <Link to="/help/"><li>How I Can Help</li></Link>
                <a href="#contactForm" onClick={handleClick}><li>Contact</li></a>
            </ul>
            </div>
            <div className="menu-spacer"></div>
            
            </div>
    )
}

export default Menu
