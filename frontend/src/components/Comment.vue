<template>
    <div class="commentSection col-md-8 col-12">
        <router-link :to="{ name: 'userProfil', params: {id: idUser } }">
        <div class="commentUserName">
          <slot name="commentUserPhotoProfil"></slot>
          <slot name="commentUsername"></slot>
          <span v-if="roleUser == 'Administrateur' || idUser == idUserConnected" class="options"><i class="fas fa-ellipsis-h"></i></span>
        </div>
        </router-link>
        <div class="commentText">
          <slot name="commentText"></slot>
        </div>
        <div class="commentDateCreation">  
          <slot name="commentDateCreation"></slot>
        </div>
    </div> 
</template>

<script>
export default {
  name: "Comment",
  props: ["idUser","idUserConnected","roleUser"],
  data: () => {
    return {
      text: ""
    };
  },
  methods: {
    sendDataCreateComment() {
        this.$emit("comment-sent", this.$data);
    },
  }
};
</script>

<style lang="scss">
.commentSection{
    display: flex;
    flex-direction: column;
    font-family: "Overpass";
    margin: 5px 15px 25px 15px;
    background-color: white;
    box-shadow: 2px 2px 5px lightgrey;
    border-radius: 5px;
    padding: 12px;
    margin: auto;
    margin-bottom: 3px;
    & a{
      text-decoration: none;
      color: black;
    }
}
.commentUserName{
  padding: 0px 0px 10px 10px;
  border-bottom: solid 1px lightgrey;
  & .options{
    position: relative;
    left: 10px;
  }
}
.commentText{
  padding: 15px;
}
.commentDateCreation{
    font-size: 0.7em;
    color: grey;
    text-align: end;
}

</style>