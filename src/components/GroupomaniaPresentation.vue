<template>
  <div class="groupo">
  <img class="logo" alt="Groupomania logo" src="@/assets/icon-left-font-monochrome-white.png" width="50%" height="auto">
  <p>Votre réseau social <br/>d'entreprise pour <br/>partager et <br/>rester en contact <br/>avec vos collègues !</p>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@font-face {
  font-family: "Overpass";
  src: url(../font/Overpass/Overpass-SemiBold.ttf);
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
