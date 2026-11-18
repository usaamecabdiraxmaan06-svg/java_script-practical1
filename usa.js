const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const users = [
    {
        "id": 1,
        "name": "ozame",
        "age": 21,
    },
    {
        "id": 2,
        "name": "abdi",
        "age": 25,
    }
]

app.get('/', function (req, res) {
    res.send("welcome"),
});

app.get('/users', function (req, res){
    res.json("users");
});

app.post('/register-user', function(){

    console.log("body info:", req.body);

    const newuser = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age,
    };

     res.status(201).json(newuser);

});

app.listen(port , function() { 
    console.log(`app listening on port ${port}`);
});