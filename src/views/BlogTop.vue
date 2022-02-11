<template>
  <div class="component">
    <div class="wrapSpHeader"></div>
    <div class="wrapAllBlogs">
      <div v-for="post in posts.reverse().filter((x) => !x.draft)" :key="post.id">
        <div class="wrapBlog">
          <router-link :to="'/blog/' + post.id" class="blog">
            <p class="title">{{ post.title }}</p>
            <p class="createdAt">posted at {{ convertDate(post.created_at) }}</p>
            <div v-for="tag in post.tags.split(',')" :key="tag" class="tag">
              <BlogTag :name="tag" />
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import moment from 'moment';
import posts from '../contents/index.json'
import BlogTag from '../components/BlogTag.vue'

export default defineComponent({
  name: 'BlotTop',
  components: { BlogTag },
  setup() {
    const convertDate = (dt: string): string => {
      return moment(Date.parse(dt)).format('YYYY/MM/DD')
    }
    return {
      posts,
      convertDate,
    }
  }
});
</script>

<style lang="scss" scoped>
@import '../assets/stylesheet/mixins';

.component {
  background-color: white;
}

.wrapSpHeader {
  z-index: 999;
}

.wrapAllBlogs {
  height: 100vh;
  padding: 70px 0 120px 0;
  overflow: auto;
}

.wrapBlog {
  padding: 40px 30px 0 30px;

  @include pc {
    padding: 40px 130px 0 130px;
  }
}

.blog {
  color: black;
  font-size: 16px;

  &:hover {
    text-decoration: none;
    color: gray;
  }
}

.title {
  font-size: 20px;
  font: bold;
}

.createdAt {
  font-size: 14px;
  color: gray;
}

.tag {
  display: inline-block;
  padding: 3px 3px 3px 0px;
}

a:visited, a {
  color: black;
  text-decoration: none;
  &:hover {
    color: gray;
  }
}
</style>
