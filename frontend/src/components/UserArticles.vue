<template>
    <div class="articles">
        <div class="article">
            <div class="friendInfo">
                <div class="friendPhoto"></div>
                <p class="friendName">Nom Prénom</p>
            </div>
            <div class="articlePost">
                <p>Ceci est un article écrit par un utilisateur de l'application Ceci est un article écrit par un utilisateur de l'application Ceci est un article écrit par un utilisateur de l'application</p>
            </div>
            <div class="articleMedia">
                <img src="../assets/background.png"/>
            </div>
            <div class="articlePlus">
                <div class="articleLikes">
                    <i class="fas fa-thumbs-up"></i>
                    <i class="fas fa-thumbs-down"></i>
                </div>
                <div class="articleSettings">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
        </div>
        <div class="article">
            <div class="friendInfo">
                <div class="friendPhoto"></div>
                <p class="friendName">Nom Prénom</p>
            </div>
            <div class="articlePost">
                <p>Ceci est un article écrit par un utilisateur de l'application Ceci est un article écrit par un utilisateur de l'application Ceci est un article écrit par un utilisateur de l'application</p>
            </div>
            <div class="articleMedia">
                <img src="../assets/background.png"/>
            </div>
            <div class="articlePlus">
                <div class="articleLikes">
                    <i class="fas fa-thumbs-up"></i>
                    <i class="fas fa-thumbs-down"></i>
                </div>
                <div class="articleSettings">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "UserArticles"
};
</script>

<style lang="scss">
@font-face {
  font-family: "Overpass";
  src: url(../font/Overpass/Overpass-Regular.ttf);
}
.article{
    display: flex;
    flex-direction: column;
    font-family: "Overpass";
    width: 690px;
    margin: 5px 15px 25px 15px;
    background-color: white;
    box-shadow: 2px 2px 5px lightgrey;
    border-radius: 5px;
    padding: 10px;
}
.articleMedia{
    width: 100%;
    & img{
      width: 100%; 
      height: 100%; 
    }
}
.articlePlus{
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
    & .fas{
        padding: 10px;
        cursor: pointer
    }
    & .fa-thumbs-up{
        &:hover{
            
            color: rgb(203,238,98)
        }
    }
    & .fa-thumbs-down{
        &:hover{
            color: rgb(231,82,70);
        }
    }
    & .fa-ellipsis-h{
        &:hover{
            color: grey;
        }
    }
}
.friendInfo{
    display: flex;
    align-items: center;
    & .friendName{
        margin-left: 15px;
    }
}
</style>