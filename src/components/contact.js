import React from "react"
import "./contact.css"
const handleClick = (e) =>{    
    const ele = document.getElementById("contactForm")
    if(e.target == ele){
        ele.classList.toggle('modal-show')
    }
    
  } 
const Contact = () => {
  return (
    <div className="modal" id="contactForm" onClick={handleClick}>
        
      <form className="contact-form" method="post" action="#">
      <h3>Have Questions or Need a Complimentary Consultation? Contact Us Today.</h3>
        <p>
          <label>
            Name
            <input type="text" name="name" />
          </label>
        </p>
        <p>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        </p>
        <p>
        <label>
          Subject
          <input type="text" name="subject" />
        </label>
        </p>
        <p>
        <label>
          Message
          <input type="text" name="message" />
        </label>
        </p>
        <div className="center">
        <button className="button button-dark">Submit</button>
        </div>        
      </form>
    </div>
  )
}

export default Contact
