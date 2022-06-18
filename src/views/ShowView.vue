<template>
  <h3>保存されているデータを表示させたい</h3>

  <h4>みんなの投稿</h4>
  <div v-for="post in posts" :key="post.name">
    <hr />
    <p>名前：{{ post.name }}</p>
    <p>コメント：{{ post.comment }}</p>
    <p>県名{{ post.prefecture }}</p>
  </div>
</template>

<script>
//import { db } from "../firebase.js"
import axios from "axios"

export default {
  data() {
    return {
      username: "",
      prefecture: "",
      comment: "",
      post: "",
    }
  },
  methods:{

    dataShow() {
//     axios
//       .get(
//         "https://firestore.googleapis.com/v1/projects/vuejs-http-8f605/databases/(default)/documents/comments"
//       )
//       .then((response) => {
//         this.posts = response.data.documents
//       })
//   },

},}
</script>

<style></style>
