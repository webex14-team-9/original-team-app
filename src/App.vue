<template>
  <div id="app">
    <div class="background">
      <nav id="nav">
        <ul>
          <router-link to="/">Home</router-link>
          |
          <router-link to="/about">About</router-link>
          |
        </ul>
      </nav>

      <router-view />
    </div>
  </div>
</template>

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
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80");
  background-repeat: no-repeat;
  background-position: 0% 50%;
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
