<template>
    <div class="articles" :id="idArticle">
        <div class="article col-md-8 col-12">
        <router-link :to="{ name: 'article', params: {id: idArticle } }">
            <router-link :to="{ name: 'userProfil', params: {id: idUser } }"><div class="friendInfo" :id="idUser">
                <slot name="articleUserPhotoProfil"></slot>
                <slot name="articleUsername"></slot>
            </div></router-link>
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
                <span class="numberComment">comments.length commentaires</span>
                <span class="linkComment"><i class="far fa-comment-alt"></i> Commenter</span>
            </div>
        </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserArticles",
    props: ["idArticle", "idUser"],
    methods: {
        sendDataUserProfil(){
            this.$emit("userId-sent", event.target.id);
            console.log(event.target.id);
        },
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
}
.articleMedia{
        & img{
        max-width: 100%; 
        max-height: 400px; 
        }
}
.articlePlus{
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
    margin-bottom: 10px;
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
.addComment{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    & textarea{
        margin-right: 10px;
        padding: 0px 15px 0px 15px;
        height: 30px;
        border-radius: 15px;
        background-color: rgb(220, 220, 220);
        border: none;
        font-size: 0.8em;
    }
    & button{
        border: none;
        border-radius: 10px;
        padding: 5px 10px 5px 10px;
        background-color: rgb(231,82,70);
        color: white;
        font-size: 0.95em;
    }
}
.comment{
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-top: solid 1px lightgrey;
    & .commentUser{
        display: flex;
        align-items: center;
        font-size: 0.9em;
    }
    & .commentText{
        font-size: 0.9em;
        padding: 10px 10px 10px 50px;
    }
}
.dateCreation{
  font-size: 0.7em;
  color: grey;
  text-align: right;
}
.articleFooter{
  color: grey;
  border-top: solid 1px grey;
  padding-top: 15px;
  & span{
      padding: 10px;
      border-radius: 10px;
      cursor: pointer;
    &:hover{
        box-shadow: 0px 0px 5px lightgrey;
    }
  }
  & a{
    color: grey;
    font-size: 0.7em;
    cursor: pointer;
    text-decoration: none;
  }
}
</style>