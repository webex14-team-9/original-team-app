<template>
  <h2>内容を挙げないと</h2>
  <div
    v-for="PostingContent in PostingContents"
    v-bind:key="PostingContent.value"
    id="posting"
  >
    <input
      type="text"
      class="name"
      placeholder="your_name"
      v-model="PostingContents.name"
    />

    <input
      type="text"
      class="prefecture"
      placeholder="your_prefecture"
      v-model="PostingContents.prefecture"
    />

    <input
      type="text"
      class="comment"
      placeholder="your_comment"
      v-model="PostingContents.comment"
    />
  </div>
  <button v-on:click="postArticle">保存？</button>
</template>

<script>
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase"

export default {
  data() {
    return {
      PostingContents: [],
    }
  },
  methods: {
    async postArticle() {
      //  const  PostingContent = [name,prefecture,comment]
      addDoc(collection(db, "PostigContents")).then((doc) => {
        this.PostingContents.push({
          id: doc.id,
          createdAt: serverTimestamp(),
          name: this.name,
          prefecture: this.prefecture,
          comment: this.comment,
        })
      })
    },
  },
}
</script>

<style></style>
