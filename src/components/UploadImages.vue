<template>
  <div>
    <label v-if="!vallue" class="upload-content-space user-photo default">
      <input ref="file" class="file-button" type="file" @change="upload" />
      アップロードする
    </label>

    <div v-if="value" class="uploaded">
      <label class="upload-content-space user-photo">
        <input ref="file" class="file-button" type="file" @change="upload" />
        <img class="user-photo-image" src="value" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadImages",
  props: {
    value: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      file: null,
    }
  },
  methods: {
    async upload(event) {
      const files = event.target.failes || event.dataTransfer.files
      const file = files[0]
      if (this.checkFile(file)) {
        const picture = await this.getBase64(file)
        this.$emit("input", picture)
      }
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
      })
    },
    checkFile(file) {
      let result = true
      const SIZE_LIMIT = 500000000

      if (!file) {
        result = false
      }

      if (file.size > SIZE_LIMIT) {
        result = false
      }
      return result
    },
  },
}
</script>
