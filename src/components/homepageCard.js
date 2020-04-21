import React from 'react'

import "./homepageCard.css"

const HomepageCard = ({card_info, image_info}) => {
    const {frontmatter, html } = card_info
    console.log(image_info)
    return (
        <div className="fpCard">
            { frontmatter.image_side === "left" &&
            <img className="fpCard-image fpCard-image--large" src={image_info.publicURL} alt=""/>
            }
            <div className="fpCard-text"
                dangerouslySetInnerHTML={{__html: html}}
            />
            { frontmatter.image_side === "right" &&
            <img className="fpCard-image" src={image_info.publicURL} alt=""/>
            }
        </div>
    )
}

export default HomepageCard