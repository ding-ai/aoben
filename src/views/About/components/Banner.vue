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
          style="font-weight: 700; margin-bottom: 1rem"
        >
          关于我们
        </h1>

        <!-- 副标题 -->
        <p
          class="text-subtitle text-white/60 leading-relaxed max-w-lg animate-fade-in-up tracking-wide"
          style="animation-delay: 0.2s; font-weight: 300"
        >
          了解集团最新消息, 以便于我们合作
        </p>
      </div>
    </div>

    <!-- 滚动提示 -->
  </section>
</template>

<script setup>
const bannerBg =
  'https://cdn.aoben.yoga/membermini/web/20260119/%E5%AE%98%E7%BD%91%E6%AD%A3%E5%93%811.webp/low_quality?imageSlim'
</script>

<style scoped>
.banner-content {
  padding-top: clamp(4rem, 10vh, 8rem);
}

.min-h-screen-safe {
  /* 手机最小400px，中间按42vw缩放，最大800px */
  min-height: clamp(400px, 42vw, 1000px);
}
</style>
