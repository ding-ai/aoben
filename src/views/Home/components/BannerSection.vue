<template>
  <section class="relative w-full min-h-screen-safe flex items-center overflow-hidden bg-warm-bg">
    <!-- 骨架屏背景 - 在图片加载前显示 -->
    <div v-if="!imageLoaded" class="absolute inset-0 skeleton-bg"></div>

    <!-- 背景图 - 优化加载 -->
    <img
      :src="bannerBg"
      alt="奥本运动背景"
      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
      :class="{ 'opacity-0': !imageLoaded }"
      fetchpriority="high"
      decoding="async"
      @load="onImageLoad"
    />

    <!-- 内容区域 - 立即显示，不等待图片 -->
    <div class="container-main relative z-10 banner-content">
      <div class="max-w-xl lg:max-w-2xl">
        <h1
          class="text-hero font-bold leading-tight mb-6 sm:mb-8 animate-fade-in-up mede"
          style="color: #801111"
        >
          让健康成为生活方式
          <br />
          <span class="text-brand">让「美丽」更自由</span>
        </h1>

        <!-- 副标题 -->
        <p
          class="text-subtitle text-warm-light/90 leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-lg animate-fade-in-up mede1"
          style="animation-delay: 0.2s; margin-top: 0.8rem; color: #801111"
        >
          奥本，以东方美学为根，科技赋能健康 <br class="break-1000">美为每位用户定制高品质服务。
        </p>

        <!-- 按钮组 -->
        <div class="flex flex-wrap gap-4 animate-fade-in-up" style="animation-delay: 0.4s;margin-top: 10px;">
          <button class="btn-primary" @click="goToAbout">
            <span>了解更多</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
          <button
            class="btn-outline border-warm-brown/50 text-warm-brown hover:bg-warm-brown/10"
            @click="goToContact"
          >
            联系我们
          </button>
        </div>
      </div>
    </div>

    <!-- 装饰元素 - 延迟渲染 -->
    <div
      v-if="imageLoaded"
      class="hidden xl:block absolute right-20 2xl:right-40 top-1/2 -translate-y-1/2"
    >
      <div
        class="w-80 h-80 2xl:w-96 2xl:h-96 rounded-full bg-gradient-to-br from-brand/20 to-orange-300/20 blur-3xl animate-float"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const bannerBg =
  'https://cdn.aoben.yoga/membermini/web/20260119/Group1000011132.webp/low_quality?imageSlim'

const imageLoaded = ref(false)

const onImageLoad = () => {
  imageLoaded.value = true
}

const goToAbout = () => {
  router.push('/about')
}

const goToContact = () => {
  router.push('/contact')
}
</script>

<style scoped>
.banner-content {
  padding-top: clamp(4rem, 10vh, 8rem);
}

.min-h-screen-safe {
  /* 手机最小400px，中间按42vw缩放，最大800px */
  min-height: clamp(400px, 42vw, 800px);
}

/* 骨架屏背景 */
.skeleton-bg {
  background: linear-gradient(
    135deg,
    #f5f5f5 0%,
    #e8e8e8 25%,
    #f5f5f5 50%,
    #e8e8e8 75%,
    #f5f5f5 100%
  );
  background-size: 400% 400%;
  animation: skeleton-loading 2s ease-in-out infinite;
}

@keyframes skeleton-loading {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.bg-warm-bg {
  background-color: #faf9f7;
}
/* 默认隐藏这个换行符 */
.break-1000 {
  display: none;
}

/* 当屏幕小于 1000px 时，显示换行符，强制断行 */
@media (max-width: 1000px) {
  .break-1000 {
    display: inline; /* 或者 block */
    content: "";
  }
}
.parent-container {
  container-type: inline-size;
}

.mede {
  /* 文字大小随父盒子的宽度变化 */
  font-size: clamp(14px, 6cqw,80px);
}
.mede1{
  font-size: clamp(12px, 2.5cqw, 24px);
}
</style>
