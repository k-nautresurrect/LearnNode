// it will return a function named express
const express = require("express");

// it will create an whole app function having capability of express
const app = express();
app.use(express.json());

console.log(typeof app);
console.log(app);

let allCourses = [
  { id: 1, name: "react" },
  { id: 2, name: "node" },
  { id: 3, name: "mongodb" },
  { id: 4, name: "angular" },
  { id: 5, name: "java" },
];

app.get("/", (req, res) => {
  console.log(res);
  console.log(req);
  res.send("hey");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

app.get("/api/course/:id", (req, res) => {
  let Id = parseInt(req.params.id);

  let c = allCourses.filter(({ id }) => id === Id);

  //   res.send(c); // returns the array of that object only

  let course = allCourses.find((c) => c.id === Id);
  if (!course) res.status(404).send("not found");
  res.send(course.name);
  /*
  for (let i = 0; i < allCourses.length; i++) {
    if (id === allCourses[i].id) {
      res.send(allCourses[i].name);
    }
  }
*/
});

app.post("/api/course", (req, res) => {
  const course = {
    id: allCourses.length + 1,
    name: req.body.name,
  };
  allCourses.push(course);
  res.send(course);
});

app.put("api/course/:id", (req, res) => {});

app.listen(3000, () => console.log("port 3000, listnening"));
// setting an environment variable -> exxport NAME=value
