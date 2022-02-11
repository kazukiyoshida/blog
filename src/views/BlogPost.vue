<template>
  <div class="component">
    <div class="wrapSpHeader"></div>
    <div class="wrapBlog">
      <p class="title"></p>
      <p class="createdAt"></p>
      <span class="wrapTags"></span>
      <span class="post"></span>
      <span class="blank"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlotPost',
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

.wrapBlog {
  height: 100vh;
  padding: 90px 30px 30px 30px;
  overflow: auto;

  @include pc {
    padding: 90px 130px 30px 130px;
  }
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
