import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <ul>
            <li>Chaney Wealth Management</li>
            <li className="side-border"></li>
            <li><a href="mailto:Joel.chaney@lpl.com">Joel.chaney@lpl.com</a></li>
            <li className="side-border"></li>
            <li><a href="tel:+16148683900">(614) 868-3900</a></li>
            <li className="side-border"></li>
            <li><a href="https://www.google.com/maps/place/Chaney+Wealth+Management/@39.9459779,-82.7966516,17z/data=!4m12!1m6!3m5!1s0x883864ebe6e1ceb7:0x599f77a742a442de!2sChaney+Wealth+Management!8m2!3d39.9459779!4d-82.7944629!3m4!1s0x883864ebe6e1ceb7:0x599f77a742a442de!8m2!3d39.9459779!4d-82.7944629">7530 Slate Ridge Blvd. Reynoldsburg, OH. 43068</a></li>
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