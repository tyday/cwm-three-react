import React from 'react'
import Img from "gatsby-image"

import "./homepageCard.css"

const HomepageCard = ({card_info, image_info}) => {
    const {frontmatter, html } = card_info
    console.log(image_info)
    return (
        <div className={"fpCard" + " fpCard-" + frontmatter.image_side}>
            { frontmatter.image_side === "left" &&
            <Img
            className="fpCard-image"
            imgStyle={{
                objectFit: "contain",
              }}
            // fixed={image_info.childImageSharp.fixed}
            fluid={image_info.childImageSharp.fluid}
            />
            }
            <div className="fpCard-text"
                dangerouslySetInnerHTML={{__html: html}}
            />
            { frontmatter.image_side === "right" &&
            <Img
            className="fpCard-image"
            imgStyle={{
                objectFit: "contain",
              }}
            // fixed={image_info.childImageSharp.fixed}
            fluid={image_info.childImageSharp.fluid}
            />
            }
        </div>
    )
}

export default HomepageCard