<template>
    <button v-on:click='GoToRegister()'>S'inscrire</button>
</template>

<script>

export default {
  name: "GoToRegister",
  methods: {
    GoToRegister () {
      this.$router.push("registerUser")
    }
  }
}
</script>

<style scoped lang="scss">
button{
    font-size: 1.2em;
    color: white;
    background-color:rgb(66,183,42);
    border-radius: 15px;
    width: 200px;
    padding: 10px;
    text-align: center;
    border: rgb(255,215,215);
    margin-right: auto;
    margin-left: auto;
    margin-top: 50px
}
</style>