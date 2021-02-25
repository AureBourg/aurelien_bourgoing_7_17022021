<template>
    <div class="createArticle col-md-8 col-12">
        <div class="createArticleTitle">
            <span>Partagez ce que vous voulez avec vos collègues !</span>
        </div>
        <div class="createArticleLinks">
            <div class="userLink userPostPhoto col-4">
                <i class="fas fa-image"></i> Photo
            </div>
            <div class="userLink userPostPost col-4">
                <i class="fas fa-comment-dots"></i> Post
            </div>
            <div class="userLink userPostVideo col-4">
                <i class="fas fa-video"></i> Vidéo
            </div>
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
    flex-direction: column;
    font-family: "Overpass";
    background-color: white;
    box-shadow: 2px 2px 5px lightgrey;
    border-radius: 10px;
    margin: auto;
    margin-bottom: 20px;
}
.createArticleTitle{
    display: flex;
    justify-content: center;
    padding: 12px;
}
.createArticleLinks{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.userLink{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 12px;
    &:hover{
        box-shadow: 0px 0px 5px lightgrey;
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