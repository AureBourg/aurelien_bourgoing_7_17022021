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
router.post("/signup", userCtrl.signup); //validatePassword
router.post("/login", userCtrl.login);
router.delete("/deleteUser", auth, userCtrl.deleteUser);
router.get("/:id/userProfil", auth, userCtrl.displayProfil);
//router.get("/role", userCtrl.role);
router.put("/updateUser", auth, multer, userCtrl.updateUser);

// Exportation du router
module.exports = router;