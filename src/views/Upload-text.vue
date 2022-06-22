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
        <br />

        <div class="control">
          <button class="button is-primary" v-onclick="submit">投稿</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth"
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage"
import { collection, addDoc } from "firebase/firestore"
import { db } from "./firebase"

export default {
  name: "Upload_text",
  data() {
    return {
      title: "新規投稿",
      form: {
        name: null,
        first_image: null,
        first_image_name: "---",
        second_image: null,
        second_image_name: "---",

        user: "",
        users: [],
        channel_name: "",
        message: "",
      },
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files || e.dataTransfer.files
      this.createImage(file[0])
      // 拡張子で分ける（※.が1つの想定です）
      const imgNameExe = file[0].name.split(".")

      // 拡張子から前
      let imgName = imgNameExe[0]

      // 拡張子から後ろ
      const imgExe = imgNameExe[1]

      // 表示したいMaxのByte数（全角10文字、半角20文字）
      const maxBytes = 20
      const imgNameBytes = encodeURIComponent(imgName).replace(
        /%../g,
        "x"
      ).length

      // 画像ファイルとMax Byte数の比較
      if (imgNameBytes > maxBytes) {
        const zenkaku = imgNameBytes - imgName.length
        if (zenkaku > 0) {
          imgName = imgName.slice(0, maxBytes / 2 - imgName.length) + ".."
        } else {
          imgName = imgName.slice(0, maxBytes - imgNameBytes) + ".."
        }
      }

      // 短くカットしたものと.と拡張子の文字列の連結
      imgName = imgName + "." + imgExe
      this.img_name = imgName
    },
    // createImage(file) {
    //   const reader = new FileReader()
    //   reader.onload = (e) => {
    //     this.uploadedImage = e.target.result
    //   }
    //   reader.readAsDataURL(file)
    // 'file' comes from the Blob or File API
    //   uploadBytes(storageRef, file).then(() => {
    //     console.log("Uploaded a blob or file!")
    //   })
    // },
    setImage() {
      const file = this.$refs.file
      const fileImg = file.files[0]
      if (fileImg.type.startsWith("image/")) {
        this.data.image = window.URL.createObjectURL(fileImg)
        this.data.name = fileImg.name
        this.data.type = fileImg.type
      }
    },
    submit() {
      const file = this.$refs.preview.files[0]
      const storage = getStorage()
      const storageRef = ref(storage, file.name)
      const uploadTask = uploadBytesResumable(storageRef, file)
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user)
          this.uid = user.uid
        } else {
          //
        }
      })

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          switch (snapshot.state) {
            case "paused":
              console.log("upload is paused")
              break
            case "running":
              console.log("upload is runnnig")
              break
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              break
            case "storage/canceled":
              break
            case "storage/unknown":
              break
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL)
            addDoc(collection(db, "travel"), {
              date: new Date(),
              user_name: this.uid,
              text: this.post,
              point: this.review,
              image_url: downloadURL,
            })
          })
        }
      )
      this.$router.push("/home")
    },
  },
}
</script>

<style></style>
