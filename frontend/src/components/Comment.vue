<template>
    <div class="commentSection col-md-8 col-12">
        <div class="addComment"> <!--A envoyer dans la view Article-->
            <slot name="photoProfil" class="col-1"></slot>
            <form class="createCommentForm col-11" name="createCommentForm">
                <textarea v-model="text" class="col-10" placeholder="Laissez un commentaire..."/>
                <input v-on:click.prevent="sendDataCreateComment()" class="createCommentButton col-2" type="submit" value="Commenter">
            </form>
        </div> <!--A envoyer dans la view Article-->

        <div class="comment">
          <slot name="commentUserPhotoProfil"></slot>
          <slot name="commentUsername"></slot>
          <slot name="commentText"></slot>
          <slot name="commentDateCreation"></slot>
        </div>
    </div> 
</template>

<script>
export default {
  name: "CreateComment",
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
    font-family: "Overpass";
    margin: 5px 15px 25px 15px;
    background-color: white;
    box-shadow: 2px 2px 5px lightgrey;
    border-radius: 5px;
    padding: 12px;
    margin: auto;
    margin-bottom: 25px;
}
.addComment{
    display: flex;
    & form{
        display: flex;
        & input{
        border: none;
        border-radius: 10px;
        padding: 5px 10px 5px 10px;
        background-color: rgb(231,82,70);
        color: white;
        font-size: 0.95em;
    }
    }
}
</style>