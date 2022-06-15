<template>
  <h2>投稿ページ</h2>

  <div
    v-for="PostingContent in PostingContents"
    v-bind:key="PostingContent.value"
    id="posting"
  >
    <h4>username</h4>
    {{ PostingContent.name }}

    <h4>prefecture</h4>
    {{ PostingContent.prefecture }}

    <h4>コメント</h4>
    {{ PostingContent.comment }}
  </div>

  <button v-on:click="editing">投稿</button>
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
  methods: {
    // editing() {
    //   const data = {
    //     name: null,
    //     prefecture: null,
    //     comment: null,
    //   }
    //   addDoc(this.PostingContents(db, "PostingContents"), data).then(() => {
    //     this.PostingContents.push(data)
    //   })
    // },
  },
  created: function () {
    getDocs(collection(db, "PostingContents")).then((snapshot) => {
      for (let i = 0; i < snapshot.docs.length; i++) {
        this.PostingContents.push(snapshot.docs[i].data())
      }
    })
  },
}
</script>
