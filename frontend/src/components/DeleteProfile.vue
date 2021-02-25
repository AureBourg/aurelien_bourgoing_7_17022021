<template>
    <div class="delete col-7">
    <button>Supprimer le compte</button>
    </div>
</template>

<script>
export default {
  name: "DeleteProfile"
};
</script>

<style lang="scss">
@font-face {
  font-family: "Overpass";
  src: url(../font/Overpass/Overpass-Regular.ttf);
}
.delete{
    display: flex;
    justify-content: center;
    border-top: solid 1px lightgrey;
    margin: auto;
    margin-top: 15px;
    font-family: "Overpass";
    & button{
    color: white;
    background-color: rgb(231,82,70);
    border-radius: 10px;
    border: none;
    padding: 10px;
    font-weight: bold;
    margin: 20px;
    }
}

</style>