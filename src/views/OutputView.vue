<template>
  <h3>投稿ページ</h3>

  <div
    v-for="PostingContent in PostingContents"
    v-bind:key="PostingContent.value"
  >
    <p>username</p>
    <input v-model="PostingContents" type="text" />
    {{ PostingContent.name }}

    <p>prefecture</p>
    <input type="text" />
    {{ PostingContent.prefecture }}

    <p>コメント</p>
    <input type="text" />
    {{ PostingContent.comment }}
  </div>

  <button v-on:click="editing">投稿</button>
</template>

<script>
import { collection, addDoc, getDocs } from "firebase/firestore"
import { db } from "./firebase"

export default {
  data() {
    return {
      PostingContents: [],
    }
  },
  methods: {
    editing() {
      const data = {
        name: "",
        prefecture: "",
        comment: "",
      }

      addDoc(this.PostingContents(db, "PostingContents"), data).then(() => {
        this.PostingContents.push(data)
      })
    },
  },

  created() {
    getDocs(collection(db, "PostingContents")).then((snapshot) => {
      for (let i = 0; i < snapshot.docs.length; i++) {
        this.PostingContents.push(snapshot.docs[i].data())
      }
    })
  },
}
</script>
