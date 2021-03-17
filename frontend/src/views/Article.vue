<template>
<div class="userFeed">
    <Header>
      <template v-slot:photoProfil>
        <img :src="user.photoProfil" class="userPhoto" alt="Photo de profil" />
      </template>
      <template v-slot:username>{{ user.firstname }} {{ user.lastname }}</template>
    </Header>
    <UserArticles 
        :key="article.articleId" 
        :idArticle="article.articleId" 
        :idUser="article.userId"     
      >
      <template v-slot:articleText>{{ article.text }}</template>
      <template v-slot:photoProfil>
          <img :src="user.photoProfil" class="userPhoto" alt="Photo de profil" />
      </template>
      <template v-slot:articleUserPhotoProfil>
        <img :src="article.photoProfil" class="userPhoto" alt="Photo de l'utilisateur" />
      </template>
      <template v-slot:articleMediaUrl>
        <img :src="article.mediaUrl" class="articleMediaUrl" alt="Photo du post" />
      </template>
      <template v-slot:articleUsername>{{ article.firstname }} {{ article.lastname }}</template>
      <template v-slot:articleDateCreation>{{ article.dateCreation }}</template>
      </UserArticles>
    <div class="articlePlus">
        <slot name="articleDateCreation"></slot>
        <div class="articleLikes">
            <i class="fas fa-thumbs-up"></i>
            <i class="fas fa-thumbs-down"></i>
        </div>
        <div class="articleSettings">
            <i class="fas fa-ellipsis-h"></i>
        </div>
    </div>
    <div class="commentSection">
        <div class="addComment">
            <slot name="photoProfil"></slot>
            <textarea class="col-lg-8 col-7" placeholder="Laissez un commentaire..."/>
            <button class="col-lg-2 col-3">Commenter</button>
        </div>
        <div class="comments">
            
        </div>
    </div>
</div>
</template>

<script>
import Header from "@/components/Header";
import UserArticles from "@/components/UserArticles";

export default {
    name: 'Article',
    data: () => {
      return {
        article: {},
        user:{}
      }
    },
    components: {
        Header,
        UserArticles,
    },
    methods: {
      getUserConnected() {
        this.$axios({
          method: 'get',
          url: `http://localhost:3000/api/user/`
        })
        .then((payload) => {
          this.user = payload.data[0];
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      getArticle() {
        this.$axios({
            method: 'get',
            url: `http://localhost:3000/api/articles/${this.$route.params.id}`
        })
        .then((payload) => {
          this.article = payload.data[0];
        })
        .catch(function (error) {
            console.log(error);
        });
      }
    },
    mounted() {
    this.getArticle();
    this.getUserConnected();
  }
}
</script>

<style>
.userPhoto{
  width: 25px;
  height: 25px;
  border-radius: 20px;
  margin-right: 10px;
}
</style>