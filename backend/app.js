// Importation des modules
const express = require('express');
//const bodyParser = require('body-parser');
const path = require('path');

// Importation des modules de sécurité
//const helmet
//const coookie session
//const expresssanitizer

// Déclaration des routes
const articlesRoutes = require('./routes/articles');
const userRoutes = require('./routes/user');

// Création d'une application express
const app = express();

// Module qui permet de stocker des informations sensibles séparément du code
require('dotenv').config();

// Middleware Header pour éviter les erreurs CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// Middleware qui permet de sécurisé l'utilisation des cookies
/* const expiryDate = new Date( Date.now() + 60 * 60 * 1000 );
app.use(session({
  name: 'sessionId',
  secret: process.env.SESS_SECRET,
  cookie: {
    secure: true,
    httpOnly: true,
    domain: 'http://localhost:3000',
    expires: expiryDate
  }
}));*/

// Middleware qui permet de parser les requêtes envoyées par le client, on peut y accéder grâce à req.body
app.use(express.urlencoded({ extended: true }));

// Module qui permet de protéger l'application de certaines des vulnérabilités bien connues du Web en configurant de manière appropriée des en-têtes HTTP.
//app.use(helmet());

// Utilisation de bodyParser pour transforme les données arrivant de la requête POST en objet JSON
app.use(express.json());

// Middleware qui protège contre les failles XSS
//app.use(expresssanitizer());

// Midleware pour charger les fichiers qui sont dans le dossier 'images'
app.use('/images/', express.static(path.join(__dirname, 'images')));

// Middlewares pour transmettre les requêtes vers les routes correspondantes
app.use('/api/articles', articlesRoutes);
app.use('/api/user', userRoutes);

// Exportation de l'application
module.exports = app;