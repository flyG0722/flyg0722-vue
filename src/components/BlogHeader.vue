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
      @media (max-width: 768px) {
        bottom: 13px;
        left: 140px;
        font-size: 27px;
      }
      @media (max-width: 490px) {
        bottom: 10px;
        left: 130px;
        font-size: 25px;
      } 
    }
    .desc-signature {
      position: absolute;
      bottom: -35px;
      left: 160px;
      font-size: 20px;
      @media (max-width: 768px) {
        bottom: -35px;
        left: 140px;
        font-size: 17px;
      }
      @media (max-width: 490px) {
        bottom: -35px;
        left: 130px;
        font-size: 15px;
      } 
    }
    .my-icon {
      height: 120px;
      width: 120px;
      background: yellow;
      position: absolute;
      border-radius: 15px;
      bottom: -40px;
      left: 20px;
      @media (max-width: 768px) {
        height: 110px;
        width: 110px;
      }
      @media (max-width: 490px) {
        height: 100px;
        width: 100px;
      } 
    }
  }
  .navbar {
    position: absolute;
    bottom: 10px;
    left: 30px;
  }
}
</style>