<template>
  <div class="midasi">
    <img
      src="https://cdn.pixabay.com/photo/2019/06/01/22/01/seychelles-4245171_960_720.jpg"
      alt="sea2"
    />
  </div>
  <div class="main1">
    <div class="sentence1">
      <h1>旅に出よう</h1>
      <br />
      <h3>未知の世界へ出ることは貴重な体験だ。</h3>
      <br />
      <h3>さぁ、出かけよう。</h3>
    </div>
    <div class="picture1">
      <img
        src="https://cdn.pixabay.com/photo/2017/10/23/05/56/summer-2880261_960_720.jpg"
        alt="sea"
      />
    </div>
  </div>
  <div class="main2">
    <div class="picture2">
      <img
        src="https://cdn.pixabay.com/photo/2016/06/25/12/48/go-pro-1478810_960_720.jpg"
        alt="camela"
      />
    </div>
    <div class="sentence2">
      <h1>一つのカメラから。</h1>
      <br />
      <h3>一つのシャッター音から広がる</h3>
      <br />
      <h3>共有の輪へ飛び込もう。</h3>
    </div>
  </div>
</template>

<style>
.midasi {
  height: 40vh;
}

.midasi img {
  height: 100vh;
  width: 100%;
}

.main1 {
  background-color: bisque;
  opacity: 0.9;
  display: flex;
  justify-content: space-between;
  text-align: center;
  height: 80vh;
}

.picture1 img {
  width: 500px;
  margin-right: 200px;
  margin-top: 100px;
}

.sentence1 {
  margin-top: 100px;
  margin-left: 300px;
}

.sentence1 h1 {
  font-size: 50px;
  color: rgb(60, 60, 60);
  text-shadow: 1px 2px 3px #130b0b;
}

.sentence1 h3 {
  font-size: 25px;
  margin-right: 20px;
}

.main2 {
  background-color: rgb(113, 185, 159);
  opacity: 0.9;
  display: flex;
  justify-content: space-between;
  text-align: center;
  height: 74vh;
}

.picture2 img {
  width: 500px;
  margin-left: 200px;
  margin-top: 100px;
}

.sentence2 h3 {
  font-size: 25px;
  margin-right: 300px;
}

.sentence2 h1 {
  font-size: 50px;
  color: rgb(60, 60, 60);
  text-shadow: 1px 2px 3px #130b0b;
  margin-left: 50px;
  margin-right: 300px;
  margin-top: 100px;
}
</style>
