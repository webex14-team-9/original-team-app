<template>
  <div class="logout-content">
    <button v-on:click="logout">ログアウト</button>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth"

export default {
  methods: {
    logout() {
      const auth = getAuth()
      this.$router.push("/LogIn")
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
