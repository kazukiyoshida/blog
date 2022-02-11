<template>
  <div class="component">
    <div class="tagList" v-for="tag in tags.split(',')" :key="tag">
      <a href="#" class="tag">{{ tag }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlogTag',
  props: ['tags'],
});
</script>

<style lang="scss" scoped>

.tagList {
  display: inline-block;
  padding: 3px 3px 3px 0px;
}

.tag {
  font-size: 12px;
  font: bold;
  color: black;
  display: block;
  text-align: center;
  border-radius: 5px;
  background-color: #EEEEEE;
  display: inline-block;
  padding: 2px 6px 2px 6px;

  &:hover {
    text-decoration: none;
  }
}

a:visited, a {
  color: black;
  text-decoration: none;
  &:hover {
    color: gray;
  }
}

</style>
