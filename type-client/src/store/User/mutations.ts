import { MutationTree } from 'vuex'
import { UserState, User } from '@/store/types'

const mutations: MutationTree<UserState> = {
  set: (state, user: User) => {
    state.user = user
  },
}

export default mutations
