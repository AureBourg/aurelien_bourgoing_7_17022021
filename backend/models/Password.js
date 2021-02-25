const passwordValidator = require('password-validator');

const passwordSchema = new passwordValidator();

// Contraintes du mot de passe
passwordSchema
.is().min(8)                                    // Doit avoir au moins 8 caractères
.has().uppercase()                              // Doit avoir au moins une majuscule
.has().lowercase()                              // Doit avoir au moins une minuscule
.has().digits()                                 // Doit avoir au moins un chiffre
.is().not().oneOf(['12345678', 'password123']);    // Ne doit pas correspondre à ces valeurs courantes et faciles à déceler 

module.exports = passwordSchema;