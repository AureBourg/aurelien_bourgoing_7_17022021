<template>
  <div class="userProfile">
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
        <div class="updateProfilePhoto col-7">
            <span>Modifier ma photo de profil</span>
            <input type="file" accept="image/*" v-on:change="updatePhotoProfil($event)"/>
        </div>
        <div class="updateProfileInfos col-7">
            <span>Modifier mon profil</span>
            <input v-model="user.email" class="email" type="text" id="email" name="email" placeholder="Adresse mail"/>
            <textarea v-model="user.bio" class="bio" type="text" id="bio" name="bio" placeholder="Décrivez vous ici"/>
        </div>
        <div class="updatePassword col-7">
            <span>Modifier mon mot de passe</span>
            <input v-model="user.newPassword" type="password" id="newPassword" placeholder="Nouveau mot de passe"/>
        </div>
        <div class="confirmUpdate">
            <button v-on:click.prevent="updateUser()">Confirmer les modifications</button>
            <input v-model="user.password" type="password" id="password" placeholder="Veuillez renseigner votre mot de passe pour confirmer les modifications"/>
        </div>
    </div>

    <div class="delete col-7">
      <button v-on:click="showDeleteConfirm()">Supprimer le compte</button>
    </div>
    <div id="confirmDelete" class="confirmDelete col-md-6 col-12">
        <div class="confirmDeleteInfos">
            <span v-on:click="hideDeleteConfirm()" class="annulDelete">Annuler <i class="fas fa-times"></i></span>
            <span>Suppression de compte</span>
            <span>Attention cette action est irrévocable</span>
        </div>
        <div>
            <form>
                <input v-model="user.password" type="password" placeholder="Mot de passe" id="passwordDelete"/>
                <button type="submit" v-on:click="deleteUser()">Supprimer le compte</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'userProfile',
  data: () => {
    return {
      user: {},
      componentType: null
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
      updatePhotoProfil(event) {
      
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append("image", image);

        this.$axios({
            method: 'put',
            url: `http://localhost:3000/api/user/${this.$route.params.id}/updateUser`,
            data: formData
          })
          .then(() => {
            this.getUser();
          })
          .catch((e) => {
            console.log(e);
          });
      },
      updateUser(){

        const email = this.user.email;
        const bio = this.user.bio;
        const password = this.user.password;
        const newPassword = this.user.newPassword;

        let data;

        if (newPassword === "") {
          data = {
            email: email,
            bio: bio,
            password: password,
          };
        } else {
          data = {
            email: email,
            bio: bio,
            password: password,
            newPassword: newPassword,
          };
        }

        this.$axios({
          method: 'put',
          url: `http://localhost:3000/api/user/${this.$route.params.id}/updateUser`,
          data: data
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
            } if (error.response.status === 401) {
              alert("Mot de passe invalide");
            }
        });
      },
      deleteUser(){
        const password = document.getElementById("passwordDelete").value;
        let data;
        data = {
            password: password
          };
        console.log(data);

        this.$axios({
          method: 'delete',
          url: `http://localhost:3000/api/user/${this.$route.params.id}/deleteUser`,
          data: data
        })
        .then(() => {
          console.log();
            sessionStorage.removeItem("token");
            delete this.$axios.defaults.headers.common["Authorization"];
            //this.$router.push({ name: "Home" });
        })
        .catch((error) => {
            if (error.status === 401) {
              alert("Mot de passe invalide");
          }
        });
      },
      showUpdateForm(){
        document.getElementById('updateProfile').style.display = 'block';
      },
      hideUpdateForm(){
        document.getElementById('updateProfile').style.display = 'none';
      },
      showDeleteConfirm(){
        document.getElementById('confirmDelete').style.display = 'block';
      },
      hideDeleteConfirm(){
        document.getElementById('confirmDelete').style.display = 'none';
      },
  },
  mounted() {
    this.hideUpdateForm();
    this.hideDeleteConfirm();
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
.updateProfilePhoto{
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
    flex-direction: column;
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
.confirmDelete{
    font-family: "Overpass";
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 150px;
    text-align: center;
    z-index: 9999;
    background-color: rgb(231,82,70);
    padding: 80px;
    border: solid 2px white;
    border-radius: 20px 
}
.confirmDeleteInfos{
    display: flex;
    flex-direction: column;
}
.annulDelete{
    position: relative;
    left: 275px;
    bottom: 68px;
    color: white;
    cursor: pointer;
    &:hover{
      color: lightgrey;
    }
}
</style>