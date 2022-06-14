import express from "express"
import 'dotenv/config'
import { Request, Response } from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from 'nodemailer'

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(
    cors({
        origin: "*",
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    })
)

app.get("/", (req: Request, res: Response) => {
    return res.send("Hewwro warudo")
})

require('./routes/mail.routes')(app)

app.listen(PORT, () => {
    console.log("App running at http://localhost:3000")
})