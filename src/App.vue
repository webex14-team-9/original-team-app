<template>
  <div>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/my-page">MyPage</router-link>
    </div>
    <button v-on:click="logout">ログアウト</button>
    <button @click="login">ログイン</button>
    <router-view />
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { signOut } from "firebase/auth"
const provider = new GoogleAuthProvider()

export default {
  data() {
    return {
      data: null,
    }
  },
  methods: {
    login() {
      const auth = getAuth()
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
    logout() {
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          return {
            token: "",
          }
        })
        .catch((error) => {
          // An error happened.
          console.log(`ログアウトに失敗しました、(${error})`)
        })
    },
  },
}
</script>
