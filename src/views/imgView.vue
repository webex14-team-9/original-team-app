<template>
  <h3>画像取得して表示する</h3>
  <div>
    <button class="button" @click="getImg()">取得</button>
    <img src="gs://team9-fbf49.appspot.com/fbimages" target="_blank" />
  </div>
</template>

<script>
//import firebase from "firebase/storage"
import { getStorage, ref, getDownloadURL } from "firebase/storage"

export default {
  data() {
    return {
      getData: {
        fbimages: "",
      },
    }
  },
  _methods: {
    getImg() {
      const storage = getStorage()
      const fbstorageRef = ref(storage, this.fbimages).child()
      getDownloadURL(fbstorageRef).then((res) => {
        console.log(res)
        this.getData.fbimages = res
      })
    },
  },
  get methods() {
    return this._methods
  },
  set methods(value) {
    this._methods = value
  },
}
</script>

<style lang="scss" scoped></style>
