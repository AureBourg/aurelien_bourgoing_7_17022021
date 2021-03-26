<template>
    <div id="createArticle" class="createArticle col-7">
        <span v-on:click="hideCreateArticle()" class="annulCreateArticle">Annuler<i class="fas fa-times"></i></span>
        <div class="userInfos">
            <slot name="photoProfil"></slot>
            <slot name="username"></slot>
        </div>
        <form class="createArticleForm" name="createArticleForm">
            <div>
                <textarea v-model="text" class="articleText" type="text" id="articleText" name="text" placeholder="Postez ce que vous voulez !"/>
            </div>
            <div>
                <label class="articleSelectMedia" for="image">Ajouter une photo</label>
                <input name="image" id="image" class="image" v-on:change="sendFile($event)" type="file"/>
            </div>
            <input v-on:click.prevent="sendDataCreateArticle()" class="createArticleButton" type="submit" value="Publier !">
        </form>
    </div>
</template>

<script>
export default {
  name: "CreateArticleForm",
  data: () => {
    return {
      text: "",
      image: ""
    };
  },
  methods: {
    hideCreateArticle(){
        document.getElementById('createArticle').style.display = 'none';
    },
    sendFile(event) {
        this.$data.image = event.target.files[0];
    },
    sendDataCreateArticle() {
        this.$emit("article-sent", this.$data);
    },
  }
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
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    z-index: 99;
}
.image{
    opacity: 0;
}
.articleSelectMedia{
    color: white;
    background-color: rgb(32,78,138);
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
}
.articleText{
    width: 100%;
    height: 150px;
}
.annulCreateArticle{
    display: flex;
    align-items: center;
    justify-content: end;
    cursor: pointer;
    & i{
        margin-left: 10px;
    }
    &:hover{
      color: lightgrey;
    }
}
.userInfos{
    margin-bottom: 15px;
}
.createArticleButton{
    display: flex;
    font-size: 1.1em;
    color: white;
    background-color:rgb(9,31,67);
    border-radius: 20px;
    padding: 7px;
    text-align: center;
    border: rgb(255,215,215);
    cursor: pointer;
}
.createArticleForm{
    display: flex;
    flex-direction: column;
}
</style>