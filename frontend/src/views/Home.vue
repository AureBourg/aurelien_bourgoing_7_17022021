<template>
  <div class="home">
    <Alert
      :alertType="alert.type"
      :alertMessage="alert.message"
    />
    <div class="groupo">
      <img class="logo" alt="Groupomania logo" src="@/assets/icon-left-font-monochrome-white.png" width="50%" height="auto">
      <p>Votre réseau social <br/>d'entreprise pour <br/>partager et <br/>rester en contact <br/>avec vos collègues !</p>
    </div>
    <LoginForm v-on:login-form="login"/>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';
import Alert from "@/components/Alert.vue";

export default {
  name: 'Home',
  components: {
    LoginForm,
    Alert
  },
  data: () => {
    return {
      email: "",
      password: "",
      alert:{
        type:"",
        message:""
      }
    };
  },
  
  methods: {
    login(payload){
      this.email = payload.email;
      this.password = payload.password;

      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/user/login',
        data: this.$data
      })
      .then((response) => {
          sessionStorage.setItem("token", response.data.token);
          this.$axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
          this.$router.push("/userfeed");
      })
      .catch((error) => {
        if (error.response.status === 500) {
          this.alertActive("info", error.response.data.error);
        }
        if (error.response.status === 401) {
          this.alertActive("warning", error.response.data.error);
        }
        sessionStorage.removeItem("token");
      });
    },
    alertActive(type, message) {
      document.getElementById('alert').style.display = 'flex';

      const dataAlert = this.$data.alert;
      dataAlert.type = type;
      dataAlert.message = message;

      setTimeout(function () {
        document.getElementById('alert').style.display = 'none';
        dataAlert.type = "";
        dataAlert.message = "";
      }, 2000);
    }   
  },
  mounted() {
    sessionStorage.removeItem("token");
    delete this.$axios.defaults.headers.common["Authorization"];
    document.title = "Connexion | Groupomania";
  }
}
</script>

<style scoped lang="scss">
@font-face {
  font-family: "Overpass";
  src: url(../font/Overpass/Overpass-SemiBold.ttf);
}
.home{
  display: flex;
  width:100%;
}
.groupo{
  display:flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  background-image: url(../assets/back.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.logo{
  margin: auto;
  width: 100%;
  box-sizing: border-box;
  background-color: rgba(9,31,67,0.7);
  padding-right: 150px;
  padding-left: 150px;
}
p{
  font-family: "Overpass";
  font-size: 2.5em;
  text-align: left;
  color: white;
  padding-left: 25%;
  position: relative;
  bottom: 140px;
}
</style>
