const knex = require("knex");

class service {
  constructor() {
    this.pg = knex({
      client: "pg",
      connection: {
        host: "localhost",
        port: 5432,
        user: "postgres",
        password: "Cobra2710",
        database: "ChoreCount",
        charset: "utf8",
      },
    });
  }

  getUsers = (req, res) => {
    this.pg("users").then((data) => {
      res.json(data);
    });
  };

  getUsersByID = (req, res) => {
    const Id_user = parseInt(req.params.id);
    this.pg("users")
      .where({ Id_users })
      .then((data) => {
        res.json(data);
      });
  };

  getLastName = (req, res) => {
    const last_name = req.params.lastname;
    this.pg("users")
      .where({ last_name })
      .then((data) => {
        res.json(data);
      });
  };

  getFirstName = (req, res) => {
    const first_name = req.params.firstname;
    this.pg("users")
      .where({ first_name })
      .then((data) => {
        res.json(data);
      });
  };

  getUsername = (req, res) => {
    const user_name = req.params.username;
    this.pg("users")
      .where({ fuser_name })
      .then((data) => {
        res.json(data);
      });
  };

  

  createUsers = (req, res) => {
    const { Id_users, username, Firstname, Lastname } =
      req.body;
    this.pg("users")
      .insert({ Id_users, username, Firstname, Lastname })
      .then((data) => {
        console.log(data);
        res.json(data);
      });
  };

  updateUser = (req, res) => {
    const Id_user = parseInt(req.params.id);
    const { Lastname, Firstname, Username } =
      req.body;
    this.pg("users")
      .where({ Id_user })
      .update({ Lastname, Firstname, Username })
      .then((data) => {
        res.json(data);
      });
  };

  deleteUser = (req, res) => {
    const Id_user = parseInt(req.params.id);
    this.pg("users")
      .where({ Id_user })
      .del()
      .then((data) => {
        res.json(data);
      });
  };
}

module.exports = new service();