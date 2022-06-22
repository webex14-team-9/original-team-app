<template>
  <h2>ようこそ</h2>
  <section class="login-content">
    <div class="login-form">
      <button v-on:click="home">Googleアカウントでログイン</button>
    </div>
    <div class="login-info"></div>
  </section>
</template>

<script>
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth"

const provider = new GoogleAuthProvider()

export default {
  data() {
    return {
      token: false,
    }
  },
  methods: {
    home() {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid
          console.log(uid)
        } else {
          // User is signed out
          // ...
        }
      })
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential.accessToken
          const user = result.user

          console.log(token)
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          const email = error.customData
          const credential = GoogleAuthProvider.credentialFormError

          console.log(errorCode)
          console.log(errorMessage)
          console.log(email)
          console.log(credential)
        })
    },
  },
}
</script>

<style>
.login-content {
  background-color: #135e45;
  height: 500px;
}
</style>
