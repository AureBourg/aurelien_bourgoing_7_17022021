<template>
    <div class="createArticle">
        <div class="userLink userPostPhoto">
            <i class="fas fa-image"></i> <p>Photo</p>
        </div>
        <div class="userLink userPostPost">
            <i class="fas fa-comment-dots"></i> <p>Post</p>
        </div>
        <div class="userLink userPostVideo">
            <i class="fas fa-video"></i> <p>Vidéo</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "UserCreateArticle"
};
</script>

<style lang="scss">
@font-face {
  font-family: "Overpass";
  src: url(../font/Overpass/Overpass-Regular.ttf);
}

.createArticle{
    display: flex;
    font-family: "Overpass";
    width: 700px;
    height: 60px;
    margin: 5px 15px 25px 15px;
    background-color: white;
    box-shadow: 2px 2px 5px lightgrey;
    border-radius: 10px;
    padding: 5px;
    justify-content: space-evenly;
    align-items: center;
}
.userLink{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100px;
    &:hover{
        box-shadow: 1px 1px 4px lightgrey;
    }
}
.userPostPhoto{
    & .fas{
        color: rgb(231,82,70);
        margin-right: 10px;
    }
}
.userPostPost{
    & .fas{
        color: rgb(32,78,138);
        margin-right: 10px;
    }
}
.userPostVideo{
    & .fas{
        color: rgb(248,244,60);
        margin-right: 10px;
    }
}
</style>