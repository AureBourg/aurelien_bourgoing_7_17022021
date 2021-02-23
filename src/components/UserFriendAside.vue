<template>
    <div class="friendsAside">
        <div class="friendsTitle">
            <p>Collègues connectés</p>
        </div>
        <div class="userFriends">

        <!--PARTIE VARIABLE-->
            <div class="userFriend">
                <div class="friendPhoto"></div>
                <div class="userConnected"></div>
                <p>Nom Prénom</p>
            </div> 
        <!--..........................-->          
        </div>   
    </div>
</template>

<script>
export default {
  name: "UserFriendAside"
};
</script>

<style lang="scss">
@font-face {
  font-family: "Overpass";
  src: url(../font/Overpass/Overpass-Light.ttf);
}
.friendsAside{
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 500px;
    font-family: "Overpass";
    box-shadow: 2px 1px 5px lightgrey;
    font-size: 1em;
    background-color: white;
}
.userFriends{
    overflow : scroll;
    overflow-x: hidden;
}
.userFriend{
    display: flex;
    padding: 10px 10px 10px 15px;
    justify-content: left;
    align-items: center;
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
.friendsTitle{
    display: flex;
    padding: 15px;
    justify-content: left;
    font-size: 1.2em;
    & p{
        margin: 0px 0px 0px 10px;
    }
    & .fa-user{
        color: rgb(32,78,138);
    }
    
}
.friendPhoto{
  width: 35px;
  height: 35px;
  border-radius: 20px;
  justify-content: end;
  align-items: center;
  margin-right: 10px;
  background: url(../assets/background.png);
  background-size: cover;
}
.userConnected{
width: 10px;
  height: 10px;
  border-radius: 20px;
  border: solid 2px white;
  justify-content: end;
  align-items: center;
  margin-right: 10px;
  background-color: green;
  position: relative;
  right: 20px;
  top: 15px;
}
</style>