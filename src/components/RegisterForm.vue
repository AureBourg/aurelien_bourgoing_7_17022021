<template>
  <div class="form">
    <input class="username" type="text" id="firstname" name="firstname" placeholder="First Name" required>
    <input class="username" type="text" id="lastname" name="lastname" placeholder="Last Name" required>
    <input type="text" id="password" name="password" placeholder="Password" required>
    <input type="text" id="mail" name="mail" placeholder="Adresse mail" required>
    <button>Créer un compte</button>
  </div>
</template>

<script>

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

