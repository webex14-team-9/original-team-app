<template>
  <div id="app">
    <div class="background">
      <div class="trip">
        <h2>旅ログ🐾</h2>
      </div>
      <div>
        <div class="click">
          <button onclick="location.href='Upload.vue'">ログインページ</button>
        </div>
      </div>
      <nav id="nav">
        <ul>
          <router-link to="/">Home</router-link>
          |
          <router-link to="/about">About</router-link>
          |
        </ul>
      </nav>
      <div class="text">For the best trip</div>
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
button {
  color: #fff;
  border: 2px solid #fff;
  border-radius: 0;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#dbb7ff),
    to(#c6c6ff)
  );
  background-image: -webkit-linear-gradient(left, #eee8aa 0%, #c6c6ff 100%);
  background-image: linear-gradient(to right, #eee8aa 0%, #c6c6ff 100%);
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
button:hover {
  -webkit-transform: translate(0, -2px);
  transform: translate(0, -2px);
  color: #fff;
  -webkit-box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}
.trip {
  margin-top: 30px;
  font-size: 30px;
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
.text {
  margin-top: 5px;
  font-family: "IM Fell DW Pica SC", serif;
  font-size: 40px;
  padding: 30px;
  font-weight: bold;
  color: #2c3e50;
}
</style>
