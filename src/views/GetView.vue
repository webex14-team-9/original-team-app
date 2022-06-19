<template>
  <div class="page">
    <form class="form" @submit.prevent="submitImg()">
      <input type="file" accept="img/*" @change="changeImg" />
      <button type="submit" class="button">click</button>
      <div>
        <p>{{ thumbnail }}</p>
        <p>{{ postData.thumbnail }}</p>
        <img :src="postData.thumbnail" alt="" />
      </div>
    </form>
    <div>
      <button class="button" @click="getImg()">取得</button>
      <img :src="getData.thumbnail" alt="" />
    </div>
  </div>
</template>

<script>
import firebase from "firebase/storage"

export default {
  data() {
    return {
      thumbnail: "",
      postData: {
        thumbnail: "",
      },
      getData: {
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
    getImg() {
      let storage = firebase.storage()
      let storageRef = storage.ref().child("file.png")
      storageRef.getDownloadURL().then((res) => {
        console.log(res)
        this.getData.thumbnail = res
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
