// import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { testData, testPosts } from '../api/index'
import type { ColumnProps, PostProps } from '../typing'
interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number;
}
export interface GlobalDataProps {
  columns: ColumnProps[]
  posts: PostProps[]
  user: UserProps;
}

export interface State {
  count: number
}

// 定义 injection key
// export const key: InjectionKey<Store<State>> = Symbol()


export const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: {
      isLogin: true,
      name: 'mingdu',
      columnId: 1
    },
  },
  getters: {
    biggerColumnsLen: (state) => {
      return state.columns.filter((c: any) => c.id > 2).length
    },
    getColumnById: (state) => (id: number) => {
      return state.columns.find((c: any) => c.id === id)
    },
    getPostById: (state) => (cid: number) => {
      return state.posts.filter((post: any) => post.columnId === cid)
    }

  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: 'viking' }
    },
    CreatePost(state,newPost) {
      state.posts.push(newPost)
    } 
  },
  actions: {

  }
})


// export function useStore() {
//   return baseUseStore(key)
// }



export default {
  store
}

