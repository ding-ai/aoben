<template>
  <div
    class="scroll-indicator container-main"
    :class="{ 'dark-theme': isDarkRoute }"
    :style="{ opacity: scrollOpacity }"
    
  >
    <!-- 鼠标图标 -->
    <div class="mouse">
      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="39" viewBox="0 0 29 39" fill="none">
  <rect x="1" y="1" width="27" height="37" rx="12" stroke="white" stroke-width="2"/>
  <line x1="15" y1="24" x2="15" y2="30" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>
    </div>
    <!-- 向下箭头 -->
    <div class="arrow-down">
     <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
  <path d="M17 7.08301V26.9163" stroke="url(#paint0_linear_584_2206)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M26.9163 17L16.9997 26.9167L7.08301 17" stroke="url(#paint1_linear_584_2206)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="paint0_linear_584_2206" x1="17.5" y1="7.08301" x2="17.5" y2="26.9163" gradientUnits="userSpaceOnUse">
      <stop stop-color="white" stop-opacity="0.1"/>
      <stop offset="1" stop-color="white"/>
    </linearGradient>
    <linearGradient id="paint1_linear_584_2206" x1="16.9997" y1="17" x2="16.9997" y2="26.9167" gradientUnits="userSpaceOnUse">
      <stop stop-color="white" stop-opacity="0.1"/>
      <stop offset="1" stop-color="white"/>
    </linearGradient>
  </defs>
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
  /* top: clamp(300px, 40vh, 700px); */
  /* left: clamp(20px, 5vw, 200px); */
  left: clamp(-400px, 5vw, -275px);
  top: clamp(-200px, 40vh, 178px);
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
  /* border: 2px solid rgba(255, 255, 255, 0.8); */
  /* border-radius: clamp(16px, 2vw, 20px); */
  display: flex;
  justify-content: center;
  padding-top: clamp(6px, 1vw, 10px);
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
  margin-right: 10px;
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
