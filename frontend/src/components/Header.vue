<template>
  <div class="header">
    <div class="headerLogo">
        <img class="logo" alt="Groupomania logo" src="@/assets/icon-left-font-monochrome-black.svg">
    </div>
    <div class="headerNav">
      <router-link :to="{ name: 'userProfile', params: {id: 'yourProfile' } }">
        <div class="userProfil">
          <div class="userPhoto"></div>
          <span>Mon profil</span>
        </div>
      </router-link>
      <router-link to="/">
        <span class="userLogout">Se déconnecter</span>
      </router-link>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
@font-face {
  font-family: "Overpass";
  src: url(../font/Overpass/Overpass-Regular.ttf);
}
.header{
  display: flex;
  border-bottom: lightgrey 1px solid;
  padding: 10px 40px 10px 0px;
  font-family: "Overpass";
  font-size: 0.93em;
}
.headerLogo{
  margin: auto;
  height: 40px;
}
.logo{
  height: 100%;
}
.headerNav{
  display: flex;
  position: absolute;
  right: 0px;
  top: 0px;
  align-items: center;
  justify-content: center;
  padding: 8px;
}
.userPhoto{
  width: 25px;
  height: 25px;
  border-radius: 20px;
  margin-right: 10px;
  background: url(../assets/background.png);
  background-size: cover;
}
.userProfil{
  display: flex;
  align-items: center;
  padding: 10px;
  border-right: solid 1px lightgrey;
  border-radius: 2px;
  cursor: pointer;
  &:hover{
        box-shadow: 0px 0px 4px lightgrey;
    }
  & span{
    text-decoration: none;
    color: black;
  }
}
.userLogout{
  padding: 15px;
  border-radius: 2px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  &:hover{
        box-shadow: 0px 0px 4px lightgrey;
    }
}
</style>