<template>
<div class="userFeed">
    <Header>
      <template v-slot:back>
        <router-link :to="{ name: 'userFeed'}"><i class="fas fa-times back"></i></router-link>
      </template>
      <template v-slot:photoProfil>
        <img :src="user.photoProfil" class="userPhoto" alt="Photo de profil" />
      </template>
      <template v-slot:username>{{ user.firstname }} {{ user.lastname }}</template>
    </Header>

    <div class="feed">

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

      <Comment
        v-on:comment-sent="createComment"
        v-for="comment in comments" 
        :key="comment.commentId" 
        :idComment="comment.commentId" 
        :idUser="comment.userId"
      >
        <template v-slot:commentText>{{ comment.text }}</template>
        <template v-slot:commentUsername>{{ comment.firstname }} {{ comment.lastname }}</template>
        <template v-slot:commentUserPhotoProfil>
          <img :src="comment.photoProfil" class="userPhoto" alt="Photo de l'utilisateur" />
        </template>
        <template v-slot:commentDateCreation>{{ comment.dateCreation }}</template>
        <template v-slot:photoProfil>
            <img :src="user.photoProfil" class="userPhotoComment" alt="Photo de profil" />
        </template>
      </Comment>
      
    </div>
</div>
</template>

<script>
import Header from "@/components/Header";
import UserArticles from "@/components/UserArticles";
import Comment from "@/components/Comment";

export default {
    name: 'Article',
    data: () => {
      return {
        article: {},
        user:{},
        comments:[]
      }
    },
    components: {
        Header,
        UserArticles,
        Comment
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
      },
      getComments() {
        this.$axios({
          method: 'get',
          url: `http://localhost:3000/api/articles/${this.$route.params.id}/comments`
        })
        .then((payload) => {
          this.comments = payload.data;
          console.log(this.comments);
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      createComment(payload){
        this.$axios({
            method: 'post',
            url: `http://localhost:3000/api/articles/${this.$route.params.id}/comments/create`,
            data: payload
        })
        .then(() => {
          alert("Commentaire crée");
          console.log(payload);
        })
        .catch(function (error) {
            console.log(error);
        });
      }
    },
    mounted() {
    this.getArticle();
    this.getComments();
    this.getUserConnected();
  }
}
</script>

<style>
.feed{
  display: flex;
  flex-direction: column;
  background-color: rgb(230, 230, 230);
  padding: 10px;
}
.userPhoto{
  width: 25px;
  height: 25px;
  border-radius: 20px;
  margin-right: 10px;
}
.userPhotoComment{
  width: 46px;
  height: 46px;
  border-radius: 23px;
  margin-right: 10px;
}
</style>