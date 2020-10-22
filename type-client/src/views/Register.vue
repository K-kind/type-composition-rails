<template>
  <div>
    <h1>新規登録</h1>
    <div>
      <form @submit.prevent="onSubmit">
        <div>
          <label for="name">ユーザー名</label>
          <input v-model="params.name" id="name">
        </div>
        <div>
          <label for="email">メールアドレス</label>
          <input type="email" v-model="params.email" id="email">
        </div>
        <div>
          <label for="password">パスワード</label>
          <input type="password" v-model="params.password" id="password">
        </div>
        <div>
          <label for="passwordConfirmation">パスワード（確認）</label>
          <input type="password" v-model="params.passwordConfirmation" id="passwordConfirmation">
        </div>
        <button type="submit">登録</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import axios from '@/plugins/axios'

// type Data = {
//   params: {
//     name: string;
//     email: string;
//     password: string;
//     passwordConfirmation: string;
//   };
// }

export default defineComponent({
  name: 'Register',
  setup () {
    const state = reactive({
      params: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    })

    const onSubmit = async () => {
      try {
        const response = await axios.post('/users', { user: state.params })
        console.log(response)
      } catch (e) {
        return
      }
    }
    return { ...toRefs(state), onSubmit }
  }
})
</script>
