import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"

import "./homepageCard1.css"

const HomepageCard1 = ({card_info, image_info}) => {
    const data = useStaticQuery(graphql`
    query FPImageQuery1 {
      ImageOne: file(relativePath: {eq: "fp_one.bmp"}) {
        id
        publicURL
      }
    }
  `)
    const {frontmatter, html } = card_info
    console.log(image_info)
    return (
        <div className="fpCard">
            { frontmatter.image_side === "left" &&
            <img className="fpCard-image" src={image_info.publicURL} alt=""/>
            }
            <div className="fpCard-text"
                dangerouslySetInnerHTML={{__html: html}}
            />
            { frontmatter.image_side == "right" &&
            <img className="fpCard-image" src={image_info.publicURL} alt=""/>
            }
        </div>
    )
}

export default HomepageCard1
