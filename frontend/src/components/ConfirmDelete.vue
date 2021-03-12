<template>
    <div class="confirmDelete col-md-6 col-12">
        <div class="confirmDeleteInfos">
            <span class="annulDelete">Annuler <i class="fas fa-times"></i></span>
            <span>Suppression de compte</span>
            <span>Attention cette action est irrévocable</span>
        </div>
        <div>
            <form>
                <input type="password" placeholder="Mot de passe" id="passwordDelete"/>
                <button type="submit" v-on:click="sendDataDelete()">Supprimer le compte</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: "ConfirmDelete",
    data: () => {
    return {
      password: ""
    };
  },
  methods: {
    sendDataDelete() { // Envois des données au parent pour traiter l'envois à l'API
      const passwordValid = document.getElementById("passwordDelete").checkValidity();

      if (passwordValid) {
        this.$emit("delete-form", this.$data);
      }
    }
  }
}
</script>

<style>
.confirmDelete{
    visibility: hidden;
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    top: 150px;
    text-align: center;
    z-index: 9999;
    background-color: rgb(231,82,70);
    padding: 80px;
    border: solid 2px white;
    border-radius: 20px 
}
.confirmDeleteInfos{
    display: flex;
    flex-direction: column;
}
.annulDelete{
    position: relative;
    left: 275px;
    bottom: 68px;
}
</style>