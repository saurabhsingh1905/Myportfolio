import React from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import "./Home.css"


const Home = () => {
    return (
        <>
            <div className="container home_container ">
                <div className="home_innerdiv" >
                    <div className="left_div">
                        <h4 style={{ color: "#6c63ff" }}>MERN stack<span style={{ color: "black" }}> Developer</span></h4>
                        <h2>Hi, I'm <span style={{ color: "#6c63ff" }}>Saurabh Singh</span></h2>
                        <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}>Result oriented
                            Web Developer and Online Business Developer with considerable skill in
                            Website design and layout and in all stages of designing and coding of web applications, and in
                            the formation, planning and implementation of online business ventures.</p>

                        <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}> Looking to get hired with an esteemed
                            organisation where i can utilize my Skills and enchance learning.
                        </p>

                        <div className="btn_div mt-5">
                            <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#2f2d69", marginRight: 24 }}>
                                <NavLink to="/project" style={{ color: "white" }} className="text-decoration-none" >Projects</NavLink>
                            </Button>

                            <a style={{ color: "white" }} href={require("../assets/img/static.pdf")} download="saurabh resume" >
                                <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#6c63ff" }}>Resume</Button>
                            </a>
                        </div>
                    </div>
                    <div className="right_div ">
                        <img src="hello.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home