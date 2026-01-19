<template>
  <div
    class="scroll-indicator"
    :class="{ 'dark-theme': isDarkRoute }"
    :style="{ opacity: scrollOpacity }"
  >
    <!-- 鼠标图标 -->
    <div class="mouse">
      <div class="mouse-wheel"></div>
    </div>
    <!-- 向下箭头 -->
    <div class="arrow-down">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const scrollY = ref(0)

// 判断是否是需要黑色主题的路由
const isDarkRoute = computed(() => {
  return route.path === '/contact'
})

// 根据滚动距离计算透明度
const scrollOpacity = computed(() => {
  // 滚动距离超过 300px 时开始淡化，500px 时完全消失
  if (scrollY.value < 300) {
    return 1
  } else if (scrollY.value >= 500) {
    return 0
  } else {
    // 300-500px 之间线性淡化
    return 1 - (scrollY.value - 300) / 200
  }
})

// 监听滚动事件
const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-indicator {
  position: absolute;
  top: clamp(300px, 40vh, 700px);
  left: clamp(20px, 5vw, 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(12px, 2vw, 20px);
  z-index: 50;
  animation: fadeIn 1s ease-in-out;
  transition: opacity 0.3s ease-out;
  pointer-events: none;
}

/* 鼠标外框 */
.mouse {
  width: clamp(22px, 3vw, 28px);
  height: clamp(36px, 5vw, 45px);
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: clamp(16px, 2vw, 20px);
  display: flex;
  justify-content: center;
  padding-top: clamp(6px, 1vw, 8px);
  position: relative;
  animation: bounce 2s infinite;
}

/* 黑色主题 */
.dark-theme .mouse {
  border-color: rgba(0, 0, 0, 0.8);
}

/* 鼠标滚轮 */
.mouse-wheel {
  width: clamp(2px, 0.4vw, 3px);
  height: clamp(8px, 1.2vw, 10px);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 2px;
  animation: scroll 2s infinite;
}

/* 黑色主题 */
.dark-theme .mouse-wheel {
  background-color: rgba(0, 0, 0, 0.8);
}

/* 向下箭头 */
.arrow-down {
  width: clamp(18px, 2.5vw, 24px);
  height: clamp(18px, 2.5vw, 24px);
  color: rgba(255, 255, 255, 0.8);
  animation: arrowBounce 2s infinite;
}

/* 黑色主题 */
.dark-theme .arrow-down {
  color: rgba(0, 0, 0, 0.8);
}

/* 滚轮滚动动画 */
@keyframes scroll {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0.5;
    transform: translateY(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 鼠标弹跳动画 */
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* 箭头弹跳动画 */
@keyframes arrowBounce {
  0%,
  100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(5px);
    opacity: 0.5;
  }
}

/* 淡入动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 响应式 - 移动端隐藏 */
@media (max-width: 768px) {
  .scroll-indicator {
    display: none;
  }
}
@media (max-width: 1440px) {
  .scroll-indicator {
    display: none;
  }
}
</style>
