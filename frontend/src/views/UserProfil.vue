<template>
  <div class="userProfile">
    <div class="profileInfos">       
        <div class="backButton" @click="$router.go(-1)">
          <i class="fas fa-arrow-left"></i> <span>Retourner à mon fil d'actualités</span>
        </div>       
        <img class="logoGroupo" alt="Groupomania logo" src="@/assets/icon-left-font-monochrome-black.svg">
        <img :src="user.photoProfil" id="userPhoto" class="userPhoto" alt="Photo de profil" />
        <div class="userName">{{ user.firstname }} {{ user.lastname }}</div>
        <div>{{ user.role }}</div>
        <div class="userBio">{{ user.bio }}</div>
        <span>Contact : {{ user.email }}</span>
        <span class="userDateCreation">Inscrit depuis le {{ user.dateCreation }}</span>
    </div>  
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'userProfil',
  data: () => {
    return {
      user: {}
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
          if (this.user.role=="Administrateur"){
            document.getElementById('userPhoto').style.border="solid 2px yellow";
          } 
        })
        .catch(function (error) {
          console.log(error);
        });
      }
  },
  mounted() {
    this.getUser();
    document.title = "Profil de l'utilisateur | Groupomania";
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
  width: 200px;
  height: 200px;
  border-radius: 100px;
}
.userName{
  margin: 10px;
  font-weight: bold;
}
.userBio{
  margin: 10px;
  padding: 10px;
  border-top: lightgrey solid 1px;
  border-bottom: lightgrey solid 1px;
  max-width: 400px;
  text-align: center;
}
.userDateCreation{
  color: grey;
  font-size : 0.8em;
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
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    top: 150px;
    z-index: 9999;
    text-align: center;
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
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: -70px;
    margin-right: -70px;
    color: white;
    cursor: pointer;
    & span{
      margin-right: 10px;
    }
    &:hover{
      color: lightgrey;
    }
}
</style>