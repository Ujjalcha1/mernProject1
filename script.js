document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Here you can perform authentication with username and password

    console.log("Username:", username);
    console.log("Password:", password);

    // For demo purposes, just console log the username and password
  });
