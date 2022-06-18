<template>
  <div>
    <button @click="logout">ログアウト</button>
    <button @click="login">Googleアカウントでログイン</button>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth"
const provider = new GoogleAuthProvider()

export default {
  data() {
    console.log("何にもないよ")
    return {
      token: "",
    }
  },
  methods: {
    login() {
      const auth = getAuth()
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log("ログインできたで")
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
          console.log("ログアウトできてます。")
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
