<template>
  <div>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/my-page">MyPage</router-link>
      <router-link to="/BeforSignIn">サインアウトする</router-link>
      <router-link to="/AfterSignIn">サインインする</router-link>
    </div>
    <router-view />
    <div v-if="isLoggin">ログインしてます。</div>
    <div v-else>ログインしてません。</div>
    <div @click="login">ログイン</div>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  data() {
    return {
      isLoggin: false,
    }
  },
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log({ result })
          if (result.user) {
            this.isLogin = true
          }
        })
    },
  },
}
</script>
