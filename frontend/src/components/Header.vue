<template>
  <div class="header">
    <div class="headerBack">
      <slot name="back"></slot>
    </div>
    <div class="headerLogo">
        <img class="logo" alt="Groupomania logo" src="@/assets/icon-left-font-monochrome-black.svg">
    </div>
    <div class="headerNav d-none d-lg-flex">
      <router-link :to="{ name: 'userConnectedProfil'}">
        <div class="userProfil">
          <slot name="photoProfil"></slot>
          <slot name="username"></slot>
        </div>
      </router-link>
      <router-link to="/">
        <span class="userLogout">Se déconnecter</span>
      </router-link>
    </div>
    <b-navbar-nav class="ml-auto d-lg-none btn-lg" right>
      <b-nav-item-dropdown right>
          <template slot="button-content">
            <i class="fas fa-bars"></i>
          </template>
          <b-dropdown-item>
            <router-link :to="{ name: 'userConnectedProfil'}">
              <div class="userProfil">
                <slot name="photoProfil"></slot>
                <slot name="username"></slot>
              </div>
            </router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/">
              <span class="userLogout">Se déconnecter</span>
            </router-link>
          </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["idUserConnected"],
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
  padding: 10px 10px 10px 0px;
  font-family: "Overpass";
  font-size: 0.93em;
}
.headerBack{
  display: flex;
  position: absolute;
  left: 10px;
  top: 7px;
  font-size: 3em;
  margin-left: 10px;
  text-decoration: none;
  color: grey;
  cursor: pointer;
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
  & a{
    text-decoration: none;
    color: black;
  }
}
.userProfil{
  display: flex;
  align-items: center;
  padding: 10px;
  border-right: solid 1px lightgrey;
  border-radius: 2px;
  color: black;
  cursor: pointer;
  &:hover{
    box-shadow: 0px 0px 4px lightgrey;
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