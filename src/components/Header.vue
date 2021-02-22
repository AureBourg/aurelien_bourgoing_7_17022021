<template>
  <div class="header">
    <div class="headerLogo">
        <img class="logo" alt="Groupomania logo" src="@/assets/icon-left-font-monochrome-black.svg">
    </div>
    <div class="cardUserNav">
      <div class="userPhoto">
      </div>
      <i class="fas fa-sort-down"></i>
    </div>
    <UserNav/>
  </div>
</template>

<script>
import UserNav from "@/components/UserNav";

export default {
  name: "Header",
  components: {
    UserNav
  }
};
</script>

<style lang="scss">
.header{
  display: flex;
  border-bottom: lightgrey 1px solid;
  padding: 10px 40px 15px 0px;
}
.headerLogo{
  margin: auto;
  height: 40px;
  justify-content: center;
}
.logo{
  margin: auto;
  height: 100%;
}
.userPhoto{
  width: 35px;
  height: 35px;
  border-radius: 20px;
  justify-content: end;
  align-items: center;
  margin-right: 10px;
  background: url(../assets/background.png);
  background-size: cover;
}
.cardUserNav{
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>