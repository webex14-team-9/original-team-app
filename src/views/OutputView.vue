<template>
  <h2>Why don't you post?(´⊙ω⊙≡´⊙ω⊙)</h2>

  <div
    v-for="PostingContent in PostingContents"
    v-bind:key="PostingContent.value"
    id="posting"
    class="m-container"
  >
    <div class="data">
      <h3>username</h3>
      <h4>{{ PostingContent.username }}</h4>

      <h3>prefecture</h3>
      <h4>{{ PostingContent.prefecture }}</h4>

      <h3>コメント</h3>
      <h4>{{ PostingContent.comment }}</h4>
      <!-- 
      <h3>コメント</h3>
      <h4>{{ PostingContent.time }}</h4> -->

      <h3>写真</h3>
      <img src="PostingContents/imgUrl" />
    </div>
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
    getDocs(collection(db, "PostingContents"))
      //    .orderBy("timestamp", "asc")
      .then((snapshot) => {
        for (let i = 0; i < snapshot.docs.length; i++) {
          this.PostingContents.push(snapshot.docs[i].data())
        }
      })
  },
}
</script>
<style>
.data {
  background-color: #c5e6f0;
}
.data h3 {
  border-bottom: solid 1px;
  width: 300px;
}
.data h4 {
  margin-right: 960px;
}
</style>
