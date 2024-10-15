<template>
    <div class="container">
      <div v-if="loggedIn" class="chat-room">
        <h2>聊天室</h2>
        <ChatMessages :messages="messages" /> <!-- 使用 ChatMessages 组件 -->
        <input
          v-model="newMessage"
          @keyup.enter="sendMessage"
          class="message-input"
          placeholder="输入消息..."
        />
      </div>
  
      <div v-else class="auth-form">
        <h2>{{ isRegistering ? '注册' : '登录' }}</h2>
  
        <input v-model="username" class="input" placeholder="用户名" />
        <input
          v-model="password"
          class="input"
          type="password"
          placeholder="密码"
        />
  
        <button
          @click="isRegistering ? register() : login()"
          class="btn primary"
        >
          {{ isRegistering ? '注册' : '登录' }}
        </button>
  
        <p class="toggle" @click="toggleRegister">
          {{ isRegistering ? '已有账号？登录' : '没有账号？注册' }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import ChatMessages from '@/components/ChatMessages.vue';
  
  const username = ref('');
  const password = ref('');
  const loggedIn = ref(false);
  const isRegistering = ref(false);
  const newMessage = ref('');
  const messages = ref([]);
  let socket = null;
  
  const apiUrl = '/api'; // 使用代理路径
  
  const login = async () => {
    try {
      await axios.post(`${apiUrl}/login`, {
        username: username.value,
        password: password.value,
      });
      loggedIn.value = true;
      connectWebSocket();
    } catch (error) {
      alert('登录失败：' + error.response?.data || '请重试');
    }
  };
  
  const register = async () => {
    try {
      await axios.post(`${apiUrl}/register`, {
        username: username.value,
        password: password.value,
      });
      alert('注册成功，请登录');
      isRegistering.value = false;
    } catch (error) {
      alert('注册失败：' + error.response?.data || '请重试');
    }
  };
  
  const toggleRegister = () => {
    isRegistering.value = !isRegistering.value;
  };
  
  const connectWebSocket = () => {
    socket = new WebSocket('ws://8.140.237.76:3000');
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: 'auth', username: username.value }));
    };
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'history') {
        messages.value = data.messages;
      } else if (data.type === 'message') {
        messages.value.push(data);
      }
    };
  };
  
  const sendMessage = () => {
    if (newMessage.value.trim()) {
      socket.send(JSON.stringify({ type: 'message', message: newMessage.value }));
      newMessage.value = '';
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f0f2f5;
  }
  
  .chat-room {
    width: 400px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .message-input {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    margin-top: 10px;
  }
  
  .auth-form {
    width: 300px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
  
  .btn {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn.primary {
    background: #007bff;
    color: white;
  }
  
  .btn.primary:hover {
    background: #0056b3;
  }
  
  .toggle {
    margin-top: 10px;
    text-align: center;
    cursor: pointer;
    color: #007bff;
    text-decoration: underline;
  }
  </style>
  