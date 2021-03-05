// Importation des modules
const mysql = require('mysql');

// Module qui permet de stocker des informations sensibles séparément du code
require('dotenv').config();

// Connection à la base de donnée
exports.connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'aurelien95370',
    database : 'GroupomaniaDB',
    port     : 3306
});