<template>
  <div class="form">
    <input type="text" id="name" name="name" placeholder="Username" required>
    <input type="text" id="password" name="password" placeholder="Password" required>
    <button>Connexion</button>
    <p>Mot de passe oublié ?</p>
    <RegisterButton/>
  </div>
</template>

<script>
import RegisterButton from '@/components/RegisterButton.vue'

export default {
  name: 'registerButton',
  components: {
    RegisterButton
  }
}
</script>

<style scoped lang="scss">
.form{
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width:50%;
    margin: auto;
}
input{
    margin-bottom: 20px;
    height: 40px;
    border-radius: 4px;
    width: 50%;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
}
button{
    font-size: 1.1em;
    color: white;
    background-color:rgb(253,45,1);
    border-radius: 15px;
    width: 150px;
    padding: 10px;
    text-align: center;
    border: rgb(255,215,215);
    margin: auto;
}
p{
    font-size: 0.8em;
    color: black;
}
</style>