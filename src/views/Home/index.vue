<template>
  <div class="w-full">
    <!-- Banner -->
    <BannerSection />

    <!-- 产品服务 -->
    <section class="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div class="container-main">
        <h2 class="section-title">我们的产品与服务</h2>
        <p class="section-subtitle">
          融合科技医美、美容养生、运动美学三位一体的理念，打造全方位健康美丽体验
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div
            v-for="(product, index) in products"
            :key="product.title"
            class="group relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- 顶部装饰条 -->
            <div class="h-1.5 w-full" :class="product.gradient"></div>

            <div class="p-6 sm:p-8 lg:p-10">
              <!-- 图标 -->
              <div
                class="w-16 h-16 sm:w-20 sm:h-20 mb-6 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl transition-transform duration-500 group-hover:scale-110"
                :class="product.bgColor"
              >
                {{ product.icon }}
              </div>

              <!-- 标题 -->
              <h3
                class="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-brand transition-colors"
              >
                {{ product.title }}
              </h3>

              <!-- 描述 -->
              <p class="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
                {{ product.desc }}
              </p>

              <!-- 了解更多 -->
              <div
                class="flex items-center gap-2 text-brand text-sm font-medium opacity-0 translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
              >
                <span>了解更多</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 品牌数据 -->
    <section class="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-brand to-orange-500 text-white">
      <div class="container-main">
        <div class="text-center mb-12 lg:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            值得信赖的品牌
          </h2>
          <p class="text-white/80 text-sm sm:text-base lg:text-lg max-w-xl mx-auto">
            多年深耕健康美丽领域，用数据见证品牌实力
          </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="text-center p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
          >
            <div class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2">
              {{ stat.number }}
            </div>
            <div class="text-white/80 text-sm sm:text-base">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 品牌矩阵 -->
    <section class="py-16 sm:py-20 lg:py-28 bg-white">
      <div class="container-main">
        <h2 class="section-title">品牌矩阵</h2>
        <p class="section-subtitle">
          奥本瑜伽、奥本美肤SPA、奥本科技医美等多元品牌，构建完整健康美丽生态
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          <div
            v-for="brand in brands"
            :key="brand"
            class="aspect-square rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 hover:shadow-lg hover:border-brand/30 hover:-translate-y-1 cursor-pointer group"
          >
            <span
              class="text-gray-400 text-sm sm:text-base font-medium text-center group-hover:text-brand transition-colors"
            >
              {{ brand }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 sm:py-20 lg:py-28 bg-gray-900 text-white">
      <div class="container-main text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          开启您的健康美丽之旅
        </h2>
        <p class="text-gray-400 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 max-w-xl mx-auto">
          加入奥本，让专业团队为您定制专属的健康美丽方案
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <button class="btn-primary">立即咨询</button>
          <router-link to="/join" class="btn-outline"> 加盟合作 </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BannerSection from './components/BannerSection.vue'

const products = [
  {
    icon: '🧘',
    title: '奥本瑜伽',
    desc: '专业瑜伽课程，融合东方智慧与现代科学，帮助您找到身心平衡',
    gradient: 'bg-gradient-to-r from-brand to-orange-400',
    bgColor: 'bg-red-50',
  },
  {
    icon: '✨',
    title: '美肤SPA',
    desc: '高端美容养生服务，采用天然成分与先进技术，焕发肌肤光彩',
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-400',
    bgColor: 'bg-purple-50',
  },
  {
    icon: '🔬',
    title: '科技医美',
    desc: '安全可靠的医美项目，由专业医师团队提供个性化美丽方案',
    gradient: 'bg-gradient-to-r from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-50',
  },
]

const stats = [
  { number: '30+', label: '直营门店' },
  { number: '10万+', label: '服务会员' },
  { number: '9', label: '品牌矩阵' },
  { number: '98%', label: '满意度' },
]

const brands = [
  '奥本瑜伽',
  '奥本美肤SPA',
  '奥本科技医美',
  '奥本商学院',
  'UP-JOY服饰',
  '奥本咖啡中国茶',
  'AOBEN护肤品',
  'DR.AOBEN医学',
  '奥本先康达',
  '更多品牌...',
]
</script>
