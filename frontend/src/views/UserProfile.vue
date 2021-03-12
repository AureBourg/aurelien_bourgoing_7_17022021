<template>
  <div class="userProfile">
    <ConfirmDelete/>
    <div class="profileInfos">
      <router-link :to="{ name: 'userFeed', params: {id: this.$route.params.id } }">
        <div class="backButton">
          <i class="fas fa-arrow-left"></i> <span>Retourner à mon fil d'actualités</span>
        </div>
      </router-link>
      <img class="logoGroupo" alt="Groupomania logo" src="@/assets/icon-left-font-monochrome-black.svg">
      <img :src="user.photoProfil" class="userPhoto" alt="Photo de profil" />
      <div>{{ user.firstname }} {{ user.lastname }}</div>
      <span>Inscrit depuis le {{ user.dateCreation }}</span>
      <div>{{ user.bio }}</div>
      <span>Contact : {{ user.email }}</span>
      <div>{{ user.role }}</div>
      <button v-on:click="showUpdateForm()">Modifier les informations de mon profil</button>
    </div>

    <div id="updateProfile" class="updateProfile col-7">
        <div class="updateProfileInfos col-7">
            <span>Modifier mon profil</span>
            <input v-model="email" class="email" type="text" id="email" name="email" placeholder="Adresse mail"/>
            <textarea v-model="bio" class="bio" type="text" id="bio" name="bio" placeholder="Décrivez vous ici"/>
        </div>
        <div class="updatePassword col-7">
            <span>Modifier mon mot de passe</span>
            <input v-model="password" type="password" id="formerPassword" placeholder="Ancien mot de passe"/>
            <input v-model="newPassword" type="password" id="newPassword" placeholder="Nouveau mot de passe"/>
        </div>
        <div class="confirmUpdate">
            <button v-on:click="updateUser()">Confirmer les modifications</button>
        </div>
    </div>

    <div class="delete col-7">
      <button>Supprimer le compte</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ConfirmDelete from "@/components/ConfirmDelete";

export default {
  name: 'userProfile',
  components: {
    ConfirmDelete
  },
  data: () => {
    return {
      user: {},
      updates: {
        bio: "",
        email: "",
        password: "",
        newPassword: ""
      }
    }
  },
  methods: {
      getUser() {
        this.$axios({
          method: 'get',
          url: `http://localhost:3000/api/user/${this.$route.params.id}/profile`
        })
        .then((payload) => {
          this.user = payload.data[0];
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      updateUser(payload){
        const userUpdates = this.$data.updates;

        userUpdates.bio = payload.bio;
        userUpdates.email = payload.email;
        userUpdates.password = payload.password;
        userUpdates.newPpassword = payload.newPassword;

        this.$axios({
          method: 'put',
          url: `http://localhost:3000/api/user/${this.$route.params.id}/updateUser`,
          data: userUpdates
        })
        .then((response) => {
            if (response.status === 200) {
            alert("Modifications bien enregistrées !");
            this.$router.go();
          }
        })
        .catch((error) => {
            if (error.response.status === 500) {
              alert("Modifications impossibles : Erreur serveur");
            }
          });
      },
      showUpdateForm(){
        document.getElementById('updateProfile').style.display = 'block';
      },
      hideUpdateForm(){
        document.getElementById('updateProfile').style.display = 'none';
      }
  },
  mounted() {
    this.hideUpdateForm();
    this.getUser();
    document.title = "Mon profil | Groupomania";
  }
  
}
</script>

<style scoped lang="scss">
@font-face {
  font-family: "Overpass";
  src: url(../font/Overpass/Overpass-Regular.ttf);
}
.register{
  width:100%;
}
.userPhoto{
  width: 140px;
  height: 140px;
  border-radius: 70px;
}
.delete{
    display: flex;
    justify-content: center;
    border-top: solid 1px lightgrey;
    margin: auto;
    margin-top: 15px;
    font-family: "Overpass";
    & button{
      color: white;
      background-color: rgb(231,82,70);
      border-radius: 10px;
      border: none;
      padding: 10px;
      font-weight: bold;
      margin: 20px;
    }
}
.profileInfos{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Overpass";
  position: relative;
  z-index: 10;
  background: white;
  & button{
    color: white;
    background-color: rgb(32,78,138);
    border-radius: 20px;
    border: none;
    padding: 5px 20px 5px 20px;
    margin: 20px;
    }
  & span{
    margin: 12px;
  }
}
.logoGroupo{
  width: 30%;
  margin: 20px;
}
.userPhoto{
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 10px;
  background: url(../assets/background.png);
  background-size: cover;
}
.backButton{
  display: flex;
  align-items: center;
  position: absolute;
  left: 20px;
  top: 20px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  & span{
    margin-left: 10px;
  }
}
.updateProfile{
    margin: auto;
    font-family: "Overpass";
    justify-content: center;
    position: relative;
    z-index: 1;
    animation: fondu 900ms;
}
@keyframes fondu{
	0%{transform: translateY(-500px); opacity: 0}
	100%{transform: translateY(0px); opacity: 1}
}
.updateProfileInfos{
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-bottom: 20px;
    & span{
        text-align: center;
        border-bottom: solid 1px lightgrey;
    }
    & input{
        margin: 10px;
    }
    & textarea{
        margin: 10px;
    }
}
.updatePassword{
    display: flex;
    flex-direction: column;
    margin: auto;
    & span{
        text-align: center;
        border-bottom: solid 1px lightgrey;
    }
    & input{
        margin: 10px;
    }
}
.confirmUpdate{
    display: flex;
    justify-content: center;
    & button{
    color: white;
    background-color: rgb(32,78,138);
    border-radius: 15px;
    border: none;
    padding: 5px 20px 5px 20px;
    margin: 20px;
    }
}
</style>