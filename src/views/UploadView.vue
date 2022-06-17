<template>
  <h2>内容を挙げないと</h2>
  <div
    v-for="PostingContent in PostingContents"
    v-bind:key="PostingContent.value"
    id="posting"
  >
    name:
    <input
      type="text"
      class="name"
      placeholder="your_name"
      v-model="PostigContents.name"
    />

    prefecture:
    <input
      type="text"
      class="prefecture"
      placeholder="your_prefecture"
      v-model="PostigContents.prefecture"
    />

    comment:
    <input
      type="text"
      class="comment"
      placeholder="your_comment"
      v-model="PostigContents.comment"
    />
  </div>
  <button v-on:click="postArticle">保存？</button>
</template>

<script>
import { collection, addDoc, serverTimestamp } from "..firebase/firestore"
import { db } from "./firebase"

export default {
  data() {
    return {
      name: "",
      prefecture: "",
      comment: "",
    }
  },
  methods: {
    async postArticle() {
      this.PostigContents = []
      addDoc(collection(db, "PostigContents"), PostingContents).then((doc) => {
        this.PostigContents.push({
          id: doc.id,
          createdAt: serverTimestamp(),
        })
      })
    },
  },
}
</script>

<style></style>
