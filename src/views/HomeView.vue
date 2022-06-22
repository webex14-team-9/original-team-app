<template>
  <div>
    <div class="trip">
      <h2>旅ログ🐾</h2>
    </div>
    <div>
      <div class="click">
        <button onclick="location.href='Upload.vue'">ログインページ</button>
      </div>
    </div>
    <div class="text">For the best trip</div>
  </div>
</template>

<style>
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
  font-family: "IM Fell DW Pica SC", serif;

  margin-top: 30px;
  font-size: 30px;
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
