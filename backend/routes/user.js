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
router.delete("/deleteUser", userCtrl.deleteUser); //auth, 
router.get("/:id/userProfil", userCtrl.displayProfil); //auth, 
router.put("/updateUser", multer, userCtrl.updateUser); //auth, 
router.get("/userRole", userCtrl.userRole); //auth, 

// Exportation du router
module.exports = router;