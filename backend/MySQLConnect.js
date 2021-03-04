// Importation des modules
const mysql = require('mysql');

// Module qui permet de stocker des informations sensibles séparément du code
require('dotenv').config();

// Connection à la base de donnée
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'aurelien95370',
    database : 'GroupomaniaDB'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});