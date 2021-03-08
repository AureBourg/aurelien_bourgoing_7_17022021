<template>
    <div class="articles">
        <div class="article col-md-8 col-12">
            <div class="friendInfo">
                <div class="friendPhoto"></div>
                <slot name="mediaUrl"></slot>
            </div>
            <div class="articlePost">
                <slot name="text"></slot>
            </div>
            <div class="articleMedia">
                <img src="../assets/background.png"/>
            </div>
            <div class="articlePlus">
                <slot name="dateCreation"></slot>
                <div class="articleLikes">
                    <i class="fas fa-thumbs-up"></i>
                    <i class="fas fa-thumbs-down"></i>
                </div>
                <div class="articleSettings">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            <div class="commentSection">
                <div class="addComment">
                    <div class="friendPhoto col-lg-2 col-2"></div>
                    <textarea class="col-lg-8 col-7" placeholder="Laissez un commentaire..."/>
                    <button class="col-lg-2 col-3">Commenter</button>
                </div>
                <div class="comments">
                    <div class="comment">
                        <div class="commentUser">
                            <div class="friendPhoto"></div> 
                            Nom Prénom
                        </div>
                        <div class="commentText">
                            <p>Ahah super photo !</p>
                        </div>
                    </div>
                    <div class="comment">
                        <div class="commentUser">
                            <div class="friendPhoto"></div> 
                            Nom Prénom
                        </div>
                        <div class="commentText">
                            <p>Tres belle photo super !</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "UserArticles"
};
</script>

<style lang="scss">
@font-face {
  font-family: "Overpass";
  src: url(../font/Overpass/Overpass-Regular.ttf);
}
.article{
    display: flex;
    flex-direction: column;
    font-family: "Overpass";
    margin: 5px 15px 25px 15px;
    background-color: white;
    box-shadow: 2px 2px 5px lightgrey;
    border-radius: 5px;
    padding: 12px;
    margin: auto;
    margin-bottom: 25px;
}
.articleMedia{
    width: 100%;
    & img{
      width: 100%; 
      height: 100%; 
    }
}
.articlePlus{
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
    margin-bottom: 10px;
    & .fas{
        padding: 10px;
        cursor: pointer
    }
    & .fa-thumbs-up{
        &:hover{
            
            color: rgb(203,238,98)
        }
    }
    & .fa-thumbs-down{
        &:hover{
            color: rgb(231,82,70);
        }
    }
    & .fa-ellipsis-h{
        &:hover{
            color: grey;
        }
    }
}
.friendInfo{
    display: flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 15px;
    & .friendName{
        margin-left: 15px;
        align-items: center;
    }
}
.friendPhoto{
  width: 35px;
  height: 35px;
  border-radius: 20px;
  justify-content: end;
  align-items: center;
  margin-right: 10px;
  background: url(../assets/background.png);
  background-size: cover;
}
.addComment{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    & textarea{
        margin-right: 10px;
        padding: 0px 15px 0px 15px;
        height: 30px;
        border-radius: 15px;
        background-color: rgb(220, 220, 220);
        border: none;
        font-size: 0.8em;
    }
    & button{
        border: none;
        border-radius: 10px;
        padding: 5px 10px 5px 10px;
        background-color: rgb(231,82,70);
        color: white;
        font-size: 0.95em;
    }
}
.comment{
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-top: solid 1px lightgrey;
    & .commentUser{
        display: flex;
        align-items: center;
        font-size: 0.9em;
    }
    & .commentText{
        font-size: 0.9em;
        padding: 10px 10px 10px 50px;
    }
}
</style>