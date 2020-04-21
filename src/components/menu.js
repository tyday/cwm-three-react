import { Link } from "gatsby"
import React from "react"
import "./menu.css"

const Menu = () => {
    return (
        <div className="topnav">
            <ul>
                <Link to="/about/"><li>About</li></Link>
                <Link to="/help/"><li>How I Can Help</li></Link>
                <Link to="/page-2/"><li>Contact</li></Link>
            </ul>
            <div className="menu-spacer"></div>
        </div>
    )
}

export default Menu
