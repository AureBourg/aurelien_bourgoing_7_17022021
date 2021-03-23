<template>
    <div class="articles" :id="idArticle">
        <div class="article col-md-8 col-12">       
            <router-link :to="{ name: 'userProfil', params: {id: idUser } }">
                <div class="friendInfo" :id="idUser">
                    <slot name="articleUserPhotoProfil"></slot>
                    <slot name="articleUsername"></slot>
                </div>
            </router-link>
            <div class="articlePost">
                <slot name="articleText"></slot>
            </div>
            <div class="articleMedia">
                <slot name="articleMediaUrl"></slot>
            </div>
            <div class="dateCreation">
                <slot name="articleDateCreation"></slot>
            </div>
            <div class="articleFooter">
                <router-link :to="{ name: 'article', params: {id: idArticle } }">
                    <span class="numberComment">comments.length commentaires</span>
                </router-link>
                <router-link :to="{ name: 'article', params: {id: idArticle } }">
                    <span class="linkComment"><i class="far fa-comment-alt"></i> Commenter</span>
                </router-link>
                <span v-if="like == 1" class="isLiked">J'aime</span>
                <span v-on:click.prevent="sendDataLikeArticle()" class="numberLikes"><i class="fas fa-thumbs-up"></i>likes.length</span>
                <span v-on:click.prevent="sendDataDeleteArticle()" v-if="roleUser == 'Administrateur' || idUser == idUserConnected" class="options">Supprimer</span><!--<i class="fas fa-ellipsis-h"></i>-->
            </div>      
        </div>
    </div>
</template>

<script>
export default {
    name: "UserArticles",
    props: ["idArticle", "idUser", "idUserConnected", "roleUser", "like"],
    methods:{
        sendDataDeleteArticle() {
        this.$emit("article-delete", this.idArticle);
        },
        sendDataLikeArticle() {
            if(this.like == 1) {
                this.$emit("article-like-cancel", this.idArticle);
            }
            this.$emit("article-like", this.idArticle);
            console.log(this.like);
        }
    }
}
</script>

<style lang="scss">
@font-face {
  font-family: "Overpass";
  src: url(../font/Overpass/Overpass-Regular.ttf);
}
.article{
    font-family: "Overpass";
    margin: 5px 15px 25px 15px;
    background-color: white;
    box-shadow: 2px 2px 5px lightgrey;
    border-radius: 5px;
    padding: 12px;
    margin: auto;
    margin-bottom: 25px;
    & a{
        text-decoration: none;
        color: black;
    }
}
.articleMedia{
    & img{
    max-width: 100%; 
    max-height: 400px; 
    }
}
.articleFooter{
    display: flex;
    justify-content: space-between;
    border-top: solid 1px grey;
    padding-top: 10px;
    & a{
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
        &:hover{
            box-shadow: 0px 0px 5px lightgrey;
        }
    }
    & span{
        padding: 10px;
        cursor: pointer;
    }
    & .fa-thumbs-up{
        &:hover{      
            color: rgb(203,238,98)
        }
    }
}
.friendInfo{
    display: inline-block;
    align-items: center;
    padding: 10px;
    margin-bottom: 15px;
    cursor: pointer;
    & .friendName{
        margin-left: 15px;
        align-items: center;
    }
}
.dateCreation{
  font-size: 0.7em;
  color: grey;
  text-align: right;
}
.isLiked{
    color: blue;
}
</style>