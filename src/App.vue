<template>
  <header>
    <div class="header-content">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/Upload">画像アップロード</router-link>
        <router-link to="/logIn">logIn</router-link>
        <router-link to="/UserProffile">my-page</router-link>
        <router-link to="/Output">投稿ページ</router-link>
        <router-view />
      </nav>
    </div>
  </header>
</template>
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
  background-color: rgb(229, 229, 227);
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
