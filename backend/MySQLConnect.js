// Importation des modules
const mysql = require('mysql');

// Module qui permet de stocker des informations sensibles séparément du code
require('dotenv').config();

// Connection à la base de donnée
let connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PW,
    database : process.env.DB_DATABASE
    //timezone : 'local',
    //charset : 'utf8mb4'
  });

connection.connect();