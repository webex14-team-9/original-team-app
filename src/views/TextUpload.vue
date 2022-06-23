<template>
  <div id="mypage">
    <h2>あなたのノート</h2>
    <p>{{ note_content }}</p>
    <div id="notesIndex" v-for="note in notes" :key="note.content">
      <p class="noteContent">{{ note.content }}</p>
    </div>
    <p><textarea v-model="note_content"></textarea></p>
    <p><button @click="saveContent(note_content)">ノートを保存する</button></p>
  </div>
</template>

<script>
//import firebase from "@/plugins/firebase"
// export default {
//   name: "MyPage",
//   props: ["user"],
//   data() {
// コンポーネントをロードする前に毎回呼び出されます
//     return { note_content: "hello", notes: [] }
//   },
//   created: function () {
//     firebase
//       .database()
//       .ref("notes/" + this.user.uid)
//       .once("value")
//       .then((result) => {
//         if (result.val()) {
//           this.notes = result.val()
//         }
//       })
//   },
//   methods: {
//     saveContent: function (value) {
// 新しいテキストのためのキーを取得
//       var newNoteKey = firebase.database().ref().child("notes").push().key
//       firebase
//         .database()
//         .ref("notes/" + this.user.uid + "/" + newNoteKey)
//         .set({ content: value })
//     },
//   },
// }
</script>
