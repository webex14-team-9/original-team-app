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
  background-color: rgb(243, 245, 237);
  padding: 30px;
  opacity: 0.75;
  text-align: center;
}
.data h3 {
  border-bottom: solid 1px;
  font-weight: 9000;
}

.title {
  position: relative;
  margin: 2em 0 2em 40px;
  padding: 8px 15px;
  background: #bdedfa;
  border-radius: 30px;
}
.title:before {
  font-family: FontAwesome;
  content: "\f111";
  position: absolute;
  font-size: 15px;
  left: -40px;
  bottom: 0;
  color: #bdedfa;
}
.title:after {
  font-family: FontAwesome;
  content: "\f111";
  position: absolute;
  font-size: 23px;
  left: -23px;
  bottom: 0;
  color: #bdedfa;
}
.title p {
  margin: 0;
  padding: 0;
}
@import url("https://fonts.googleapis.com/css?family=Ubuntu+Mono%22");
h2 {
  font-family: "Ubuntu Mono", monospace;
}
.data h3 {
  font-family: "Ubuntu Mono", monospace;
}
</style>
