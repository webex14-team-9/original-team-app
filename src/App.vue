<template>

  <div id="app">
    <Upload v-model="picture" />
    <img src="picture" />
  </div>
</template>

<script>
import Upload from "./components/UploadImages.vue"

export default {
  name: "app",
  components: {
    Upload,
  },
  data() {
    return {
      picture: null,
    }
  },
}
</script>
<style>
 {
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}

body {
  color: #2c2d30;
  font-size: 1.6rem;
  font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "Meiryo",
    "メイリオ", "Osaka", "MS PGothic", arial, helvetica, clean, sans-serif;
  line-height: 1.5;

  <div>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/output">About</router-link>
    </nav>
    <OutputView />


    <Uploadtext />
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/Upload">画像アップロード</router-link>

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>

    </nav>
    <router-view />
  </div>
</template>
<script>
// import OutputView from "./components/Output.vue"
// export default {
//   components: {
//     OutputView,
//   },
// }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;

}
</style>
