// Importation des modules
const mysql = require('../MySQLConnect').connection;
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
        mysql.query({
            sql: 'INSERT INTO user VALUES (NULL, ?, ?, ?, ?, NULL, NULL, NOW())',
            values: [email, password, firstname, lastname]
            }, function (error, result) {
                if (error) {
                    return res.status(500).json(error.message);
                }
                res.status(201).json({ message: "Utilisateur créé !" });
        });
    })
    .catch(error => res.status(500).json({ error }));
};

// Middleware pour la connexion d'un utilisateur existant
exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    mysql.query({
        sql: 'SELECT id, password FROM user WHERE email = ?',
        values: [email]
        }, function (error, result) {
            if (error) {
                return res.status(500).json(error.message);
            }
            if (result.length===0) {
                return res.status(401).json({ error: "L'utilisateur n'existe pas. Veuillez vous inscrire d'abord !" });
              }
    });
    bcrypt.compare(password, result.password)
    .then(valid => {
        if (!valid) {
        return res.status(401).json({ error: 'Mot de passe incorrect !' });
        }
        res.status(200).json({
            token: jwt.sign(
                { id: result.id },
                process.env.TOK_SECRET,
                { expiresIn: '24h' }
            )
        });
    })
    .catch(error => res.status(500).json({ error }));
};

// Middleware pour supprimer un utilisateur
exports.deleteUser = (req, res, next) => {
    const id = res.locals.id;
    const password = req.body.password;
    mysql.query({
        sql: 'SELECT password, photo_profile FROM user WHERE id = ?',
        values: [id]
        }, function (error, result) {
            if (error) {
                return res.status(500).json(error.message);
            }
            if (result.length===0) {
                return res.status(401).json({ error: "Utilisateur non trouvé" });
            }

        const filename = result.photo_profile.split('/images/')[1];
        fs.unlink(`images/${filename}`, (e) => {
            if (e) {
                console.log(e);
            }
        });

        bcrypt.compare(password, result.password)
        .then(valid => {
            if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            mysql.query({
                sql: 'DELETE FROM user WHERE id=?',
                values: [id]
                }, function (error, result) {
                    if (error) {
                        return res.status(500).json(error.message);
                    }
                res.status(201).json({ message: "Utilisateur supprimé !" });
            });
        })
        .catch(error => res.status(500).json({ error }));
    });
};

//Middleware pour modifier un utilisateur et le renvoyer dans la base de donnée
exports.updateUser = (req, res, next) => {
    const id = res.locals.id;
    const email = req.body.email;
    const bio = req.body.bio;
    const photo_profile = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
    
    if (req.file) { //Modification de la photo de profil
        mysql.query({
            sql: 'UPDATE user SET photo_profile = ? WHERE id = ?',
            values: [id, photo_profile]
            }, function (error, result) {
                if (error) {
                    return res.status(500).json(error.message);
                }
            res.status(200).json({ message: "Photo de profil de l'utilisateur modifiée !" });
        });
    } else {
        mysql.query({ //Modification des informations utilisateurs
            sql: 'UPDATE user SET email = ?, bio = ? WHERE id = ?',
            values: [email, bio, id]
            }, function (error, result) {
                if (error) {
                    return res.status(500).json(error.message);
                }
            res.status(200).json({ message: "Informations de l'utilisateur modifiées !" });
        });
    }
};

//Middleware pour afficher le profil d'un utilisateur
exports.displayProfil = (req, res, next) => {
    const id = req.params.id;
    const email = req.body.email;
    const firstname = req.body.firstName;
    const lastname = req.body.lastName;
    const bio = req.body.bio;
    mysql.query({
        sql: 'SELECT firstname, lastname, email, bio FROM user WHERE id = ?',
        values: [id, email, firstname, lastname, bio]
        }, function (error, result) {
            if (error) {
                return res.status(500).json(error.message);
            }
            if (result.length===0) {
                return res.status(401).json({ error: "L'utilisateur n'existe pas." });
            }
            res.status(200).json(result);
    });
};