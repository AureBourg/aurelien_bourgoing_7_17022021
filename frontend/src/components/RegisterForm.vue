<template>
  <div class="form">
    <input class="username" type="text" id="firstname" name="firstname" placeholder="Prénom" required>
    <input class="username" type="text" id="lastname" name="lastname" placeholder="Nom" required>
    <input type="password" id="password" name="password" placeholder="Mot de passe" required>
    <input type="text" id="mail" name="mail" placeholder="Adresse mail" required>
    <button class="SignUpButton" v-on:click='GoToFeed()'>Créer un compte</button>
  </div>
</template>

<script>
export default {
  name: "CreateAccount",
  methods: {
    GoToFeed () {
      this.$router.push("userFeed")
    }
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

