// Importation des modules
const mysql = require('mysql');

// Module qui permet de stocker des informations sensibles séparément du code
require('dotenv').config();

// Connection à la base de donnée
exports.connection = mysql.createPool({
    host     : 'localhost',
    user     : `${process.env.DB_ID}`, //Verifier env. ou process.env.
    password : `${process.env.DB_PW}`, //Verifier env. ou process.env.
    database : 'GroupomaniaDB',
    timezone : 'local',
    charset : 'utf8mb4'
  });