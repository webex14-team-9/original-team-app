<template>
  <div>

    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/output">About</router-link> |
      <router-link to="/my-page">MyPage</router-link>|
      <router-link to="/logIn">logIn</router-link>
    </div>
  </div>
  <router-view />
</template>

<script></script>


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


<style></style>
