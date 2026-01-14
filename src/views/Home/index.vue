<template>
  <div class="w-full">
    <!-- Banner -->
    <BannerSection />

    <!-- 集团简介 -->
    <section class="group-profile">
      <div class="profile-container">
        <!-- 左侧文字内容 -->
        <div class="profile-content">
          <h2 class="profile-title">集团简介</h2>
          <p class="profile-subtitle">GROUP PROFILE</p>

          <div class="profile-text">
            <p>
              奥本集团是一家专注于瑜伽、养生、医美领域的健康科技公司，融合科技医美、
              美容养生、运动美学三位一体的理念，公司在行业内首创"奥本新康美"的商业模式。
            </p>
            <p>
              目前奥本集团拥有："奥本瑜伽、奥本美肤SPA、奥本科技医美、奥本商学院、奥本
              UP-JOY服饰、奥本咖啡中国茶、AOBEN护肤品、DR.AOBEN医学、奥本先康达"等
              自营品牌矩阵。集团现有直营门店30余家，均座落在城市地标商圈，规划三年内全
              布局300家城市直营旗舰店。
            </p>
          </div>

          <button class="profile-btn">
            <span>了解详情</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        <!-- 中间建筑图片 -->
        <div class="profile-image">
          <img src="../../assets/images/首页_slices/奥本楼 3.png" alt="奥本大楼" />
        </div>

        <!-- 右侧数据统计 -->
        <div class="profile-stats">
          <div class="stat-item" v-for="stat in profileStats" :key="stat.label">
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- 右上角红色装饰 -->
      <div class="red-decoration"></div>
    </section>

    <!-- 品牌矩阵 -->
    <section class="section-padding bg-white">
      <div class="container-main">
        <h2 class="section-title">品牌矩阵</h2>
        <p class="section-subtitle">
          奥本瑜伽、奥本美肤SPA、奥本科技医美等多元品牌，构建完整健康美丽生态
        </p>

        <div class="grid-responsive-4">
          <div
            v-for="brand in brands"
            :key="brand"
            class="aspect-square rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
          >
            <span
              class="text-body text-gray-400 font-medium text-center group-hover:text-red-500 transition-colors"
            >
              {{ brand }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BannerSection from './components/BannerSection.vue'

const profileStats = [
  { number: '2016', label: '始创于（年）' },
  { number: '30+', label: '直营店（家）' },
  { number: '10万+', label: '客户（人）' },
  { number: '500+', label: '瑜伽教练（人）' },
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

<style scoped>
/* ==================== 集团简介区域 ==================== */
.group-profile {
  position: relative;
  width: 100%;
  /* 手机最小500px，中间按42vw缩放，最大800px */
  min-height: clamp(500px, 42vw, 800px);
  background-color: #fafafa;
  background-image: url('../../assets/images/首页_slices/Frame 1000011613.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.profile-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: clamp(4rem, 10vw, 7.5rem) clamp(1rem, 4vw, 3rem) clamp(3rem, 6vw, 5rem);
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 4vw, 2.5rem);
  position: relative;
  z-index: 1;
}

@media (min-width: 1024px) {
  .profile-container {
    grid-template-columns: 1fr 1.2fr auto;
    align-items: center;
  }
}

/* 左侧内容 */
.profile-content {
  max-width: 420px;
}

.profile-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
  letter-spacing: 0.1em;
}

.profile-subtitle {
  font-size: clamp(0.75rem, 1.2vw, 0.875rem);
  color: #999;
  letter-spacing: 0.2em;
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
  font-family: serif;
  font-style: italic;
}

.profile-text {
  color: #666;
  font-size: clamp(0.8rem, 1.2vw, 0.875rem);
  line-height: 2;
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
}

.profile-text p {
  margin-bottom: 1rem;
}

.profile-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: clamp(0.625rem, 1.5vw, 0.75rem) clamp(1.25rem, 2.5vw, 1.75rem);
  background: linear-gradient(135deg, #e85a5a 0%, #d14545 100%);
  color: white;
  border: none;
  border-radius: 1.5rem;
  font-size: clamp(0.75rem, 1.2vw, 0.875rem);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(232, 90, 90, 0.3);
}

.profile-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(232, 90, 90, 0.4);
}

/* 中间图片 */
.profile-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-image img {
  max-width: 100%;
  height: auto;
  max-height: clamp(300px, 50vw, 600px);
  object-fit: contain;
}

/* 右侧数据 */
.profile-stats {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: clamp(1rem, 2vw, 1.25rem);
  justify-content: center;
}

@media (min-width: 1024px) {
  .profile-stats {
    flex-direction: column;
    gap: clamp(1.5rem, 3vw, 2rem);
    justify-content: flex-start;
  }
}

.stat-item {
  text-align: center;
  padding: clamp(0.75rem, 1.5vw, 1rem) clamp(1rem, 2vw, 1.25rem);
}

@media (min-width: 1024px) {
  .stat-item {
    text-align: left;
  }
}

.stat-number {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: bold;
  color: #e85a5a;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: clamp(0.75rem, 1.2vw, 0.875rem);
  color: #999;
}

/* 右上角红色装饰 */
.red-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: clamp(120px, 20vw, 300px);
  height: clamp(180px, 30vw, 450px);
  background: linear-gradient(180deg, #e85a5a 0%, #ff8a80 100%);
  border-radius: 0 0 0 100%;
  z-index: 0;
}

/* ==================== Section 通用样式 ==================== */
.section-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: #666;
  text-align: center;
  margin-bottom: clamp(2rem, 4vw, 3rem);
}
</style>
