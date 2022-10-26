const pingApi = () => {
  console.log({ value: document.getElementById("inputNumber").value });
  fetch(
    "/api/ping?" +
      new URLSearchParams({
        value: document.getElementById("inputNumber").value,
      })
  ).then((res) => res.json());
};

const executeFunction = () => {
  var functionSwitch = document.getElementById("request").value;
  switch (functionSwitch) {
    case "creation": {
      getCreation();
      break;
    }
    case "read": {
      getRead();
      break;
    }
    case "update": {
      getUpdate();
      break;
    }
    case "delete": {
      getDelete();
      break;
    }
  }
};

const getRead = () => {
  var id = document.getElementById("Id_User").value;
  var lastname = document.getElementById("Lastname").value;
  var firstname = document.getElementById("Firstname").value;
  var username = document.getElementById("username").value;
  console.log(id);
  if (id != "") {
    console.log(id);
    fetch("/users/Id_User=" + id)
      .then((data) => data.json())
      .then((data) => alert(JSON.stringify(data)));
  } else if (lastname != "") {
    fetch("/users/Lastname=" + lastname)
      .then((data) => data.json())
      .then((data) => alert(JSON.stringify(data)));
  } else if (firstname != "") {
    fetch("/users/Firstname=" + firstname)
      .then((data) => data.json())
      .then((data) => alert(JSON.stringify(data)));
  } else if (username != "") {
    fetch("/users/username=" + username)
      .then((data) => data.json())
      .then((data) => alert(JSON.stringify(data)));
  } else {
    fetch("/users/")
      .then((data) => data.json())
      .then((data) => alert(JSON.stringify(data)));
  }
};

const getCreation = () => {
  var lastname = document.getElementById("Lastname").value;
  var firstname = document.getElementById("Firstname").value;
  var username = document.getElementById("username").value;

  var payload = {
    last_name: lastname,
    first_name: firstname,
    username: username,
  };

  fetch("/users/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => alert(JSON.stringify(res)));
};

const getDelete = () => {
  var id = document.getElementById("Id_User").value;
  fetch("/users/" + id, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => alert(JSON.stringify(res)));
};

const getUpdate = () => {
  var id = document.getElementById("Id_User").value;
  var lastname = document.getElementById("Lastname").value;
  var firstname = document.getElementById("Firstname").value;
  var username = document.getElementById("username").value;

  var payload = {
    Id_User : id,
    last_name: lastname,
    first_name: firstname,
    username: username,
  };

  fetch("/users/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => alert(JSON.stringify(res)));
};
