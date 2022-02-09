<template>
  <div class="app">
    <div class="wrapAll">
      <div class="wrapMiddle">
        <div class="wrapSide">
          <div class="side-title">
            <p>kazuki</p>
            <p>yoshida</p>
          </div>
          <div class="side-sns">
          </div>
          <div class="side-desc">
          </div>
          <div class="side-buttons">
          </div>
          <div class="side-lang">
          </div>
        </div>
        <div class="wrapContent">
          <router-view/>
        </div>
      </div>
      <div class="wrapFooter">
        <div class="footer footer-white"> © 2022 KazukiYoshida </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

@import 'assets/stylesheet/mixins';
$padding-size: 20px;
$hero-image: "assets/images/unsplash-min.png";

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
    bottom: 50px;
    width: 30%;
    padding: 0 60px 0 60px;
  }
}

.side-title {
  color: white;
  font-weight: bold;
  display: inline-block;

  font-size: 70px;
  line-height: 70px;

  @include pc {
    font-size: 70px;
    line-height: 70px;
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
    display: inline-block;
  };
}

.side-sns {
  color: 'white';
  font-size: 40px;

  @include pc {
    font-size: 40px;
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
