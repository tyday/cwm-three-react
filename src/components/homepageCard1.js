import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"

import "./homepageCard1.css"

const HomepageCard1 = () => {
    const data = useStaticQuery(graphql`
    query FPImageQuery1 {
      ImageOne: file(relativePath: {eq: "fp_one.bmp"}) {
        id
        publicURL
      }
    }
  `)
  console.log(data)
    return (
        <div className="fpCard">
            <img className="fpCard-image" src={data.ImageOne.publicURL} alt=""/>
            <div className="fpCard-text">As an independent advisor, I act in your best interest at all times, 
                providing you with the confidence you need to pursue financial success on your terms - 
                I have no obligations to investment product manufacturers. I don’t have cross-sell quotas or 
                home-office directives that lead to conflicts of interest. I spend my time developing customized strategies 
                for the unique challenges you face.</div>
            <hr/>
        </div>
    )
}

export default HomepageCard1
