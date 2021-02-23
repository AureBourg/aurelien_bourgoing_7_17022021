<template>
  <div class="home">
    <GroupomaniaPresentation/>
    <SignUpForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import GroupomaniaPresentation from '../components/GroupomaniaPresentation.vue'
import SignUpForm from '../components/SignUpForm.vue'

export default {
  name: 'Home',
  components: {
    GroupomaniaPresentation,
    SignUpForm
  }
}
</script>

<style>
.home{
  display: flex;
  width:100%;
}
</style>
