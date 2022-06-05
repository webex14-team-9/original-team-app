<template>
  <h3>投稿ページ</h3>

  <div v-for="PostingConstent in PostingContents" :v-bind:key="index">

      username
      <input type="text" />
      {{ PostingContent.name }} </br>
      
      prefecture
      <input type="text"/>
      {{PostingContent.prefecture}}</br>

      画像
      <input type="image"/>
      {{PostingContent.image}}</br>
      
      コメント
      <input type="text"></br>
      {{PostingContent.image}}
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
        img: "",
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
