<template>
  <div class="register">
    <GroupomaniaRegister/>
    <RegisterForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterForm from '../components/RegisterForm.vue'
import GroupomaniaRegister from '../components/GroupomaniaRegister.vue'

export default {
  name: 'Register',
  components: {
    RegisterForm,
    GroupomaniaRegister
  }
}
</script>

<style>
@font-face {
  font-family: "Overpass";
  src: url(../font/Overpass/Overpass-SemiBold.ttf);
}

.register{
  display: flex;
  width:100%;
}
</style>