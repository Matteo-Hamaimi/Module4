const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 1000;
const Service = require("./service.js");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/users", Service.getUsers);
app.get("/users/Id_user =:Id_user", Service. getUsersByID);
app.get("/users/username =:Chorename", Service.getUsername);
app.get("/users/Firstname=:Firstname", Service.getFirstName);
app.get("/users/Lastname=:Lastname", Service.getLastName);


app.get("/api/ping", (req, res) => {
  res.send({
    message: "test".repeat(req.query.value),
    value: req.query.value,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});