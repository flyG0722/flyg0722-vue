<template>
  <div>
    <div class="essay-container">
      <div v-for="(item) in essayData" :key="item.id" class="essay-item">
        <div class="essay-title">
          {{ item.title}}
        </div>
        <div class="type-date">
          <span class="essay-type">
            {{item.type}}
          </span>
          <span class="essay-data">
            {{item.date}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { essayData } from '@/data/essay';

</script>

<style scoped lang="scss">
  .essay-container {
    height: 900px;
    background: blue;
    .essay-item {
      margin-top: 30px;
      background: grey;
      .essay-title {
        padding-left: 12px;
        overflow-wrap: break-word;
        font-size: 30px;
      }
      .type-date {
        padding-left: 16px;
        font-size: 12px;
        display: flex;
        justify-content: flex-end;
        .essay-type {
        }
        .essay-data {
          margin-left: 20px;
          margin-right: 20px;
        }
      }
    }
  }
</style>