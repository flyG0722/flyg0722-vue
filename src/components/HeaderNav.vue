<template>
  <div class="navbar">
    <div
      v-for="link in links"
      :key="link.name"
      :class="['navbar-item', { active: isActive(link.path) }]"
      @click="navigateTo(link.path)"
    >
      {{ link.name }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const links = [
  { name: '首页', path: '/' },
  { name: '随笔', path: '/notes' },
  { name: '知识库', path: '/knowledge' },
  { name: '喜好', path: '/hobby' },
]

const router = useRouter()
const route = useRoute()

function isActive(path: string) {
  return route.path === path
}

function navigateTo(path: string) {
  router.push(path)
}
</script>
<style scoped lang="scss">
  .navbar {
    margin-top: 130px;
    display: flex; /* Flexbox布局使导航项水平排列 */
    gap: 30px; /* 项目间距 */
    flex-wrap: wrap;

    .navbar-item {
      padding: 5px 15px;
      cursor: pointer;
      text-align: center;
      border-radius: 5px;
      transition: background 0.5s ease, color 0.5s ease;
      flex: 1 1 auto;
      &.active {
        background: #b0a8a8;
        color: #fff;
      }

      &:hover {
        background: #e0e0e0;
      }
    }
  }
</style>
