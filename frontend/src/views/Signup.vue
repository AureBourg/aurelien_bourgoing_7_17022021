<template>
  <div class="register">
    <GroupomaniaSignup/>
    <SignupForm v-on:data-sent="signup"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignupForm from '../components/SignupForm.vue'
import GroupomaniaSignup from '../components/GroupomaniaSignup.vue'

export default {
  name: 'Signup',
  components: {
    SignupForm,
    GroupomaniaSignup
  },
  data: () => {
    return {
      email: "fgnn",
      password: "nfdngfd",
      firstname: "ndfngfgdn",
      lastname: "nfgfn",
    };
  },
  methods: {
    signup(){
      this.$axios({
        method: 'post',
        url: 'user/signup',
        data: this.$data
      })
      .then(function (response) {
          //On traite la suite une fois la réponse obtenue 
          console.log(response);
          //this.$router.push("userFeed")
      })
      .catch(function (error) {
          //On traite ici les erreurs éventuellement survenues
          console.log(error);
      });
    }    
  }
}
</script>

<style>
.register{
  display: flex;
  width:100%;
}
</style>