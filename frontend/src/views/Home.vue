<template>
  <div class="home">
    <GroupomaniaPresentation/>
    <LoginForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import GroupomaniaPresentation from '../components/GroupomaniaPresentation.vue'
import LoginForm from '../components/LoginForm.vue'

export default {
  name: 'Home',
  components: {
    GroupomaniaPresentation,
    LoginForm
  }
}
</script>

<style>
.home{
  display: flex;
  width:100%;
}
</style>
