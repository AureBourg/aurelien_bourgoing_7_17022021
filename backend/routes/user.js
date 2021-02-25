// Importation des modules
const express = require('express');

//Création du router
const router = express.Router();

// Association avec le controller
const userCtrl = require('../controllers/user');

// Ajout des middlewares auth et multer
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

//Ajout du format de mot de passe attendu
const validatePassword = require('../middleware/validatePassword');

// Création des différentes routes de l'API
router.post("/signup", validatePassword, userCtrl.signup);
router.post("/login", userCtrl.login);
router.delete("/delete", auth, userCtrl.delete);
router.get("/:id/profile", auth, userCtrl.profile);
router.get("/role", userCtrl.role);
router.put("/modify", auth, multer, userCtrl.modify);

// Exportation du router
module.exports = router;