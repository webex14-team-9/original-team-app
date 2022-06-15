<template></template>

<script>
import { storage } from '@/plugins/storage'

export default {

      name:"Upload_image",
      props:{
          aritcle:{
              type:Object,
              required: true
          },
      },
};
  data() {
    return {
      thumbnail: this.article.thumbnail,
      loading: true,
      error: false,
      dialog: false,
      images: [],
      selectedImage: '',
      fileLoading: 0,
    }
  },
   async created() {
    try {
      const storageRef = await storage.ref(`articles/${this.article.id}`)
      const res = await storageRef.listAll()
      res.items.forEach(itemRef => {
        itemRef.getDownloadURL().then(url => {
          this.images.push(url)
        })
      })
    } catch(e) {
      this.error = true
      console.log(e)
    } finally {
      this.loading = false
    }
  },
</script>
