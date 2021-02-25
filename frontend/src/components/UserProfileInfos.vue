<template>
    <div class="profileInfos">
      <router-link to="/userfeed">
        <div class="backButton">
          <i class="fas fa-arrow-left"></i> <span>Retourner au menu</span>
        </div>
      </router-link>
      <img class="logoGroupo" alt="Groupomania logo" src="@/assets/icon-left-font-monochrome-black.svg">
      <div class="userPhoto"></div>
      <span>{{msg}}</span>
      <span>Inscrit depuis le 25/02/2020</span>
      <span>Bio</span>
      <span>Contact : mail@gmail.com</span>
      <button>Modifier les informations de mon profil</button>
    </div>
</template>

<script>
export default {
  name: "UserProfileInfos",
  props: {
    msg: {
      type: String
    }
  },
  data: function() {
    return {
      messageList: []
    };
  },
  watch: {
    msg: function() {
      this.messageList.push(this.msg);
    }
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "Overpass";
  src: url(../font/Overpass/Overpass-Regular.ttf);
}

.profileInfos{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Overpass";
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
</style>