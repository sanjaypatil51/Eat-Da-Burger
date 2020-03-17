// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "welcome123",
//   database: "burgerDb"
// });

//heroku database
// var connection = mysql.createConnection({
//   host: "us-cdbr-iron-east-04.cleardb.net",
//   port: process.env.PORT|| 3306,
//   user: "bbcf7c968de9b1",
//   password: "13a4a4a4",
//   database: "heroku_f5bbbb4845c5c79"
// });


//heroku database create pool to avoid dropping mysql connection
var connection = mysql.createPool({
  host: "us-cdbr-iron-east-04.cleardb.net",
  port: process.env.PORT|| 3306,
  user: "bbcf7c968de9b1",
  password: "13a4a4a4",
  database: "heroku_f5bbbb4845c5c79"
});


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
