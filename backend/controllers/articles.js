// Importation des modules
const connection = require('../MySQLConnect').connection;
const fs = require("fs");

//Middleware pour afficher tous les articles de la base de donnée
exports.getAllArticles = (req, res, next) => {

    let sql = 'SELECT * FROM Articles LEFT JOIN Users ON articles.userId = users.userId';
    let values = [];

    connection.query(sql, values, 
        function (error, result) {
            if (error) {
                return res.status(500).json(error.message);
            }
            if (result.length == 0) {
                return res.status(400).json({ message: "Aucun article à afficher !" });
            }
            res.status(200).json(result);
        }
    );
};

//Middleware pour afficher un article
exports.getOneArticle = (req, res, next) => {

    const articleId = req.params.id;

    let sql = 'SELECT userId, text, mediaUrl, dateCreation FROM Articles WHERE articleId = ? ';
    let values = [articleId];

    connection.query(sql, values, 
        function (err, result) {
            if (err) {
                return res.status(500).json(err.message);
            }
            res.status(200).json(result);
        }
    );
};

// Middleware pour créer les articles
exports.createArticle = (req, res, next) => {

    const userId = res.locals.userId;
    const text = req.body.text;
    const mediaUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
    console.log(req.params.id);

    let sql = 'INSERT INTO Articles VALUES (NULL, ?, ?, ?, NOW())';
    let values = [userId, text, mediaUrl];

    connection.query(sql, values,
        function (error, result) {
            if (error) {
                return res.status(500).json(error.message);
            }
            res.status(201).json({ message: "Article crée !"});
        }
    );
};


// Middleware pour supprimer un article
exports.deleteArticle = (req, res, next) => {

    const userId = res.locals.userId;
    const articleId = req.params.id;

    let sql = 'SELECT mediaUrl FROM Articles WHERE articleId = ?';
    let values = [articleId];

    connection.query(sql, values, 
        function (error, result) {
            if (result > 0) {

                const filename = result.mediaUrl.split("/images/")[1];

                fs.unlink(`images/${filename}`, () => {

                    let sql = 'DELETE FROM Articles WHERE userId = ? AND articleId = ?';
                    let values = [userId, articleId];

                    connection.query(sql, values, 
                        function (error, result) {
                            if (error) {
                                return res.status(500).json(error.message);
                            }
                            res.status(200).json({ message: "Article supprimé !" });
                        }
                    );
                });               
            } else {

                let sql = 'DELETE FROM Articles WHERE userId = ? AND articleId = ?';
                let values = [userId, articleId];

                connection.query(sql, values, 
                    function (error, result) {
                        if (error) {
                            return res.status(500).json(error.message);
                        }
                        res.status(200).json({ message: "Article supprimé !" });
                    }
                );

                let sql2 = 'DELETE FROM Comments WHERE userId = ? AND articleId = ?';
                let values2 = [userId, articleId];

                connection.query(sql2, values2, 
                    function (error, result) {
                        if (error) {
                            return res.status(500).json(error.message);
                        }
                        res.status(200).json({ message: "Article et Commentaires supprimés !" });
                    }
                );
            }
            if (error) {
                return res.status(500).json(error.message);
            }
        }
    );
};

// Middleware pour créer un commentaire
exports.createComment = (req, res, next) => {

    const articleId = req.params.id;
    const userId = res.locals.userId;
    const text = req.body.text;

    let sql = 'INSERT INTO Comments VALUES (NULL, ?, ?, ?, NOW())';
    let values = [userId, articleId, text];

    connection.query(sql, values, 
        function (error, result) {
            if (error) {
                return res.status(500).json(error.message);
            }
            res.status(201).json({ message: "Commentaire crée !" });
        }
    );
};
/*
// Middleware pour liker ou disliker les articles
exports.likeDislikeArticle = (req, res, next) => {
    const userId = res.locals.userId;
    const like = req.body.like;
    const articleId = req.params.id;
    mysql.query({
        sql: 'INSERT INTO Likes VALUES (?, ?, ?, NOW())',
        values: [userId, articleId, like]
        }, function (error, result) {
            if (error) {
                return res.status(500).json(error.message);
            }
            res.status(201).json({ message: "Like ou dislike ajouté !" });
    });
};*/