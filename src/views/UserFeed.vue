<template>
  <div class="feed">
    
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'UserFeed',
  components: {
    Header,
    SearchAside,
    UserFriendAside,
    UserCreateArticle,
    UserArticles,
    UserNav,
    Footer
  }
}
</script>

<style>
.feed{
  display: flex;
  width:100%;
}
</style>