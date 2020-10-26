import { GetterTree } from 'vuex'
import { UserState, RootState } from '@/store/types'

const getters: GetterTree<UserState, RootState> = {
  user: (state: UserState) => {
    return state.user
  },
  authToken: (state: UserState) => {
    return state.authToken
  },
}

export default getters
