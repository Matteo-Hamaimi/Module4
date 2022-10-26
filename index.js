const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
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
app.get("/users/id_user=:Id_User", Service. getUsersByID);
app.get("/users/username=:username", Service.getUsername);
app.get("/users/firstname=:firstname", Service.getFirstName);
app.get("/users/lastname=:lastname", Service.getLastName);
app.post("/users", Service.createUsers);
app.put("/users/:Id_User", Service. updateUser);
app.delete("/users/:Id_User", Service.deleteUser);


app.get("/api/ping", (req, res) => {
  res.send({
    message: "test".repeat(req.query.value),
    value: req.query.value,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});