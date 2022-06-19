<template>
  <h2>投稿ページ</h2>
  <div
    v-for="PostingContent in PostingContents"
    v-bind:key="PostingContent.value"
    id="posting"
  >
    <h5 id="name">username</h5>
    {{ PostingContent.name }}

    <h5 id="prefecture">prefecture</h5>
    {{ PostingContent.prefecture }}

    <h5 id="comment">コメント</h5>
    {{ PostingContent.comment }}
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase.js"

export default {
  data() {
    return {
      PostingContents: [],
    }
  },
  methods: {},
  // created: function () {
  //   getDocs(collection(db, "PostingContents")).then((snapshot) => {
  //     //for (let i = 0; i < snapshot.docs.length; i++){
  //     this.PostingContents.push(snapshot.docs.data())
  //   })
  Created: function () {
    getDocs(collection(db, "PostingContents")).then((snapshot) => {
      for (let i = 0; i < snapshot.docs.length; i++) {
        this.PostingContents.push(snapshot.docs.data())
      }
    })
  },
}
</script>
