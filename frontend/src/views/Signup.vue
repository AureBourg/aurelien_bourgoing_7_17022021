<template>
  <div class="register">
    <div class="groupo">
      <img class="logoGroupo" alt="Groupomania logo" src="@/assets/icon-left-font.png" width="50%" height="auto">
      <p>Créez un compte pour pouvoir partager avec vos collègues !</p>
    </div>
    <SignupForm v-on:data-sent="signup"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignupForm from '../components/SignupForm.vue'

export default {
  name: 'Signup',
  components: {
    SignupForm
  },
  data: () => {
    return {
      email: "fgnn",
      password: "nfdngfd",
      firstname: "ndfngfgdn",
      lastname: "nfgfn",
    };
  },
  methods: {
    signup(){
      this.$axios({
        method: 'post',
        url: 'user/signup',
        data: this.$data
      })
      .then(function (response) {
          //On traite la suite une fois la réponse obtenue 
          console.log(response);
          //this.$router.push("userFeed")
      })
      .catch(function (error) {
          //On traite ici les erreurs éventuellement survenues
          console.log(error);
      });
    }    
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "Overpass";
  src: url(../font/Overpass/Overpass-SemiBold.ttf);
}
.register{
  display: flex;
  width:100%;
}
.groupo{
  display:flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
}
.logoGroupo{
  margin: auto;
  width: 100%;
  box-sizing: border-box;
  padding-right: 150px;
  padding-left: 150px;
}
p{
  font-family: "Overpass";
  font-size: 1.5em;
  text-align: center;
  color: black;
  padding: 25px;
  position: relative;
  bottom: 90px;
}
</style>