import axios from 'axios'
import { createStore } from 'vuex'
import postIndex from '../../contents/json/index.json'

export default createStore({
  state: {
    posts: {} as Record<string, any>,
    postIndex: postIndex.reverse().filter((x: any) => !x.draft),
    loading: false,
  },
  getters: {
    getPostIndex: (state: any): any => () => {
      return state.postIndex
    },
    getPostHeader: (state: any): any => (blogId: string): any => {
      const xs = state.postIndex.filter((x: any) => x.id == blogId)
      return xs.length ? xs[0] : undefined
    },
    getPostContent: (state: any): any => (blogId: string): any => {
      console.log(state.posts[blogId])
      return state.posts[blogId]
    },
    getLoading: (state: any): any => () => {
      return state.loading
    },
  },
  mutations: {
    savePost(state, payload: { blogId: string, post: any }): void {
      const { blogId, post } = payload
      state.posts[blogId] = post
    },
    updateLoading(state, loading: boolean): void {
      state.loading = loading
    }
  },
  actions: {
    async fetchPost({ commit, state }, payload: { base: string, blogId: string }) {
      const { base, blogId } = payload
      if (state.posts[blogId]) {
        return
      }
      commit('updateLoading', true)
      try {
        const { data } = await axios.get("https://raw.githubusercontent.com/kazukiyoshida/nuxt-blog/master/src/articles/" + base)
        commit('savePost', { blogId, post: data })
      } catch (err) {
        console.log("====== err =========", err)
      } finally {
        commit('updateLoading', false)
      }
    },
  },
  modules: {
  }
})
