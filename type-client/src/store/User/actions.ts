import { ActionTree } from 'vuex'
import { UserState, RootState, AuthToken } from '@/store/types'
import axios from '@/plugins/axios'

const actions: ActionTree<UserState, RootState> = {
  setAuthToken: ({ commit } , authToken: AuthToken) => {
    commit('setAuthToken', authToken)
    return axios.post(
      '/cookie',
      { auth_tokens: JSON.stringify(authToken) },
      {
        headers: {
          ['access-token']: authToken['access-token'],
          client: authToken.client,
          uid: authToken.uid
        }
      }
    )
  }
  // add: async ({ commit }, todo: Todo) => {
  //   if (await someAsyncAddMethod(todo)) {
  //     commit('add', todo)
  //     // 成功
  //     return true
  //   }
  //   // 失敗
  //   return false
  // },

  // remove: async ({ commit }, id: string ) => {
  //   if (await someAsyncRemoveMethod(id)) {
  //     commit('remove', id)
  //     return true
  //   }
  //   return false
  // },

}

export default actions
