<template>
  <div>
    <div id="app">
      <h1 class="title">{{ title }}</h1>

      <div class="field"></div>

      <div class="file has-name">
        <label class="file-label">
          <input
            class="file-input"
            type="file"
            name="first_image"
            @change="onFileChange"
          />
          <span class="file-cta">
            <span class="file-label"> 画像を選択してください </span>
          </span>
          <span class="file-name">
            {{ form.first_image_name }}
          </span>
        </label>
      </div>
      <br />
      <div class="file has-name">
        <label class="file-label">
          <input
            class="file-input"
            type="file"
            name="second_image"
            @change="onFileChange"
          />
          <span class="file-cta">
            <span class="file-label"> 画像を選択してください </span>
          </span>
          <span class="file-name">
            {{ form.second_image_name }}
          </span>
        </label>
      </div>
      <div class="comment">
        レビュー:
        <input
          class="w-full pt-4 pl-8 outline-none"
          type="text"
          name="review"
          placeholder="コメント"
          v-model="message"
        />
        {{ message }}
        <br />

        <input
          class="w-full pt-4 pl-8 outline-none"
          type="text"
          name="review"
          placeholder="観光した都道府県を入力してください"
          v-for="PostingContent in PostingContents"
          v-bind:key="PostingContent.value"
        />
        <p>{{ place }}</p>
        <div class="control">
          <button class="button is-primary" @click="sendMesseage">投稿</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, addDoc, getDocs } from "firebase/firestore"
import { db } from "../firebase"

export default {
  data() {
    return {
      name: "",
      comment: "",
      team: "",
      tweets: [],
    }
  },
  methods: {
    postingContents() {
      let tweet = {
        name: this.name,
        team: this.team,
        comment: this.comment,
      }
      if ((this.name == "") | (this.team == "") | (this.comment == "")) {
        alert("全ての項目を入力してください")
      } else {
        addDoc(collection(db, "tweets"), tweet).then((ref) => {
          this.tweets.push({
            id: ref.id,
            ...tweet,
          })
        })
      }
      this.name = ""
      this.team = ""
      this.comment = ""
    },
    created() {
      getDocs(collection(db, "tweets")).then((snapshot) => {
        snapshot.forEach((doc) => {
          this.tweets.push({
            id: doc.id,
            ...doc.data(),
          })
        })
      })
    },
  },
}
</script>

<style></style>
