<template>
  <div class="home">
    <GroupomaniaSocial/>
    <SignUpForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import GroupomaniaSocial from '../components/GroupomaniaSocial.vue'
import SignUpForm from '../components/SignUpForm.vue'

export default {
  name: 'Home',
  components: {
    GroupomaniaSocial,
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
