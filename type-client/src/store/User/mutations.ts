import { MutationTree } from 'vuex'
import { UserState, User, AuthToken } from '@/store/types'

const mutations: MutationTree<UserState> = {
  setUser: (state, user: User) => {
    state.user = user
  },
  setAuthToken: (state, authToken: AuthToken) => {
    state.authToken = authToken
  }
}

export default mutations
