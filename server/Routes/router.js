const express = require("express");
const router = new express.Router();
const users = require("../models/userSchema");
const nodemailer = require("nodemailer");

//email configuration
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
});

//register user details
router.post("/register", async (req, res) => {

    //fname:req.body.fname bhi kr skte hai but better is to destructure it so that code does
    //not become lengthy| Frontend pr jo key declare kari hai wo key and yaha pr jo hai wo 
    //same honi chahiye otherwise req.body me value get nhi ho payegi
    const { fname, lname, email, mobile, message } = req.body
    //console.log(req.body);

    if (!fname || !lname || !email || !mobile) {
        res.status(401).json({ status: 401, error: "All input is required" })
    }

    try {
        const preuser = await users.findOne({ email: email });
        if (preuser) {
            //agar user pahle se present hai  database me toh us user ko se database me save 
            //krne k koi sense nhi hai isliye hum sirf us user ko database me find karenge and sirf 
            // uske message ko he save kara denge

            //agar preuser hai toh humko data milega, toh jo humko data milta hai uski help se Messagesave 
            //function ko call karayenge 
            
            const userMessage = preuser.Messagesave(message);
            console.log(userMessage);
            const mailOptions = {

                from: process.env.EMAIL,
                to: email,
                subject: "This is an interview call",
                text: "Your response has been submitted. Thank You for this interview call"


            }

            transporter.sendMail(mailOptions, (error, info) => {

                if (error) {
                    console.log("error" + error)
                } else {

                    console.log("Email sent succesfully" + info.response);
                    res.status(201).json({ status: 201, message: "Email sent succesfully ThankU" })
                }
            });

        }
        //Agar preuser nhi hai toh pahle usko database me store kara lenge
        else {
            const finalUser = new users({
                fname, lname, email, mobile, message
            });
            //User ko save kara lenge monodb k save method se then mail send kara rahe

            const storeData = await finalUser.save();

            //In this mailoption hum define kr rahe from/to/subject/and message jo bhi email pr receive 
            //hoga send krne wale ko
            const mailOptions = {

                from: process.env.EMAIL,
                to: email,
                subject: "This is an interview call",
                text: "Your response has been submitted. Thank You for this interview call"


            }

            //Transporter jo uper create kiye the uski madad se mail send kara rahe 

            transporter.sendMail(mailOptions, (error, info) => {

                if (error) {
                    console.log("error" + error)
                } else {
                    console.log("Email sent succesfully" + info.response);
                    res.status(201).json({ status: 201, message: "Email sent succesfully ThankU " })
                }
            });
            res.status(201).json({ status: 201, storeData })

        }

    } catch (error) {
        res.status(401).json({ status: 401, error: "Something went wrong" });
        console.log("catch error")
    }
})





module.exports = router;