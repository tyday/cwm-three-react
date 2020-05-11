import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <ul>
            <li>Chaney Wealth Management</li>
            <li className="side-border"></li>
            <li><a href="mailto:info@chaneywealth.com">info@chaneywealth.com</a></li>
            <li className="side-border"></li>
            <li><a href="tel:+16148683900">(614) 868-3900</a></li>
            </ul>
            <p>
            Check the background of your financial professional on FINRA's&nbsp;
            <a href="https://brokercheck.finra.org">BrokerCheck</a>. 
            Securities and advisory services offered through LPL Financial, a registered investment advisor.
            Member FINRA/SIPC. The LPL Financial Registered Representatives associated
            with this site may only discuss and/or transact securities business with residents of the following states:
            IN, FL, OH, PA, SC
            </p>
        </footer>
    )
}

export default Footer

// 7530 Slate Ridge Blvd
//     Reynoldsburg, OH 43068
//     Office: (614) 868-3900
//     joel.chaney@lpl.com