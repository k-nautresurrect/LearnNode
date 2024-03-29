const Joi = require('joi');
const express = require('express');
const app = express();
const courses = [
    {id: 1, name: "courses"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"}
];

app.use(express.json());



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

app.get('/api/params/:year/:date',(req,res)=>{
    //res.send(req.query);       // a null object as nothing is passed
    res.send(req.params);
})

app.get('/api/find/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('the course for given id was not found');
    res.send(course);
})

app.post('/api/courses',(req,res) => {
    // with joi we have to define a schema
    const schema = {
        name: Joi.string().min(3).require()
    }

    const result = Joi.valid(req.body, schema);
    // console.log(res);
    /**
     * it returns {
     *  error:
     *  value:
     *  then:
     *  catch:
     * }
     */
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});

// app.get('/api/params/:id/:customer',(req,res)=>{
//     res.send(req.query);
// })

// updating resources
app.put('api/courses/:id',(req,res) => {
    // Look up the course
    // If not existing, return 404
    const course = courses.find( c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("course doesn't exist");

    // Validation
    const schema = {
        name: Joi.string().min(3).required()
    }
    const result = Joi.valid(req.body, schema);
    if(result.error){
        res.send(400).send(result.error.details[0].message);
        return;
    }

    // updating course
    course.name = req.body.name;
    res.send(course);

})