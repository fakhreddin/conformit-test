<template>
  <div
    style="width: 100%; min-height:400px;min-width:100%;overflow-y:scroll"
    class="custom"
  >
    <div
      class="comment-item"
      v-for="comment in comments"
      :comment="comment"
      :key="comment.creationDate"
    >
      <span style="width:100%; ">
        <div style="float:right; margin-right:5px">
          <i class="pi pi-pencil" style="color:green;margin-right:5px" />

          <i class="pi pi-trash" style="color:red" />
        </div>

        <div style="display:flex;flex-direction:row;align-items:center">
          <img
            src="https://www.screenfeed.fr/wp-content/uploads/2013/10/default-avatar.png"
            style="width:50px;height:50px;border-radius:75px"
          />

          <div style="padding: 15px 0;margin-left: 10px;">
            <div class="author">{{ comment.author }}</div>
            <div class="content">{{ comment.content }}</div>

            <div style="float:right;font-size:13px">
              {{
                new Date(comment.creationDate).toLocaleDateString("fr-fr", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              }}
            </div>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    comments: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.comment-item {
  padding: 2px;
  margin: 10px;
  text-align: start;
  overflow-y: hidden !important;
}
.author {
  color: #424242;
  font-weight: lighter;
  font-size: 13px;
  padding: 5px;
}
.content {
  color: black;
  font-size: 13px;
  font-weight: bold;
  padding: 5px;
  margin-bottom: 5px;
}
</style>
