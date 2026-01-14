<template>
  <div class="w-full">
    <!-- 页面头部 -->
    <Banner></Banner>

    <!-- 集团简介 -->
    <section class="section-padding bg-white">
      <div class="container-main">
        <!-- 标题区域 -->
        <div class="text-center mb-12">
          <h2 class="text-section-title font-bold text-gray-800 mb-4 tracking-widest">集团简介</h2>
          <p class="text-gray-400 text-small tracking-widest font-serif italic">GROUP PROFILE</p>
        </div>

        <!-- 文字内容 - 左对齐 -->
        <div class="text-body text-gray-600 leading-loose mb-16">
          <p class="mb-4">
            奥本集团是一家专注于瑜伽、养生、医美领域的健康科技公司，融合科技医美、美容养生、运动美学三位一体的理念，公司在行业内首创"奥本新康美"的商业模式。
          </p>
          <p class="mb-4">
            目前奥本集团拥有"奥本瑜伽、奥本美肤SPA、奥本科技医美、奥本商学院、奥本UP-JOY服饰、奥本咖啡中国茶、AOBEN护肤品、DR.AOBEN医学、奥本先康达"等自营品牌矩阵。集团现有直营门店30余家，均座落在城市地标商圈，规划三年内全布局300家城市直营旗舰店。
          </p>
          <p>
            2024年4月，奥本运动科技(苏州)有限公司自主研发的"奥本运动"互联网SaaS平台正式上线，该平台通过共享模式，链接打通场馆主、教练与消费者，针对C端用户提供便捷、个性化的线上线下一站式瑜伽服务体验，同时面向B端客户提供高效的数字化运营管理工具，形成了双向赋能的产业服务闭环。截至目前，平台已签约瑜伽教练300余名，在线运营智慧场馆15家，为30000+客户提供专业服务，并依托大数据算力，奥本学院数据中心及供应链产业等多元化业态，推动运动康养行业全面向数字化转型升级。
          </p>
        </div>

        <!-- 数据统计 - 红色背景矩形 -->
        <div class="bg-red-500 rounded-lg py-8 px-6">
          <div class="grid-responsive-4">
            <div v-for="stat in stats" :key="stat.label" class="text-center px-4 py-2">
              <div class="text-stat font-bold text-white mb-2">
                {{ stat.number }}
              </div>
              <div class="text-small text-white">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 企业文化/核心理念 -->
    <section class="section-padding bg-gray-50">
      <div class="container-main">
        <!-- 标题区域 -->
        <div class="text-center mb-16">
          <h2 class="text-section-title font-bold text-gray-800 mb-4">企业文化/核心理念</h2>
          <p class="text-gray-400 text-small tracking-widest font-serif italic">COMPANY CULTURE</p>
        </div>

        <!-- 使命和愿景 - 左右两栏 -->
        <div class="mb-8">
          <div class="grid-responsive-2">
            <!-- 企业使命 -->
            <div class="bg-white p-8 rounded-lg shadow-sm">
              <h3 class="text-body-lg font-bold text-gray-800 mb-4 text-center">企业使命</h3>
              <p class="text-gray-500 text-body text-center">引领新康美 创造新生活</p>
            </div>
            <!-- 企业愿景 -->
            <div class="bg-white p-8 rounded-lg shadow-sm">
              <h3 class="text-body-lg font-bold text-gray-800 mb-4 text-center">企业愿景</h3>
              <p class="text-gray-500 text-body text-center">让美丽更自由</p>
            </div>
          </div>
        </div>

        <!-- 企业价值观 - 底部横跨 -->
        <div>
          <div class="bg-white p-8 rounded-lg shadow-sm">
            <h3 class="text-body-lg font-bold text-gray-800 mb-6 text-center">企业价值观</h3>
            <div class="text-body text-gray-600 space-y-2">
              <p class="flex">
                <span class="font-medium mr-2">诚信经营：</span>
                <span>正直诚信，友善透明，守正经营</span>
              </p>
              <p class="flex">
                <span class="font-medium mr-2">第一原则：</span>
                <span>回归本质，要事第一，高效推进</span>
              </p>
              <p class="flex">
                <span class="font-medium mr-2">多走一步：</span>
                <span>环环相扣，前后接力，传递价值</span>
              </p>
              <p class="flex">
                <span class="font-medium mr-2">科技驱动：</span>
                <span>创新融合，与时俱进，智造未来</span>
              </p>
              <p class="flex">
                <span class="font-medium mr-2">开放共赢：</span>
                <span>群策群力，资源共享，互助成长</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 荣誉资质 -->
    <section class="section-padding bg-white">
      <div class="container-main">
        <!-- 标题区域 -->
        <div class="text-center mb-16">
          <h2 class="text-section-title font-bold text-gray-800 mb-4">荣誉资质</h2>
          <p class="text-stat text-red-500 font-bold">100+</p>
        </div>

        <!-- 资质证书图片 -->
        <div class="w-full">
          <img
            src="../../assets/images/关于我们_slices/Frame 1000011522@2x.png"
            alt="荣誉资质"
            class="img-responsive rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Banner from './components/Banner.vue'

const stats = [
  { number: '2016', label: '始创于（年）' },
  { number: '30+', label: '直营店（家）' },
  { number: '10万+', label: '客户（人）' },
  { number: '500+', label: '瑜伽教练（人）' },
]
</script>
