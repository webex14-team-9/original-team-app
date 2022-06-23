<template>
  <header>
    <div class="header-content">
      <nav>
        <router-link to="/">はじまり</router-link>|
        <router-link to="/HowTo">旅の綴り方</router-link>|
        <router-link to="/Upload">画像アップロード</router-link>|
        <router-link to="/logIn">ログイン</router-link>|
        <router-link to="/UserProffile">私の旅路</router-link>|
        <router-link to="/Output">旅の記録</router-link>|
      </nav>
    </div>
  </header>
  <router-view />
</template>

<script>
export default {
  name: "site-header",
}
</script>

<style>
.header-content {
  background-color: rgb(158, 197, 187);
  height: 50px;
  text-align: center;
  border-bottom: 1mm;
  padding-top: 40px;
}
</style>
