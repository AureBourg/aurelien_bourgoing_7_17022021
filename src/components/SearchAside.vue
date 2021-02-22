<template>
    <div class="searchAside">
        <div class="userSearch">
            <i class="fas fa-search"></i><input placeholder="Rechercher"/>
        </div>
        <div class="userGroups userSearchLinks">
            <i class="fas fa-users"></i><p>Groupe</p>
        </div>
        <div class="userLikes userSearchLinks">
            <i class="fas fa-heart"></i><p>Publications likées</p>
        </div>
        <div class="userBans userSearchLinks">
            <i class="fas fa-ban"></i><p>Publications bloquées</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "SearchAside"
};
</script>

<style lang="scss">
@font-face {
  font-family: "Overpass";
  src: url(../font/Overpass/Overpass-Light.ttf);
}
.searchAside{
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 360px;
    font-family: "Overpass";
    box-shadow: 2px 1px 5px lightgrey;
    font-size: 1em;
    background-color: white;
}
.userSearch{
    display: flex;
    border-bottom: solid lightgrey 1px;
    padding: 10px;
    justify-content: left;
    align-items: center;
    overflow : hidden;
    & input{
        margin: 0px 0px 0px 10px;
        padding: 0px 15px 0px 15px;
        width: 170px;
        height: 30px;
        border-radius: 15px;
        background-color: rgb(220, 220, 220);
        border: none;
        font-size: 1em;
    }
    & .fa-user{
        color: rgb(9,31,67);
    }
    
}
.userSearchLinks{
    display: flex;
    justify-content: left;
    overflow : hidden;
    padding: 10px;
    margin: 10px 0px 10px 0px;
    cursor: pointer;
    & p{
        margin: 0px 0px 0px 10px;
    }
}
.fa-users{
    color: rgb(32,78,138);
}
.fa-heart{
        color: rgb(231,82,70);
}
</style>