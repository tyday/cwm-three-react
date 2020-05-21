import { Link } from "gatsby"
import React, { createRef, useState, useEffect } from "react"
import "./menu.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Menu = ({children, sticky=false, isIndex, ...rest}) => {
    // const className = "topnav-logo"
    const [isSticky, setIsSticky] = useState(false)
    const ref = React.createRef()   
    const handleClick = () =>{
      const ele = document.getElementById("contactForm")
      ele.classList.toggle('modal-show')
    } 
    console.log(ref)
    const menuList = <ul>
                        <li><Link to="/about/">About</Link></li>
                          <li><Link to="/help/">How I Can Help</Link></li>
                          <li><Link to="/page-2/">Contact</Link></li>
                    </ul>
    const menuListHamburger = <ul className="menu-hamburger">
                          <li><Link to="/about/">About</Link></li>
                          <li><Link to="/help/">How I Can Help</Link></li>
                          <li><Link to="/page-2/">Contact</Link></li>
                      </ul>
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
<<<<<<< HEAD
            <label for="toggle-1" class="toggle-menu"><ul><li></li> <li></li> <li></li></ul></label>
            <input type="checkbox" id="toggle-1"></input>
              <nav className="menu-wide">
                {menuList}
              </nav>
=======
            <ul>
                <Link to="/about/"><li>About</li></Link>
                <Link to="/help/"><li>How I Can Help</li></Link>
                <a href="#contactForm" onClick={handleClick}><li>Contact</li></a>
            </ul>
>>>>>>> origin/contact
            </div>
            <div className="menu-spacer"></div>
            
            </div>
    )
}

export default Menu
