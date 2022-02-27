const Joi = require("joi");
const express = require("express");
const app = express();
app.use(express.json());

const genre = [
  { title: "comedy", name: ["name1", "name2", "name3", "name4"] },
  { title: "suspense", name: ["mov1", "mov2", "mov3", "mov4", "mov5"] },
];

app.get("/", (req, res) => {
  console.log("logging in home screen");
  res.send("<h1>VIDLY</h1>");
});

app.get("/api/genre", (req, res) => {
  res.send(`<h1>${genre.map((value) => value.title)}</h1>`);
});

app.get("/api/genre/:name", (req, res) => {
  const name = req.params.name;

  const movie = genre.find((value) => value.title === name);

  if (!movie) res.status(404).send("error");
  res.send(`<h1>${movie.name}</h1>`);
});

app.post("/api/movie", (req, res) => {
  const schema = {
    name: Joi.string().min(5).required(),
  };

  const result = Joi.validate(req.body, schema);
  console.log(result);
  const moviename = req.body.name;
  res.send(moviename);
});

app.listen(3000, () => console.log("listning on port 3000"));
