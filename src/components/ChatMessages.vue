<!-- ChatMessages.vue -->
<template>
    <div class="messages" ref="messagesContainer">
      <div v-for="msg in messages" :key="msg.timestamp" class="message">
        <strong class="user">{{ msg.user }}:</strong> {{ msg.text }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, defineProps } from 'vue';
  
  const props = defineProps({
    messages: {
      type: Array,
      required: true
    }
  });
  
  const messagesContainer = ref(null);
  
  // 自动滚动到消息区域底部的函数
  const scrollToBottom = () => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  };
  
  // 监听消息变化，每当消息变化时自动滚动
  watch(
    () => props.messages,
    () => {
      scrollToBottom();
    },
    { immediate: true }
  );
  </script>
  
  <style scoped>
  .messages {
    max-height: 300px;
    overflow-y: auto;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 4px;
    background: #fafafa;
  }
  
  .message {
    margin-bottom: 10px;
  }
  
  .user {
    color: #007bff;
    font-weight: bold;
  }
  </style>
  