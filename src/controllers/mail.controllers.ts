import 'dotenv/config'
import { Request, Response } from 'express';
import nodemailer from 'nodemailer'

exports.mailsend = async ( req:Request, res: Response) => {

    const hostMail = process.env.EMAIL
    const pass = process.env.PASS

    console.log("Req Masuk!")

    try {

        const {email, date, name} = req.body

        console.log(email)


        let mailTransporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: `${hostMail}`,
                pass: `${pass}`
            }
        })

        let details = {
            from: `${hostMail}`,
            to: `${email}`,
            subject: "Test Nodemailer",
            text: `Hello ${name}, \n Testing email send with Nodemailer`
        }

        mailTransporter.sendMail(details, (err: any) => {
            if(err){
                console.log("Error occured", err)
            }else{
                return res.sendStatus(200)
            }
        })

    } catch (e: any) {
        res.status(500).send({
            errorMessage: e 
        })
    }
}