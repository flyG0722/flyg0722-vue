<template>
  <div class="header-container">
    <div class="card-desc">
      <div class="desc-name">
        flyfly
      </div>
      <div class="desc-signature">
        flyfly
      </div>
      <div class="my-icon">

      </div>
    </div>
    <HeaderNav></HeaderNav>
  </div>
</template>

<script setup lang="ts">
  import HeaderNav from './HeaderNav.vue';
</script>

<style scoped lang="scss">
.header-container {
  height: 40vh;
  background: pink;
  position: relative;
  .card-desc {
    height: 30vh;
    background: rgb(203, 203, 208);
    position: relative;
    .desc-name {
      position: absolute;
      bottom: 15px;
      left: 160px;
      font-size: 30px;
    }
    .desc-signature {
      position: absolute;
      bottom: -35px;
      left: 160px;
      font-size: 20px;
    }
    .my-icon {
      height: 120px;
      width: 120px;
      background: yellow;
      position: absolute;
      border-radius: 15px;
      bottom: -40px;
      left: 20px;
    }
  }
  .navbar {
    position: absolute;
    bottom: 10px;
    left: 30px;
  }
}
</style>