import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projectData from './data';
import Spinner from 'react-bootstrap/Spinner';

const Project = () => {

  const [spin, setSpin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpin(false)
    }, 1500)
  }, [])

  return (
    <>
      {
        spin ? <div className='d-flex justify-content-center align-items-center' style={{ height: "90vh" }}>
          <Spinner animation="border" variant="danger" /> &nbsp;&nbsp; Loading.....</div> : 
          
          <div className='container'>
          
          <h2 className='text-center mt-10' style={{ color: "#6c63ff", marginTop: 30 }}>Projects</h2>
          
          <div className='card_div'>
            
            <div className='row d-flex justify-content-around align-items-center'>
              {
                projectData.map((el, index) => {
                  return (
                    <>
                      <Card style={{ width: '22rem', height: "18rem" }} className="mt-4 mb-4">
                        <Card.Img variant="top" style={{ width: '6rem', marginLeft: 0 }} src={el.imgsrc} />
                        <Card.Body className='d-flex justify-content-center flex-column'>
                          <Card.Title className='text-center'>{el.projectName}</Card.Title>
                          <Card.Text>
                            {el.desc}
                          </Card.Text>
                          <Button variant="primary">
                            <a href={el.demo} className='text-decoration-none text-light'>View Project</a></Button>
                        </Card.Body>
                      </Card>
                    </>
                  )
                })
              }

            </div>
          </div>
        </div>
      }



    </>
  )
}

export default Project