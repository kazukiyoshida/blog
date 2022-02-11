<template>
  <div class="wrapSpHeader">
    <div class="wrapSns"></div>
    <div class="wrapTitle">
      <router-link :to="$C.route.home">
        <p class="headerTitle">kazuki</p>
        <p class="headerTitle">yoshida</p>
      </router-link>
    </div>
    <div class="wrapMenu">
      <router-link :to="$C.route.about" class="menu">about</router-link>
      <router-link :to="$C.route.blog" class="menu">blog</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

export default defineComponent({
  name: 'BlogSpHeader',
  inject: ['$C'],
});
</script>

<style lang="scss" scoped>
@import '../assets/stylesheet/mixins';

.wrapSpHeader {
  position: fixed;
  width: 100%;
  background-color: white;
  padding: 8px 30px 8px 30px;
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.6);

  /** line-height の基準 */
  line-height: 40px;
}

.wrapSns {
  /** 微妙に下にずれる問題の解決方法
      https://qiita.com/kiyoami/items/74f2fb1c30d475d35144 */
  display: inline-block;
  vertical-align: top;
  width: 35%;
}

.wrapTitle {
  display: inline-block;
  vertical-align: top;
  font-weight: 800;
  font-size: 20px;
  text-align: center;

  left: 50%;
  width: 30%;

  /** line-height の基準の0.5倍（2行なので） */
  line-height: 20px;
}

.wrapMenu {
  display: inline-block;
  text-align: right;
  width: 35%;
  /** line-height の基準の1倍（1行なので） */
  line-height: 40px;
}

.menu {
  font-weight: 500;
  padding: 0 0 0 10px;
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
