<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main-container">
    <RouterView />
  </div>
</template>

<style lang="scss">
  body {
    background: #f1f3fa;
  }
  .main-container {
    width: 60vw;
    margin: 0 auto;
    background: red;
    padding: 1px;
    padding-top: 0;
    border: 3px solid #fff;
    border-top: none;

    @media (max-width: 768px) {
      width: 80vw;
    }
    @media (max-width: 490px) {
      width: 95vw;
      padding: 0.5vw;
      border-width: 0.1vw;
    } 
  }
  
</style>
