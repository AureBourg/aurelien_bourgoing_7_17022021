<template>
    <div class="updateProfile col-7">
        <div class="updateProfileInfos col-7">
            <span>Modifier mon profil</span>
            <input v-model="tempMessage" placeholder="Nom"/>
            <input placeholder="Prénom"/>
            <input placeholder="Adresse mail"/>
            <textarea placeholder="Décrivez vous ici"/>
        </div>
        <div class="updatePassword col-7">
            <span>Modifier mon mot de passe</span>
            <input type="password" placeholder="Ancien mot de passe"/>
            <input type="password" placeholder="Nouveau mot de passe"/>
        </div>
        <div class="confirmUpdate">
            <button v-on:click="submit()">Confirmer les modifications</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "UpdateProfileForm",
  data() {
    return {
      tempMessage: ""
    };
  },
  methods: {
    submit() {
      this.$emit("inputData", this.tempMessage);
      this.tempMessage = "";
    }
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "Overpass";
  src: url(../font/Overpass/Overpass-Regular.ttf);
}

.updateProfile{
    margin: auto;
    font-family: "Overpass";
    justify-content: center;
}
.updateProfileInfos{
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-bottom: 20px;
    & span{
        text-align: center;
        border-bottom: solid 1px lightgrey;
    }
    & input{
        margin: 10px;
    }
    & textarea{
        margin: 10px;
    }
}
.updatePassword{
    display: flex;
    flex-direction: column;
    margin: auto;
    & span{
        text-align: center;
        border-bottom: solid 1px lightgrey;
    }
    & input{
        margin: 10px;
    }
}
.confirmUpdate{
    display: flex;
    justify-content: center;
    & button{
    color: white;
    background-color: rgb(32,78,138);
    border-radius: 15px;
    border: none;
    padding: 5px 20px 5px 20px;
    margin: 20px;
    }
}
</style>