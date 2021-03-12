<template>
  <div class="register">
    <div class="groupo">
      <img class="logoGroupo" alt="Groupomania logo" src="@/assets/icon-left-font.png" width="50%" height="auto">
      <p>Créez un compte pour pouvoir partager avec vos collègues !</p>
    </div>
    <SignupForm v-on:signup-form="signup"/>
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
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    };
  },
  methods: {
    signup(payload){
      this.firstname = payload.firstname;
      this.lastname = payload.lastname;
      this.email = payload.email;
      this.password = payload.password;

      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/user/signup',
        data: this.$data
      })
      .then(() => {
          this.$axios({
            method: 'post',
            url: 'http://localhost:3000/api/user/login',
            data: this.$data
          })
          .then((response) => {
              console.log(response);

              sessionStorage.setItem("token", response.data.token);
              this.$axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;

              this.$router.push("/userfeed/" + response.data.userId);
          })
          .catch((error) => {
              if (error.response.status === 500) {
                alert("Connexion impossible : Erreur serveur");
              }
          });
      })
      .catch((error) => {
          if (error.response.status === 500) {
            alert("Inscription impossible : Erreur serveur");
          }
          sessionStorage.removeItem("token");
      });
    }    
  },
  mounted() {
    document.title = "Inscription | Groupomania";
  }
}
</script>

<style scoped lang="scss">
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