import React, { useState } from 'react'
import "./Contact.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [inputvalue, setInputvalue] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    message: ""
  })
  // console.log(inputvalue);

  const getvalue = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    setInputvalue(() => {
      return {
        ...inputvalue,
        [name]: value
      }
    })
  }

  const sentUserdata = async (e) => {
    e.preventDefault();

    const { fname, lname, email, mobile, message } = inputvalue

    if (fname === "") {
      toast.error("first name is required")
    } else if (lname === "") {
      toast.error("last name is required")
    } else if (email === "") {
      toast.error("email is required")
    }
    else if (!email.includes("@")) {
      toast.error("Invalid email")
    } else if (mobile === "") {
      toast.error("Mobile is required")
    } else {
      
      //in else part we will call API which we have created in our backend

      const res = await fetch("http://localhost:6002/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname, lname, email, mobile, message
        })
      });

      const data = await res.json();
      console.log(data);

      if (data.status === 201) {
        toast.success("Thank You for this interview call ")
        setInputvalue({
          ...inputvalue,
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          message: ""
        })

      }
    }
  }
  return (
    <>
      <div className='container mb-3 contact'>
        <h2 className='text-center mt-4 mb-3' style={{ color: "#6c63ff"  }}>Send Interview Call</h2>
        <div className='container mt-3'  >
          <Form className='row mt-2'>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="fname" value={inputvalue.fname} onChange={getvalue} placeholder="Enter your name"/>

            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" name="lname" value={inputvalue.lname} onChange={getvalue} placeholder="Enter company's name" />

            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" name="email" value={inputvalue.email} onChange={getvalue} placeholder="Enter your Email"/>

            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" name="mobile" value={inputvalue.mobile} onChange={getvalue} placeholder="Enter your contact details"/>

            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={7} name="message" value={inputvalue.message} onChange={getvalue} placeholder="Please type the message that you need to convey saurabh"/>
            </Form.Group>

            <div className='d-flex justify-content-center ' >
              <Button variant="primary" className='col-lg-6' type="submit" onClick={sentUserdata}>
                Submit
              </Button>
            </div>


          </Form>
          <ToastContainer />
        </div>

      </div>
    </>
  )
}

export default Contact