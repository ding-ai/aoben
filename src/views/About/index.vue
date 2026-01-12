<template>
  <div class="w-full">
    <!-- 页面头部 -->
    <section
      class="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden"
    >
      <!-- 装饰背景 -->
      <div class="absolute inset-0">
        <div class="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div
          class="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        ></div>
      </div>

      <div
        class="container-main relative z-10 text-center text-white pt-24 sm:pt-32 pb-12 sm:pb-16"
      >
        <span
          class="inline-block px-4 py-2 mb-6 text-xs sm:text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full"
        >
          ABOUT US
        </span>
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          关于我们
        </h1>
        <p class="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">了解奥本的故事、使命与愿景</p>
      </div>
    </section>

    <!-- 公司介绍 -->
    <section class="py-16 sm:py-20 lg:py-28 bg-white">
      <div class="container-main">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div class="order-2 lg:order-1">
            <span class="inline-block text-brand text-sm font-semibold mb-4 tracking-wider">
              OUR STORY
            </span>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">
              我们的故事
            </h2>
            <div class="space-y-4 sm:space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                奥本集团是一家专注于瑜伽、养生、医美领域的健康科技公司，融合科技医美、美容养生、运动美学三位一体的理念，在行业内首创"奥本新康美"的商业模式。
              </p>
              <p>
                目前奥本集团拥有：奥本瑜伽、奥本美肤SPA、奥本科技医美、奥本商学院、奥本UP-JOY服饰、奥本咖啡中国茶、AOBEN护肤品、DR.AOBEN医学、奥本先康达等自营品牌矩阵。
              </p>
              <p>
                集团现有直营门店30余家，均座落在城市地标商圈，规划三年内全布局300家城市直营旗舰店。
              </p>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <div class="relative">
              <div
                class="aspect-[4/3] rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden shadow-2xl"
              >
                <span class="text-7xl sm:text-8xl">🏢</span>
              </div>
              <!-- 装饰元素 -->
              <div
                class="absolute -bottom-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-brand/10 rounded-2xl -z-10"
              ></div>
              <div
                class="absolute -top-6 -right-6 w-20 h-20 sm:w-24 sm:h-24 bg-purple-500/10 rounded-full -z-10"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心价值观 -->
    <section class="py-16 sm:py-20 lg:py-28 bg-gray-50">
      <div class="container-main">
        <div class="text-center mb-12 lg:mb-16">
          <span class="inline-block text-brand text-sm font-semibold mb-4 tracking-wider">
            CORE VALUES
          </span>
          <h2 class="section-title">核心价值观</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          <div
            v-for="(value, index) in values"
            :key="value.title"
            class="group bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
          >
            <!-- 序号 -->
            <div
              class="text-5xl sm:text-6xl font-bold text-gray-100 mb-4 group-hover:text-brand/20 transition-colors"
            >
              0{{ index + 1 }}
            </div>
            <!-- 图标 -->
            <div
              class="text-4xl sm:text-5xl mb-4 sm:mb-6 transition-transform duration-500 group-hover:scale-110"
            >
              {{ value.icon }}
            </div>
            <h3
              class="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-brand transition-colors"
            >
              {{ value.title }}
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队数据 -->
    <section class="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div class="container-main">
        <div class="text-center mb-12 lg:mb-16">
          <span class="inline-block text-brand text-sm font-semibold mb-4 tracking-wider">
            OUR TEAM
          </span>
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">我们的团队</h2>
          <p class="text-gray-400 text-sm sm:text-base lg:text-lg max-w-xl mx-auto">
            由一群充满激情和创造力的专业人士组成
          </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="relative group text-center p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:-translate-y-2"
          >
            <div
              class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-brand to-orange-400 bg-clip-text text-transparent mb-2 sm:mb-3"
            >
              {{ stat.number }}
            </div>
            <div class="text-gray-400 text-sm sm:text-base">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 发展历程 -->
    <section class="py-16 sm:py-20 lg:py-28 bg-white">
      <div class="container-main">
        <div class="text-center mb-12 lg:mb-16">
          <span class="inline-block text-brand text-sm font-semibold mb-4 tracking-wider">
            MILESTONES
          </span>
          <h2 class="section-title">发展历程</h2>
        </div>

        <div class="relative max-w-4xl mx-auto">
          <!-- 时间线 -->
          <div
            class="absolute left-4 sm:left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand via-purple-500 to-pink-500 lg:-translate-x-1/2"
          ></div>

          <div class="space-y-8 sm:space-y-12">
            <div
              v-for="(item, index) in timeline"
              :key="item.year"
              class="relative pl-12 sm:pl-20 lg:pl-0"
              :class="index % 2 === 0 ? 'lg:pr-[55%]' : 'lg:pl-[55%]'"
            >
              <!-- 时间点 -->
              <div
                class="absolute left-2 sm:left-6 lg:left-1/2 top-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-brand to-orange-400 border-4 border-white shadow-lg lg:-translate-x-1/2 z-10"
              ></div>

              <!-- 年份 -->
              <div
                class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"
                :class="[
                  'bg-gradient-to-r from-brand to-purple-500 bg-clip-text text-transparent',
                  index % 2 === 0 ? 'lg:text-right' : '',
                ]"
              >
                {{ item.year }}
              </div>

              <!-- 内容卡片 -->
              <div
                class="bg-gray-50 rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <h3 class="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                  {{ item.title }}
                </h3>
                <p class="text-gray-500 text-sm sm:text-base leading-relaxed">
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const values = [
  { icon: '🎯', title: '专业专注', desc: '始终专注于核心业务，以专业的态度服务每一位客户' },
  { icon: '💡', title: '创新进取', desc: '不断探索新技术，持续优化产品和服务体验' },
  { icon: '🤝', title: '诚信负责', desc: '以诚信为本，对客户、对团队、对社会负责' },
  { icon: '🚀', title: '追求卓越', desc: '永不满足现状，追求更高的目标和更好的结果' },
]

const stats = [
  { number: '50+', label: '团队成员' },
  { number: '100+', label: '成功项目' },
  { number: '500+', label: '服务客户' },
  { number: '98%', label: '客户满意度' },
]

const timeline = [
  { year: '2020', title: '公司成立', desc: '奥本集团正式成立，开启健康美丽事业新篇章' },
  { year: '2021', title: '快速成长', desc: '团队扩展到20人，服务客户超过100家，首批直营店开业' },
  { year: '2023', title: '品牌矩阵', desc: '完成9大品牌布局，直营门店突破30家' },
  { year: '2026', title: '持续前行', desc: '规划300家城市直营旗舰店，服务更多追求健康美丽的用户' },
]
</script>
