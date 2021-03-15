<template>
  <div class="form">
    <form id="loginForm" name="loginForm">
      <div>
        <input v-model="email" type="text" id="email" name="email" placeholder="Adresse mail" required>
      </div>
      <div>
        <input v-model="password" type="password" id="password" name="password" placeholder="Mot de passe" required>
      </div>
      <input v-on:click="sendDataLogin()" class="LoginButton" type="button" value="Connexion">
    </form>

    <a href="">Mot de passe oublié ?</a>

    <router-link to="/signup" class="SignUpButton">S'inscrire</router-link>
  </div>
</template>

<script>

export default {
  name: "GoToRegister",
  data: () => {
    return {
      password: "",
      email: ""
    };
  },
  methods: {
    sendDataLogin() { // Envois des données au parent pour traiter l'envois à l'API
      const emailValid = document.getElementById("email").checkValidity();
      const passwordValid = document.getElementById("password").checkValidity();

      if (emailValid && passwordValid) {
        this.$emit("login-form", this.$data);
      } else {
        alert("Vérifiez les informations que vous avez renseigné");
      }
    }
  }
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
    padding: 10px;
    text-align: center;
    line-height: normal;
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
    text-decoration: none;
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