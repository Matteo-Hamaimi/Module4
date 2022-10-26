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
    console.log(req.body)
    this.pg("users").then((data) => {
      res.json(data);
    });
  };

  getUsersByID = (req, res) => {
    const id_user = parseInt(req.params.Id_User);
    this.pg("users")
      .where({ id_user })
      .then((data) => {
        res.json(data);
      });
  };

  getLastName = (req, res) => {
    const lastname = req.params.lastname;
    this.pg("users")
      .where({ lastname })
      .then((data) => {
        res.json(data);
      });
  };

  getFirstName = (req, res) => {
    const firstname = req.params.firstname;
    this.pg("users")
      .where({ firstname })
      .then((data) => {
        res.json(data);
      });
  };

  getUsername = (req, res) => {
    const username = req.params.username;
    this.pg("users")
      .where({ username })
      .then((data) => {
        res.json(data);
      });
  };

  

  createUsers = (req, res) => {
    const { username, firstname, lastname } = req.body;
    this.pg("users")
      .insert({ username, firstname, lastname })
      .then((data) => {
        console.log(data);
        res.json(data);
      });
  };

  updateUser = (req, res) => {
    const id_user = parseInt(req.params.Id_User);
    const { lastname, firstname, username } =
      req.body;
    this.pg("users")
      .where({ id_user })
      .update({ lastname, firstname, username })
      .then((data) => {
        res.json(data);
      });
  };

  deleteUser = (req, res) => {
    const id_user = parseInt(req.params.Id_User);
    this.pg("users")
      .where({ id_user })
      .del()
      .then((data) => {
        res.json(data);
      });
  };
}

module.exports = new service();