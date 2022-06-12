<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/output">About</router-link>
    </nav>
    <OutputView />
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
