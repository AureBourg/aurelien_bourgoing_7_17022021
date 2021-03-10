// Importation des modules
const mysql = require('mysql');

// Module qui permet de stocker des informations sensibles séparément du code
require('dotenv').config();

// Connection à la base de donnée
exports.connection = mysql.createPool({
    host     : 'localhost', //DB_HOST
    user     : 'root', //DB_USER
    password : 'aurelien95370', //DB_PW
    database : 'GroupomaniaDB', //DB_DATABASE
    port     : 3306
});