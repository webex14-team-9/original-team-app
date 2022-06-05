<template>
  <div id="login">
    <h2>入力</h2>

    <div v-for="information in informations" :key="information.id">
      ユーザーネーム：{{ Informations.userName }}<br />
      password:{{ Informations.password }}
    </div>

    <button v-on:click="login()">ログイン</button>
  </div>
</template>

<script>
import { collection, addDoc, getDoc } from "firebase/firestore"
import{ db } from "./firebase"

export default {
    data() {
        return {
           Informations:[
            userName:"" ,
            password:"" ,
        ],}
    },

    methods: {
       login (){
        addDoc(collection(db, "Informations"), Information).then((ref) => {
            this.Informations.push({
            id: ref.id,
            ...Information,
          })}
        })
      },
    },
  }
</script>
