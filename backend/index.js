import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserModel from './models/Users.js';
import env from "dotenv";
env.config();

const app = express();
// ["https://hjp-mern-client.vercel.app"],

app.use(cors({
  origin: "https://hjp-mern-client-sigma.vercel.app",
  methods: ["POST", "GET"],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials:true
}));
app.use(express.json());

mongoose.connect(
   process.env.MONGODB_URI
);

app.get("/", (req, res) => {
   res.json("Hello");
})

app.post("/newContact", async (req, res) => {
  const {fName, lName, email, subject, message} = req.body;
  const existUsername = await UserModel.findOne({ email: req.body.email});
  if (existUsername) {
      return res.status(400).json({ error: 'Email already used' });
  } else {
          UserModel.create({fName, lName, email, subject, message})
          .then(user => res.json({status: "OK"}))
          .catch(err => res.json(err))
  }
 
})

app.listen(8000, () => {
    console.log("server is running..");
})
