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
          <label for="password_confirmation">パスワード（確認）</label>
          <input type="password" v-model="params.password_confirmation" id="password_confirmation">
        </div>
        <button type="submit">登録</button>
      </form>
      <div>
        <button @click="clickHoge">hoge</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from '@vue/composition-api'
import { User, AuthToken } from '@/store/types'
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
  setup (props, context: SetupContext) {
    const state = reactive({
      params: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    })

    const onSubmit = async () => {
      let response
      try {
        response = await axios.post('/auth', state.params)
      } catch (e) {
        alert(e)
        return
      }
      if (!response) { return }

      const user: User = {
        id: response.data.data.id,
        name: response.data.data.name,
        email: response.data.data.email
      }

      const authToken: AuthToken = {
        ['access-token']: response.headers['access-token'],
        client: response.headers.client,
        uid: response.headers.uid
      }
      context.root.$store.commit('user/setUser', user)
      try {
        await context.root.$store.dispatch('user/setAuthToken', authToken)
        alert('登録完了')
      } catch (e) {
        alert(e)
      }
    }

    const clickHoge = async () => {
      const response = await axios.get('/auth', {
        headers: {
          // withCredentials: 'include'
        }
      })
      console.log(response)
    }

    return { ...toRefs(state), onSubmit, clickHoge }
  }
})
</script>
