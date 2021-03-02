// Importation des modules
const mysql = require('../MySQLConnect').connection;
const fs = require("fs");

//Route GET pour afficher tous les articles de la base de donnée
exports.getAllArticles = (req, res, next) => {
    mysql.query({
        sql: 'SELECT * FROM articles',
        values: []
        }, function (error, result) {
            if (error) {
                return res.status(500).json(error.message);
            }
            if (result.length == 0) {
                return res.status(400).json({ message: "Aucun article à afficher !" });
            }
            res.status(200).json(result);
    });
};

// Middleware pour créer les articles
exports.createArticle = (req, res, next) => {
    const id = res.locals.id;
    const articlebody = req.body.body;
    const mediaUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
    mysql.query({
        sql: 'INSERT INTO articles VALUES (NULL, ?, ?, ?, NULL, NULL, NOW())',
        values: [id, articlebody, mediaUrl]
        }, function (error, result) {
            if (error) {
                return res.status(500).json(error.message);
            }
            res.status(201).json({ message: "Article crée !" });
    });
};

// Middleware pour supprimer un article
exports.deleteArticle = (req, res, next) => {
    const id = res.locals.id;
    const articleId = req.params.id;

    mysql.query({
        sql: 'SELECT mediaUrl FROM articles WHERE articleId = ?',
        values: [articleId]
        }, function (error, result) {
            if (result > 0) {
                const filename = result[0].gifUrl.split("/images/")[1];
                fs.unlink(`images/${filename}`, () => {
                    mysql.query({
                        sql: 'DELETE FROM articles WHERE id=? AND articleId=?',
                        values: [id, articleId]
                        }, function (error, result) {
                            if (error) {
                                return res.status(500).json(error.message);
                            }
                            res.status(200).json({ message: "Post supprimé !" });
                        }
                    );
                });               
            } else {
                mysql.query({
                    sql: 'DELETE FROM articles WHERE id=? AND articleId=?',
                    values: [id, articleId]
                    }, function (error, result) {
                        if (error) {
                            return res.status(500).json(error.message);
                        }
                        res.status(200).json({ message: "Post supprimé !" });
                });
            }
            if (error) {
                return res.status(500).json(error.message);
            }
    });
};

// Middleware pour créer un commentaire
exports.createComment = (req, res, next) => {
    const articleId = req.params.articleId;
    const id = res.locals.id;
    const commentbody = req.body.commentbody;
    const commentId = req.body.commentbody;
    mysql.query({
        sql: 'INSERT INTO articles VALUES (?, ?, NULL, NULL, ?, ?, NOW())',
        values: [articleId, id, commentId, commentbody]
        }, function (error, result) {
            if (error) {
                return res.status(500).json(error.message);
            }
            res.status(201).json({ message: "Article crée !" });
    });
};

// Middleware pour liker ou disliker les articles
exports.likeDislikeArticle = (req, res, next) => {
    const id = res.locals.userID;
    const likedislike = req.body.reaction;
    const articleId = req.params.id;
    mysql.query({
        sql: 'INSERT INTO likedislike VALUES (?, ?, ?, NOW())',
        values: [articleId, id, likedislike]
        }, function (error, result) {
            if (error) {
                return res.status(500).json(error.message);
            }
            res.status(201).json({ message: "Like ou dislike ajouté !" });
    });
};