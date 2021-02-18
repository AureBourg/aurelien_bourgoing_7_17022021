<template>
  <div class="groupo">
  <img class="logo" alt="Groupomania logo" src="@/assets/icon-left-font-monochrome-black.png" width="50%" height="auto">
  <p>Créez un compte pour pouvoir partager avec vos collègues !</p>
  </div>
</template>

<script>

</script>

<style>
@font-face {
  font-family: "Overpass";
  src: url(../font/Overpass/Overpass-SemiBold.ttf);
}

.groupo{
  display:flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
}
.logo{
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