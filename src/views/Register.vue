<template>
  <div class="register">
    <img alt="Groupomania Logo" src="../assets/icon-left-font-monochrome-black.png" width="300px" height="auto">
    <RegisterForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterForm from '../components/RegisterForm.vue'

export default {
  name: 'Register',
  components: {
    RegisterForm
  }
}
</script>

<style>
.register{
  display: flex;
  width:100%;
}
</style>