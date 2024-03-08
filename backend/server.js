import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserModel from './models/Users.js'

const app = express();

app.use(cors({
  origin: true,
  methods: ["POST", "GET"],
  credentials:true
}));
app.use(express.json());

mongoose.connect(
    "mongodb+srv://frostisr:cr1pt0sr@cluster0.od5flz5.mongodb.net/db_hjp?retryWrites=true&w=majority&appName=Cluster0"
);

// app.get("/getUsers", (req, res) => {
//     UserModel.find({}).then(function(users) {
//         res.json(users)
//     }).catch(function(err) {
//         res.json(err)
//     })
// })

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