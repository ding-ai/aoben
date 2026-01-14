<template>
  <section class="relative w-full min-h-screen-safe flex items-center overflow-hidden">
    <!-- 背景图 -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${bannerBg})` }"
    ></div>

    <!-- 内容区域 -->
    <div class="container-main relative z-10 banner-content">
      <div class="max-w-xl lg:max-w-2xl">
        <h1
          class="text-hero text-white font-bold leading-tight mb-6 sm:mb-8 animate-fade-in-up tracking-widest"
          style="font-family: 'MiSans'; font-weight: 700"
        >
          关于我们
        </h1>

        <!-- 副标题 -->
        <p
          class="text-subtitle text-white/60 leading-relaxed max-w-lg animate-fade-in-up tracking-wide"
          style="animation-delay: 0.2s; font-family: 'MiSans'; font-weight: 300"
        >
          了解集团最新消息, 以便于我们合作
        </p>
      </div>
    </div>

    <!-- 滚动提示 -->
    <div
      class="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-3 text-white/60"
    >
      <span class="text-xs tracking-widest">SCROLL</span>
      <div class="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
        <div class="w-1.5 h-3 bg-white/50 rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import bannerBg from '@/assets/images/关于我们_slices/官网正品 1.png'
</script>

<style scoped>
.banner-content {
  padding-top: clamp(4rem, 10vh, 8rem);
}

.min-h-screen-safe {
  /* 手机最小400px，中间按42vw缩放，最大800px */
  min-height: clamp(400px, 42vw, 800px);
}
</style>
