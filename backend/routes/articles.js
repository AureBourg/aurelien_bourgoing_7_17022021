// Importation des modules
const express = require('express');

//Création du router
const router = express.Router();

// Association avec le controller
const articlesCtrl = require('../controllers/articles');

// Ajout des middlewares auth et multer
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Création des différentes routes de l'API
router.get("/", articlesCtrl.getAllArticles); //auth, 
router.get("/:id", articlesCtrl.getOneArticle); //auth,
router.post("/", multer, articlesCtrl.createArticle); //auth,
router.delete("/:id", articlesCtrl.deleteArticle); //auth,
router.post("/:id/comment", articlesCtrl.createComment); //auth,
//router.post("/:id/likeDislike", auth, articlesCtrl.likeDislikeArticle);

// Exportation du router
module.exports = router;