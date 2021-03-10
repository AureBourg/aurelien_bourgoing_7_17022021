<template>
  <div class="userFeed">
    <Header/>  
    <div class="feed">
      <UserCreateArticle/>
      <UserArticles 
        v-for="article in articles" 
        :key="article.articleId" 
        :idArticle="article.articleId" 
        :idUser="article.userId"
      >
      <template v-slot:text>{{ article.text }}</template>
      <template v-slot:mediaUrl>{{ article.mediaUrl }}</template>
      <template v-slot:username>{{ article.firstname + ' ' + article.lastname }}</template>
      <template v-slot:dateCreation>{{ article.dateCreation }}</template>
      </UserArticles>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import UserCreateArticle from "@/components/UserCreateArticle";
import UserArticles from "@/components/UserArticles";

// @ is an alias to /src
export default {
  name: 'UserFeed',
  components: {
    Header,
    UserCreateArticle,
    UserArticles
  },
  data: () => {
      return {
          articles: []
      }
  },
  methods: {
    getArticles() {
      // Récupère les posts
      this.$axios({
        method: 'get',
        url: 'articles'
      })
        .then((payload) => {
          this.articles = payload.data;
        })
        .catch(function (error) {
          //On traite ici les erreurs éventuellement survenues
          console.log(error);
      });
    }
  },
  mounted() {
  // Récupère les posts et défini le titre
    this.getArticles();
    document.title = "Mon fil d'actualité | Groupomania";
  }
}
</script>

<style scoped lang="scss">
.userFeed{
  width:100%;
}
.feed{
  display: flex;
  flex-direction: column;
  background-color: rgb(230, 230, 230);
  padding: 10px;
}
</style>