import React from 'react'
import "./About.css"

const About = () => {

  return (
    <>
      <div className='container mb3 about_container' style={{ minHeight: "100%" }}>
        <div className='container main_container d-flex justify-content-around flex-wrap'>
          <div className='left_container mt-5' style={{ width: 500 }} >

            <h2 style={{color: "#6c63ff", letterSpacing:".5px", marginBottom:50,lineHeight:1}}>Meet Saurabh Singh</h2>

          <h2>Education</h2>
            <div style={{color:"#666", letterSpacing:".5px", marginTop:2,lineHeight:2}}>
            <li >BE in Electronics & Telecommunication from GEC Raipur in 2019</li>
            <li>10+2 from Holy Hearts Educational Academy in 2015.</li>
            <li>10 from Holy Hearts Educational Academy in 2013 with 84%</li>
           
            </div>

            <h2 style={{marginTop:20}}>Technical Skills</h2>
            <div style={{color:"#666", letterSpacing:".5px", marginTop:2,lineHeight:2}}>
              <li>MERN STACK </li>
              <li>Familiar with Hooks,Redux,Router,React table,Storybook </li>
              <li>Also Familiar with React Testing & React Typescript </li>
            </div>


            <h2 style={{marginTop:20}}>Personal Details</h2>
            <div style={{color:"#666", letterSpacing:".5px", marginTop:2,lineHeight:2,marginBottom:30}}>
             <li>DOB = 29/4/1998</li>
             <li>Address = Housing Board Raipur</li>
             <li>Intersted in Traveling,Outdoor games,Rescues,Voluntering</li>
            </div>
           
            
            
          </div>
          <div className='right_container mt-3 mb-4'>
            <img src='profileimg.jpg' alt=""style={{ border: "none", borderRadius: 40}} />
          </div>
          <div >
          </div>
        </div>
      </div>
    </>
  )
}

export default About