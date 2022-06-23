<template>
  <div class="A-container">
    <h2>ようこそ</h2>
    <section class="login-content">
      <div class="login-form">
        <h3>Google認証はこちらから</h3>
        <h3>↓↓↓</h3>
        <div class="button-container">
          <button v-on:click="home">今すぐサインイン</button>
        </div>
      </div>
    </section>
  </div>
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
      const user = auth.currentUser
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
          this.$router.push("/UserProffile")

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
      if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName(displayName)
        const email = user.email(email)
        const emailVerified = user.emailVerified(emailVerified)

        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid
        console.log(uid)
      }
    },
  },
}
</script>

<style>
.A-container {
  height: 90vh;
}

.A-container h2 {
  color: rgb(21, 155, 196);
  font-size: 40px;
  text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff;
}

.login-content {
  background-color: rgb(37, 179, 126);
  opacity: 0.7;
  height: 550px;
  width: 80%;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 200px;
}

.login-form {
  text-align: center;
}
.login-form h3 {
  color: antiquewhite;
  font-size: 40px;
  text-shadow: 1px 2px 3px #5c1212;
  border-top: 50px;
}

.button-container button {
  font-size: 20px;
  width: 300px;
  margin: auto;
  height: 100px;
}
</style>
