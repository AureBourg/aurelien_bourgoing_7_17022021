<template>
  <div class="userFeed">
    <Header/>  
    <div class="feed">
      <UserCreateArticle/>
      <UserArticles/>
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
  }
}
</script>

<style lang="scss">
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