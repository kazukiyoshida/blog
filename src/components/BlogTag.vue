<template>
  <div class="component">
    <a href="#" class="tag">{{ name }}</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlogTag',
  props: ['name'],
});
</script>

<style lang="scss" scoped>
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
