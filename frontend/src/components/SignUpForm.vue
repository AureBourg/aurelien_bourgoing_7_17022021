<template>
  <div class="form">
    <form id="signupForm" name="signupForm">
        <div>
          <input v-model="firstname" class="username" type="text" id="firstname" name="firstname" placeholder="Prénom" required>
        </div>
        <div>
          <input v-model="lastname" class="username" type="text" id="lastname" name="lastname" placeholder="Nom" required>
        </div>
        <div>
          <input v-model="password" type="password" id="password" name="password" placeholder="Mot de passe" required>
        </div>
        <div>
          <input v-model="email" type="text" id="email" name="email" placeholder="Adresse mail" required>
        </div>
        <input v-on:click="sendData()" class="SignUpButton" type="button" value="Créer un compte">
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateAccount",
    data: () => {
    return {
      firstname: "",
      lastname: "",
      password: "",
      email: "",
    };
  },
  methods: {
    sendData() { // Envois des données au parent pour traiter l'envois à l'API
      const firstnameValid = document.getElementById("firstname").checkValidity();
      const lastnameValid = document.getElementById("lastname").checkValidity();
      const passwordValid = document.getElementById("password").checkValidity();
      const emailValid = document.getElementById("email").checkValidity();
      if (firstnameValid && lastnameValid && passwordValid && emailValid) {
        this.$emit("data-sent", this.$data);
      }
      console.log(this.$data)
    },
  }
}
</script>

<style scoped lang="scss">

@font-face {
  font-family: "Overpass";
  src: url(../font/Overpass/Overpass-SemiBold.ttf);
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
.SignUpButton{
    font-size: 1.2em;
    color: white;
    background-color:rgb(66,183,42);
    border-radius: 25px;
    width: 200px;
    padding: 15px;
    text-align: center;
    border: rgb(255,215,215);
    margin-right: auto;
    margin-left: auto;
    margin-top: 50px;
    cursor: pointer;
}
p{
    font-size: 0.8em;
    color: black;
}
</style>

