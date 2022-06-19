<template>
  <div class="page">
    <form class="form" @submit.prevent="submitImg()">
      <input type="file" accept="img/*" @change="changeImg" />
      <button type="submit" class="button">click</button>
    </form>
    <div>
      <p>{{ thumbnail }}</p>
      <p>{{ postData.thumbnail }}</p>
      <img :src="postData.thumbnail" alt="" />
    </div>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase"

export default {
  data() {
    return {
      thumbnail: "",
      postData: {
        thumbnail: "",
      },
    }
  },
  methods: {
    changeImg(e) {
      this.thumbnail = e.target.files[0]

      if (this.thumbnail) {
        const reader = new FileReader()
        reader.onload = () => {
          this.postData.thumbnail = reader.result + ""
        }
        reader.readAsDataURL(this.thumbnail)
        console.log("選択完了")
        this.submitImg(this.thumbnail)
      }
    },
    submitImg(thumbnail) {
      let storage = firebase.storage()
      let storageRef = storage.ref().child("file.png")
      storageRef
        .put(thumbnail)
        .then((res) => console.log(res))
        .catch((error) => console.log(error))
    },
  },
}
</script>

<style lang="scss" scoped></style>
