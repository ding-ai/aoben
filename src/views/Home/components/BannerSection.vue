<template>
  <section class="relative w-full min-h-screen flex items-center overflow-hidden">
    <!-- 背景图 -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${bannerBg})` }"
    >
      <!-- 渐变遮罩 -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
    </div>

    <!-- 内容区域 -->
    <div class="container-main relative z-10 pt-24 sm:pt-32 lg:pt-40">
      <div class="max-w-xl lg:max-w-2xl">
        <!-- 标签 -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 mb-6 sm:mb-8 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
        >
          <span class="w-2 h-2 bg-brand rounded-full animate-pulse"></span>
          <span class="text-xs sm:text-sm text-warm-brown font-medium">奥本新康美</span>
        </div>

        <!-- 主标题 -->
        <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-warm-brown mb-6 sm:mb-8 animate-fade-in-up"
        >
          让健康成为生活方式
          <br />
          <span class="text-brand">让「美丽」更自由</span>
        </h1>

        <!-- 副标题 -->
        <p
          class="text-base sm:text-lg lg:text-xl text-warm-light/90 leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-lg animate-fade-in-up"
          style="animation-delay: 0.2s"
        >
          以东方美学为根，科技赋能健康美，为每位用户定制高品质服务。
        </p>

        <!-- 按钮组 -->
        <div class="flex flex-wrap gap-4 animate-fade-in-up" style="animation-delay: 0.4s">
          <button class="btn-primary">
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
          <button class="btn-outline border-warm-brown/50 text-warm-brown hover:bg-warm-brown/10">
            联系我们
          </button>
        </div>
      </div>
    </div>

    <!-- 滚动提示 -->
    <div
      class="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-3 text-warm-brown/60"
    >
      <span class="text-xs tracking-widest">SCROLL</span>
      <div class="w-6 h-10 border-2 border-warm-brown/40 rounded-full flex justify-center pt-2">
        <div class="w-1.5 h-3 bg-warm-brown/50 rounded-full animate-bounce"></div>
      </div>
    </div>

    <!-- 装饰元素 -->
    <div class="hidden xl:block absolute right-20 2xl:right-40 top-1/2 -translate-y-1/2">
      <div
        class="w-80 h-80 2xl:w-96 2xl:h-96 rounded-full bg-gradient-to-br from-brand/20 to-orange-300/20 blur-3xl animate-float"
      ></div>
    </div>
  </section>
</template>

<script setup>
import bannerBg from '@/assets/images/banner-bg1.png'
</script>
