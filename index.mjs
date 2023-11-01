import express from "express";
import cors from "cors";
const port = process.env.PORT || 500;
const app = express();

app.use(express.json());
app.use(cors());

let users = [];

function randomNumber(){
    return Math.floor(Math.random()*1000000000000000);
}

app.post('/user/:id', (req, res)=>{
  console.log(req.body);

  let newUser ={
    id:randomNumber(),
    name: req.body.name,
    company: req.body.company,
    age: req.body.age,
    pass: req.body.pass,
  }
  users.push(newUser);
  res.status(201).send('new user created!')

});

app.get('/user', (req, res)=>{
    res.json(users);
});




app.listen(port, ()=>{
    console.log(`The server is listening at ${port}`);
});