<template>
  <div class="userFeed">
    <Header/>
    <div class="homeFeed">
      <SearchAside/>
      <div class="feed">
        <UserCreateArticle/>
        <UserArticles/>
      </div>
      <UserFriendAside/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import SearchAside from "@/components/SearchAside";
import UserFriendAside from "@/components/UserFriendAside";
import UserCreateArticle from "@/components/UserCreateArticle";
import UserArticles from "@/components/UserArticles";



// @ is an alias to /src
export default {
  name: 'UserFeed',
  components: {
    Header,
    SearchAside,
    UserFriendAside,
    UserCreateArticle,
    UserArticles
  }
}
</script>

<style lang="scss">
.userFeed{
  width:100%;
}
.homeFeed{
  display: flex;
  justify-content: space-between;
  background-color: rgb(230, 230, 230);
  padding: 10px
}
</style>