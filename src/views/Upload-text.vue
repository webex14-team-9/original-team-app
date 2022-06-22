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
          v-model="place"
        />
        <p>{{ place }}</p>
        <div class="control">
          <button class="button is-primary" v-onclick="postTweet">投稿</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/firebase"

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
        place: "",
      },
    }
  },
  methods: {
    onFileUpload(file) {
      const fileType = this.getFileType(file)
      if (!fileType) {
        this["flash/setFlash"]({
          message: "ファイルタイプが不正です。",
          type: "error",
        })
      }
      const storageRef = storage.ref(
        `articles/${this.article.id}/thumbnail.${fileType}`
      )
      const storage = getStorage()
      const uploadTask = storageRef.put(file)
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          this.fileLoading = percentage
        },
        (err) => {
          console.log(err)
          this["flash/setFlash"]({
            message: "ファイルのアップロードに失敗しました。",
            type: "error",
          })
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.fileLoading = 0
            this.thumbnail = downloadURL
          })
        }
      )
    },
    postTweet() {
      addDoc(collection(db, "PostingContents"))
      const file = this.$refs.preview.files[0]
      const storage = getStorage()
      const storageRef = ref(storage, file.name)
      const uploadTask = uploadBytes(storageRef, file)
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
          console.log("Upload is" + progress + "% done")
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
