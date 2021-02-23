<template>
    <div class="userNav">
        <div class="userName">
            <i class="fas fa-user"></i><p>Prénom</p>
        </div>
        <div class="userLinkSettings userLinks">
            <i class="fas fa-cog"></i><p>Paramètres</p>
        </div>
        <div class="userLinkMessages userLinks">
            <i class="far fa-envelope"></i><p>Messages</p>
        </div>
        <div class="userLinkLogout userLinks">
            <i class="fas fa-power-off"></i><p>Deconnexion</p>
        </div>
        <div class="deleteUserAccount">
            <i class="fas fa-times"></i><p>Supprimer le compte</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "UserNav"
};
</script>

<style lang="scss">
@font-face {
  font-family: "Overpass";
  src: url(../font/Overpass/Overpass-Light.ttf);
}
.userNav{
    visibility: hidden;
    display: flex;
    flex-direction: column;
    width: 190px;
    height: 260px;
    border: lightgrey solid 2px;
    position: absolute;
    top: 80px; right: 40px;
    font-family: "Overpass";
    justify-content: space-between;
    box-shadow: 2px 1px 5px lightgrey;
    font-size: 0.98em;
    z-index: 9999;
    background-color: white;
}
.userName{
    display: flex;
    border-bottom: solid lightgrey 1px;
    padding: 10px;
    justify-content: left;
    overflow : hidden;
    & p{
        margin: 0px 0px 0px 10px;
    }
    & .fa-user{
        color: rgb(32,78,138);
    }
    
}
.deleteUserAccount{
    display: flex;
    border-top: solid lightgrey 1px;
    padding: 10px;
    justify-content: left;
    overflow : hidden;
    cursor: pointer;
    & p{
        margin: 0px 0px 0px 10px;
    }
    & .fa-times{
        color: rgb(231,82,70);
    }
    &:hover{
        box-shadow: 0px 1px 5px rgb(231,82,70);
    }
}
.userLinks{
    display: flex;
    padding: 10px;
    justify-content: space-evenly;
    cursor: pointer;
    &:hover{
        box-shadow: 1px 1px 4px lightgrey;
    }
}
.userLinkSettings{
    display: flex;
    justify-content: left;
    overflow : hidden;
    & p{
        margin: 0px 0px 0px 10px;
    }
}
.userLinkMessages{
    display: flex;
    justify-content: left;
    overflow : hidden;
    & p{
        margin: 0px 0px 0px 10px;
    }
}
.userLinkLogout{
    display: flex;
    justify-content: left;
    overflow : hidden;
    & p{
        margin: 0px 0px 0px 10px;
    }
}

</style>