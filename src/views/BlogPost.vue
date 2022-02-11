<template>
  <div class="wrapPage">
    <div class="backButton">
      <router-link :to="$C.route.blog">＜ Back to Index</router-link>
    </div>
    <div class="wrapSpHeader"></div>
    <div class="wrapBlog">
      <p class="title">{{ postHeader.title }}</p>
      <p class="createdAt">posted at {{ convertDate(postHeader.created_at) }}</p>
      <div class="wrapTags">
        <BlogTag :tags="postHeader.tags" />
      </div>
      <div>
        <loading :active="loading" spinner="bar-fade-scale" />
      </div>
      <div class="post" v-if="postContent" v-html="postContent.bodyHtml.join('\n')"></div>
      <div class="blank"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from 'vue';
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import moment from 'moment';
import BlogTag from '../components/BlogTag.vue'

export default defineComponent({
  name: 'BlotPost',
  inject: ['$C'],
  components: { BlogTag },
  setup() {
    const route = useRoute()
    const store = useStore()
    const postHeader = store.getters.getPostHeader(route.params.blogId)
    store.dispatch('fetchPost', { base: postHeader.base, blogId: route.params.blogId})
    const postContent = computed(() => {
      return store.getters.getPostContent(route.params.blogId)
    })
    const loading = computed(() => {
      return store.getters.getLoading()
    })
    const convertDate = (dt: string): string => {
      return moment(Date.parse(dt)).format('YYYY/MM/DD')
    }
    return {
      loading,
      postHeader,
      postContent,
      convertDate,
    }
  }
});
</script>

<style lang="scss" scoped>
@import '../assets/stylesheet/mixins';

.wrapPage {
  height: 100vh;
  overflow: auto;
  background-color: white;
}

.wrapSpHeader {
  z-index: 999;
}

.wrapBlog {
  /** height: 100vh; */
  padding: 90px 30px 30px 30px;
  /** overflow: auto; */

  @include pc {
    padding: 90px 130px 30px 130px;
  }
}

a:visited, a {
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

.backButton {
  padding: 20px 0px 0px 20px;
}

.title {
  font-size: 20px;
  font: bold;
  padding: 20px 0 0 0;
}

.createdAt {
  font-size: 14px;
  color: gray;
}

.wrapTags {
  padding: 40px 0 40px 0;
}

.tag {
  display: inline-box;
}

.post {
  @import '../assets/stylesheet/github';
}

.blank {
  padding: 80px 0 0 0;
}
</style>
