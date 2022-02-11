<template>
  <div class="component">
    <div class="topImages">
      <img src="../assets/images/selfie.jpeg" alt="selfie" class="topImage">
    </div>
    <div class="showHide">
      <div class="wrapSns">
        <a href="" target="_blank" class="sns"></a>
          <fa-icon :icon="['fab', 'twitter']" />
        <a href="" target="_blank" class="sns"></a>
        <a href="" target="_blank" class="sns"></a>
      </div>
    </div>
    <div class="wrapContents">
      <div class="whoAmI">
        <p class="sectionTitle"></p>
        <p class="line sectionTitle">{{ $t('about.whoAmI.title') }}</p>
        <p class="line">{{ $t('about.whoAmI.name') }}</p>
        <p class="line">{{ $t('about.whoAmI.birth') }}</p>
        <p class="line">{{ $t('about.whoAmI.where') }}</p>
      </div>
      <div class="Job">
        <p class="sectionTitle">{{ $t('about.jobTitle') }}</p>
        <p class="line">{{ $t('about.job3') }}</p>
        <p class="line">{{ $t('about.job2') }}</p>
        <p class="line">{{ $t('about.job1') }}</p>
      </div>
      <div class="History">
        <p class="sectionTitle">{{ $t('about.historyTitle') }}</p>
        <p class="line">{{ $t('about.history3') }}</p>
        <p class="line">{{ $t('about.history2') }}</p>
        <p class="line">{{ $t('about.history1') }}</p>
      </div>
      <div class="Like">
        <p class="sectionTitle">趣味</p>
        <p class="line">{{ $t('about.like1') }}</p>
        <p class="line">{{ $t('about.like2') }}</p>
      </div>
      <div class="blank"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',
  components: {},
});
</script>

<style lang="scss" scoped>
@import '../assets/stylesheet/mixins';

.component {
  background: rgba(0,0,0,0.85);
  @include pc {
    /** PC の方が SP よりもなぜか明るく見えるので透過度を下げる */
    background: rgba(0,0,0,0.90);
  }
  color: white;
  height: 100vh;
  margin: 0;
  box-shadow: 0px 4px 8px rgba(0,0,0,5);
  overflow:auto;
}

.topImages {
  padding: 100px 0 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @include pc {
    padding: 100px 0 70px 0;
  }
}

.topImage {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  width: 140px;
  height: 140px;
}

.wrapSns {
  color: 'white';
  font-size: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.sns {
  padding: 0 10px 0 0;
}

.wrapContents {
  padding: 0 30px 0 30px;
  @include pc {
    padding: 0 60px 0 60px;
  }
}

.wrapLikeDislike {
  @include pc {
    display: flex;
    flex-direction: row;
    justify-content: left;
  }
}

.whatILike {
  margin: 0 20% 0 0;
}

.sectionTitle {
  font-size: 30px;
  padding: 30px 0 0 0;
}

.description {
  padding: 20px 0 20px 0;
}

.blank {
  padding: 100px 0 0 0;
}

.line {
  padding: 5px 0 5px 0;
}

.space {
  margin-left: 40px;
}

.extLinkIcon {
  margin: 0 6px 0 6px;
  font-size: 14px;
}
</style>
