<template>
  <div class="app">
    <div class="wrapAll">
      <div class="wrapMiddle">
        <div class="wrapSide" :class="topPageFlg ? '' : 'hideShow'">
          <div class="side-title">
            <router-link to="/">
              <p>kazuki</p>
              <p>yoshida</p>
            </router-link>
          </div>
          <div class="side-sns">
            <a class="sns" :href="$C.link.twitter_url" target="_blank"><fa :icon="['fab', 'twitter']" /></a>
            <a class="sns" :href="$C.link.github_url" target="_blank"><fa :icon="['fab', 'github']" /></a>
            <a class="sns" :href="$C.link.instagram_url" target="_blank"><fa :icon="['fab', 'instagram']" /></a>
          </div>
          <div class="side-desc">
            <a :href="$C.link.google_maps_url" target="_blank">
              <p>{{ t('top.desc1') }}</p>
            </a>
            <p>{{ t('top.desc2') }}</p>
            <p>{{ t('top.desc3') }}</p>
          </div>
          <div class="side-buttons">
            <router-link to="/about" class="button">about</router-link>
            <router-link to="/blog" class="button">blog</router-link>
          </div>
          <div class="side-lang">
            <div v-if="locale == 'en'" class=lang @click="changeLang('ja')">{{ t('top.changeLang') }}</div>
            <div v-else class=lang @click="changeLang('en')">{{ t('top.changeLang') }}</div>
          </div>
        </div>
        <div class="wrapContent">
          <div v-if="true">
            <router-view></router-view>
          </div>
        </div>
      </div>
      <div class="wrapFooter" :class="topPageFlg ? '' : 'hideShow'">
        <div class="footer footer-white"> © 2022 KazukiYoshida </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, inject } from 'vue';
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'Home',
  inject: ['$i18n', '$C'],
  setup() {
    const route = useRoute()
    const { t, locale } = useI18n({ useScope: 'global' })
    const changeLang = (lang: string) => {
      locale.value = lang
    }
    const topPageFlg = computed(() => {
      return route.path == '/'
    })
    return {
      changeLang,
      topPageFlg,
      locale,
      t,
    }
  }
});
</script>

<style lang="scss">
@import '../assets/stylesheet/mixins';
$padding-size: 20px;
$hero-image: "../assets/images/unsplash-min.png";

* {
  margin: 0;
  padding: 0;
}

html {
  -webkit-overflow-scrolling: touch;
}

body {
  height: 100vh;
  background-color: black;
  background-image: url($hero-image);
  background-size: cover;
  background-position: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  overscroll-behavior: none;
}

.wrapAll {
  position: relative;
  height: auto;
  min-height: 100vh;
}

.wrapMiddle {
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

.wrapSide {
  position: absolute;
  bottom: 50px;
  width: 100%;
  padding: 0 40px 0 40px;

  @include pc {
    padding: 0 60px 0 60px;
    position: absolute;
    bottom: 40px;
    width: 30%;
    padding: 0 60px 0 60px;
  }
}

.side-title {
  color: white;
  font-weight: bold;
  display: inline-block;
  padding-bottom: 15px;

  font-size: 70px;
  line-height: 70px;

  @include pc {
    font-size: 70px;
    line-height: 65px;
  }
}

.side-desc {
  color: white;
  font-size: 16px;
  line-height: 24px;
  display: inline-block;

  @include pc {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 10px;
    display: inline-block;
  };
}

.side-sns {
  color: 'white';
  font-size: 40px;

  @include pc {
    font-size: 36px;
    padding-bottom: 10px;
  }
}

.sns {
  padding: 0 10px 0 0;
}

.side-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.button {
  font-size: 14px;
  display: block;
  width: 40%;
  padding: 8px;
  margin: 10px 10px 10px 10px;
  text-align: center;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
}

.side-lang {
  color: white;
  font-size: 14px;
}

.wrapContent {
  /** height: 100vh; */
  height: 100%;

  @include pc {
    width: 72%;
    float: right;
  }
}

.footer{
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 10px;
}

.footer-black {
  color: black;
}

.footer-white {
  color: white;
  text-shadow: 0px 0px 1em black, 0px 0px 1em black;
}

a:visited, a {
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
