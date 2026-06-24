<template>
  <div class="message" :class="type">
    <span class="message-icon">{{ icon }}</span>
    <p class="message-text">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    msg: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'success',
      validator: (v) => ['success', 'error'].includes(v),
    },
  },
  computed: {
    icon() {
      return this.type === 'success' ? '✓' : '✕'
    },
  },
}
</script>

<style scoped>
.message {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 14px;
  animation: slide-in 0.25s ease;
}

.message-icon {
  font-size: 16px;
  font-weight: 700;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.message-text {
  margin: 0;
  font-weight: 600;
}

.success {
  background-color: #d4edda;
  color: #155724;
  border-left: 4px solid #28a745;
}

.success .message-icon {
  background-color: #28a745;
  color: #fff;
}

.error {
  background-color: #f8d7da;
  color: #721c24;
  border-left: 4px solid #dc3545;
}

.error .message-icon {
  background-color: #dc3545;
  color: #fff;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>