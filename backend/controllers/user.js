// Importation des modules
const connection = require('../MySQLConnect').connection;
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const fs = require("fs");

// Module qui permet de stocker des informations sensibles séparément du code
require('dotenv').config();

// Middleware pour créer un nouvel utilisateur
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const email = req.body.email;
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const password = hash;

        let sql = 'INSERT INTO Users VALUES (NULL, ?, ?, ?, ?, NULL, NULL, NULL, NOW())';
        let values = [email, firstname, lastname, password];

        connection.query(sql, values, 
            function (err, result) {
                if (err) {
                    return res.status(500).json(err.message);
                }
                res.status(201).json({ message: "Utilisateur créé !" });
            }
        );
    })
    .catch(e => res.status(500).json({ e }));
};

// Middleware pour la connexion d'un utilisateur existant
exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    let sql = 'SELECT userId, password FROM Users WHERE email = ?';
    let values = [email];

    connection.query(sql, values, 
        function (error, result) {
            if (error) {
                return res.status(500).json(error.message);
            }
            if (result.length===0) {
                return res.status(401).json({ error: "L'utilisateur n'existe pas. Veuillez vous inscrire d'abord !" });
              }
        
            bcrypt.compare(password, result[0].password)
            .then(valid => {
                if (!valid) {
                return res.status(401).json({ error: 'Mot de passe incorrect !' });
                }
                res.status(200).json({
                    token: jwt.sign(
                        { userId: result.userId },
                        process.env.TOK_SECRET,
                        { expiresIn: '24h' }
                    )
                });
            })
            .catch(error => res.status(500).json({ error }));
        }
    );
};

// Middleware pour supprimer un utilisateur
exports.deleteUser = (req, res, next) => {
    const userId = res.locals.userId;
    const password = req.body.password;

    let sql = 'SELECT password, photoProfil FROM Users WHERE userId = ?';
    let values = [userId];

    connection.query(sql, values, 
        function (error, result) {
            if (error) {
                return res.status(500).json(error.message);
            }
            if (result.length===0) {
                return res.status(401).json({ error: "Utilisateur non trouvé" });
            }

            if (result[0].photoProfil != null){
                const filename = result[0].photoProfil.split('/images/')[1];

                fs.unlink(`images/${filename}`, (e) => {
                    if (e) {
                        console.log(e);
                    }
                });
            }

            bcrypt.compare(password, result[0].password)
            .then(valid => {
                if (!valid) {
                return res.status(401).json({ error: 'Mot de passe incorrect !' });
                }

                let sql = 'DELETE FROM Users WHERE userId = ?';
                let values = [userId];

                connection.query(sql, values, 
                    function (error, result) {
                        if (error) {
                            return res.status(500).json(error.message);
                        }
                        res.status(201).json({ message: "Utilisateur supprimé !" });
                    }
                );
            })
            .catch(error => res.status(500).json({ error }));
        }
    );
};

//Middleware pour modifier un utilisateur et le renvoyer dans la base de donnée
exports.updateUser = (req, res, next) => {
    const userId = res.locals.userId;
    const email = req.body.email;
    const bio = req.body.bio;
    const photoProfil = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;

    let sql = 'UPDATE Users SET photoProfil = ? WHERE userId = ?';
    let values = [photoProfil, userId];
    
    if (req.file) { // Modification de la photo de profil
        connection.query(sql, values ,
            function (error, result) {
                if (error) {
                    return res.status(500).json(error.message);
                }
                res.status(200).json({ message: "Photo de profil de l'utilisateur modifiée !" });
            }
        );
    } else {

        let sql = 'UPDATE Users SET email = ?, bio = ? WHERE userId = ?';
        let values = [email, bio, userId];

        connection.query(sql, values, 
            function (error, result) {
                if (error) {
                    return res.status(500).json(error.message);
                }
                res.status(200).json({ message: "Informations de l'utilisateur modifiées !" });
            }
        );
    }
};

//Middleware pour afficher le profil d'un utilisateur
exports.displayProfil = (req, res, next) => {
    const userId = req.params.id;

    let sql = 'SELECT firstname, lastname, email, bio, photoProfil FROM Users WHERE userId = ?';
    let values = [userId];

    connection.query(sql, values, 
        function (error, result) {
            if (error) {
                return res.status(500).json(error.message);
            }
            if (result.length===0) {
                return res.status(401).json({ error: "L'utilisateur n'existe pas." });
            }
            res.status(200).json(result);
        }
    );
};

exports.userRole = (req, res, next) => {
    const userId = res.locals.userId;

    let sql = 'SELECT role FROM Users WHERE userId = ?';
    let values = [userId];

    connection.query(sql, values, 
        function (err, result) {
            if (err) {
                return res.status(500).json(err.message);
            }
            if (result.length == 0) {
                return res.status(401).json({ error: "Utilisateur non trouvé !" });
            }
            return res.status(200).json(result);
        }
    );
};