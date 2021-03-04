<template>
  <div class="form">
    <input type="text" id="name" name="name" placeholder="Adresse mail" required>
    <input type="password" id="password" name="password" placeholder="Mot de passe" required>
    <button class="LoginButton"><router-link to="/userfeed">Connexion</router-link></button>
    <a href="">Mot de passe oublié ?</a>
    <button class="SignUpButton"><router-link to="/signup">S'inscrire</router-link></button>
  </div>
</template>

<script>

export default {
  name: "GoToRegister"
}
</script>

<style scoped lang="scss">

@font-face {
  font-family: "Overpass";
  src: url(../font/Overpass/Overpass-SemiBold.ttf);
}
@font-face {
  font-family: "Overpass-Light";
  src: url(../font/Overpass/Overpass-Light.ttf);
}
.form{
    font-family: "Overpass";
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width:50%;
    margin: auto;
}
input{
    font-size: 1.1em;
    margin-bottom: 20px;
    height: 40px;
    border-radius: 4px;
    width: 50%;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
}
.LoginButton{
    font-size: 1.1em;
    color: white;
    background-color:rgb(9,31,67);
    border-radius: 20px;
    width: 150px;
    padding: 10px;
    text-align: center;
    border: rgb(255,215,215);
    margin: auto;
    cursor: pointer;
}
.SignUpButton{
    font-size: 1.2em;
    color: white;
    background-color:rgb(66,183,42);
    border-radius: 12px;
    width: 200px;
    padding: 10px;
    text-align: center;
    border: rgb(255,215,215);
    margin-right: auto;
    margin-left: auto;
    margin-top: 50px;
    cursor: pointer;
}
a{
    font-family: "Overpass-Light";
    font-size: 0.8em;
    color: black;
    margin-top: 10px;
}
</style>