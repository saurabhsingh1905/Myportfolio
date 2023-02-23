import React from 'react'
//import resume from'../assets/img/static.pdf'
//import static from "../static" 
import "./Footer.css"


const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <>
      <div className='footer'>
        <div className='container footer_container d-flex justify-content-around flex-wrap'>
          <div className='first mt-5 '>
            <h4>Saurabh singh</h4>
            <p> {year} Saurabh singh All rights reserved</p>
            <p className='d-flex'>
              <i className='fa-brands fa-instagram '></i>
              <i className='fa-brands fa-facebook mx-3 '></i>
            </p>
          </div>
          <div className='second mt-5 '>
            <h4>Get In Touch</h4>
            
            <p ><a href='/contact' style={{ color: "white" }}>singhsaurabh1905@gmail.com </a></p>
            <p><a href='/contact'  style={{ color: "white" }}>8109482460 </a></p>
          </div>
          <div className='third mt-5'>
            <h4>About</h4>
            {/* <p>Resume</p> */}
            <a  style={{ color: "white" }} href={require("../assets/img/static.pdf" )} download="saurabh resume" >Resume </a>
          </div>
        </div>
      </div>

    </>
  )
}
export default Footer


// className="text-decoration-none" 
//  <a href="assets/img/Rishabh-Singh-Resume.pdf" download="Rishabh's Resume" target='_blank'>
// <button type="button" class="btn btn-success btn-lg btn-block">Download Resume</button>
// </a> 