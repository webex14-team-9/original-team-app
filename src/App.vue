<template>
  <div class="background">
    <Header />
  </div>
  <Footer />
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer.vue"

export default {
  name: "app",
  components: { Header, Footer },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.background {
  margin: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80");
  background-repeat: no-repeat;
  background-position: 0% 50%;
}

nav a {
  padding-top: auto;
  font-weight: bold;
  color: #2c3e50;
  font-size: 20px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
