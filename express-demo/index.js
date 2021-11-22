const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('HEllo World!')
});

app.get('/api/courses',(req,res) => {
    res.send([1,2,3]);
})

app.get('/api/liveserver',(req,res)=>{
    res.send(['liveserver','new Element'])
});


// environment variable

/*
 *
 * while deploying 3000 may or maynot be available
 * so it is a good practice to not hard code port number.
 * 
*/

// PORT
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

/*
  we can list all the environment variable or paths by
  export -p
  here as i have made an env variable port so,
    declare -x PWD="/home/kaynaut/Desktop/LearnNode/express-demo"
  this line is there for providing a path to this directory
  also when i will enter the port number in the console 
  a new line will be added.
    declare -x PORT="8080"
  to reset the port 
    unset PORT
*/

// Route Parameters
app.get('/api/courses/:id',(req,res)=>{
    res.send(req.params.id);
})

app.get('/api/params',(req,res)=>{
    res.send(req.params);       // a null object as nothing is passed
})

app.get('/api/params/:id/:customer',(req,res)=>{
    res.send( req.query);
    // res.send(req.query);
})

// app.get('/api/params/:id/:customer',(req,res)=>{
//     res.send(req.query);
// })