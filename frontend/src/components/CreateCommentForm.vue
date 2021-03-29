<template>
<div class="addComment col-md-8 col-12">
    <slot name="photoProfil" class="col-1"></slot>
    <form class="createCommentForm col-11" name="createCommentForm">
        <textarea v-model="text" name="text" class="col-10" placeholder="Laissez un commentaire..." required/>
        <input v-on:click.prevent="sendDataCreateComment()" class="createCommentButton" type="submit" value="Commenter">
    </form>
</div>
</template>

<script>
export default {
  name: "CreateCommentForm",
  data: () => {
    return {
      text: ""
    };
  },
  methods: {
    sendDataCreateComment() {
        this.$emit("comment-sent", this.$data);
        document.getElementsByName("text")[0].value = null;
    },
  }
};
</script>

<style lang="scss">
.addComment{
    display: flex;
    font-family: "Overpass";
    background-color: white;
    box-shadow: 2px 2px 5px lightgrey;
    border-radius: 5px;
    padding: 12px;
    margin: auto;
    margin-bottom: 25px;
    & form{
        display: flex;
        justify-content: space-between;
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