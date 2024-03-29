const express = require("express");
const app = express();

// app.use((req, res) => {
//   res.send({ Name: "Affan", Age: 28, isWorking: true });
// });

app.get("/", (req, res) => {
  res.send("this is home");
});

app.get("/cats", (req, res) => {
  res.send({ name: "jimmy", age: 4, isFluffy: true, sex: "male" });
});

app.post("/cats", (req, res) => {
  res.send("This is a post req to /cats. Try nodemon");
});

app.delete("/cats", (req, res) => {
  res.send("This is a delete req to /cats. You can't delete my cat");
});

app.get("/dogs", (req, res) => {
  res.send("woof");
});

// query strings
app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("Nothing found");
  }
  res.send(`search results for: ${q}`);
});
// query strings

app.get("*", (req, res) => {
  res.send("In accessible");
});

app.listen(8080, () => {
  console.log("listening to 8080");
});
