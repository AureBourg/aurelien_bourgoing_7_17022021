<template>
  <div class="userFeed">
    <Header/>
    <div class="feed">
      <SearchAside/>
      <UserFriendAside/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import SearchAside from "@/components/SearchAside";
import UserFriendAside from "@/components/UserFriendAside";


// @ is an alias to /src
export default {
  name: 'UserFeed',
  components: {
    Header,
    SearchAside,
    UserFriendAside
  }
}
</script>

<style lang="scss">
.userFeed{
  width:100%;
}
.feed{
  display: flex;
  justify-content: space-between;
  background-color: rgb(230, 230, 230);
  padding: 10px
}
</style>