<template>
  <div class="page">
    <form class="form" @submit.prevent="submitImg">
      <input type="file" accept="img/*" @change="changeImg" />
      <button type="submit" class="button">click</button>
    </form>
    <div>
      <p>{{ thumbnail }}</p>
      <p>{{ postData.thumbnail }}</p>
      <img :src="postData.thumbnail" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thumbnail: "",
      postData: {
        thumbnail: "",
      },
    }
  },
  methods: {
    changeImg(e) {
      this.thumbnail = e.target.files[0]

      if (this.thumbnail) {
        const reader = new FileReader()
        reader.onload = () => {
          this.postData.thumbnail = reader.result + ""
        }
        reader.readAsDataURL(this.thumbnail)
      }
    },
    submitImg() {
      // ここでsubmitする
      const file = this.$refs.preview.files[0]
      this.url = URL.createObjectURL(file)
    },
  },
}
</script>

<style lang="scss" scoped></style>
