<template>
  <div class="component">
    <div class="wrapSpHeader"></div>
    <div class="wrapAllBlogs">
      <div class="wrapBlog"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlotTop',
  components: {},
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
}

a:visited, a {
  color: black;
  text-decoration: none;
  &:hover {
    color: gray;
  }
}
</style>
