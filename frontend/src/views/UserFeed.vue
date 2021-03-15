<template>
  <div class="userFeed">
    <Header>
      <template v-slot:photoProfil>
        <img :src="user.photoProfil" class="userPhoto" alt="Photo de profil" />
      </template>
      <template v-slot:username>{{ user.firstname }} {{ user.lastname }}</template>
    </Header>

    <div class="feed">

      <div class="createArticleCard col-md-8 col-12">
        <div class="createArticleTitle">
            <span>Partagez ce que vous voulez avec vos collègues !</span>
        </div>
        <div v-on:click="showCreateArticle()" class="createArticleLinks">
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

      <CreateArticleForm
        v-on:article-sent="createPost"
      >
        <template v-slot:photoProfil>
          <img :src="user.photoProfil" class="userPhoto" alt="Photo de profil" />
        </template>
        <template v-slot:username>{{ user.firstname }} {{ user.lastname }}</template>
      </CreateArticleForm>

      <UserArticles 
        v-for="article in articles" 
        :key="article.articleId" 
        :idArticle="article.articleId" 
        :idUser="article.userId"
      >
      <template v-slot:articleText>{{ article.text }}</template>
      <template v-slot:articleUserPhotoProfil>{{ article.photoProfil }}</template>
      <template v-slot:articleMediaUrl>{{ article.mediaUrl }}</template>
      <template v-slot:articleUsername>{{ article.firstname }} {{article.lastname}}</template>
      <template v-slot:articleDateCreation>{{ article.dateCreation }}</template>
      </UserArticles>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import UserArticles from "@/components/UserArticles";
import CreateArticleForm from "@/components/CreateArticleForm";

// @ is an alias to /src
export default {
  name: 'UserFeed',
  components: {
    Header,
    UserArticles,
    CreateArticleForm
  },
  data: () => {
    return {
      articles: [],
      user:{}
    }
  },
  methods: {
    getArticles() {
      this.$axios({
        method: 'get',
        url: 'http://localhost:3000/api/articles/'
      })
      .then((payload) => {
        this.articles = payload.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    getUser() {
        this.$axios({
          method: 'get',
          url: `http://localhost:3000/api/user/${this.$route.params.id}/profile`
        })
        .then((payload) => {
          this.user = payload.data[0];
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    createPost(payload) {
      const text = payload.text;
      const mediaUrl = payload.mediaUrl;
      /*let data = {
        text: text,
        mediaUrl: mediaUrl,
      };*/

      const formData = new FormData();
      formData.append("text", text);
      formData.append("mediaUrl", mediaUrl);

      console.log(mediaUrl);
      console.log(formData);

      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/api/articles/',
        data: formData,
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(() => {
        this.getArticles();
      })
      .catch((e) => console.log(e));
    },
    showCreateArticle(){
      document.getElementById('createArticle').style.display = 'block';
    },
    hideCreateArticle(){
      document.getElementById('createArticle').style.display = 'none';
    }
  },
  mounted() {
    this.getArticles();
    this.getUser();
    this.hideCreateArticle();
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
.userPhoto{
  width: 25px;
  height: 25px;
  border-radius: 20px;
  margin-right: 10px;
}
.createArticleCard{
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