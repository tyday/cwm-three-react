import { Link } from "gatsby"
import React from "react"
import "./menu.css"

const Menu = () => {
    return (
        <div>
            <ul>
                <Link to="/page-2/"><li>About</li></Link>
                <Link to="/page-2/"><li>How I Can Help</li></Link>
                <Link to="/page-2/"><li>Contact</li></Link>
            </ul>
        </div>
    )
}

export default Menu
