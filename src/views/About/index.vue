<template>
  <div class="w-full">
    <!-- 页面头部 -->
    <Banner></Banner>

    <!-- 集团简介 -->
    <section class="group-profile-section">
      <!-- 背景大字装饰 -->
      <div class="profile-watermark">Group Profile</div>

      <div class="profile-container">
        <h2 class="profile-title">集团简介</h2>
        <div class="profile-line"></div>

        <div class="profile-content">
          <p>
            奥本集团是一家专注于瑜伽、养生、医美领域的健康科技公司，融合科技医美、美容养生、运动美学三位一体的理念，公司在行业内首创"奥本新康美"的商业模式。
          </p>
          <p>
            目前奥本集团拥有："奥本瑜伽、奥本美肤SPA、奥本科技医美、奥本商学院、奥本UP-JOY服饰、奥本咖啡中国茶、AOBEN护肤品、DR.AOBEN医学、奥本先康达"等自营品牌矩阵。集团现有直营门店30余家，均座落在城市地标商圈，规划三年内全市布局300家城市直营旗舰店。
          </p>
          <p>
            2024年4月，奥本运动科技(苏州)有限公司自主研发的"奥本运动"互联网SaaS平台正式上线。该平台通过共享模式，链接打通场馆主、教练与消费者，针对C端用户提供便捷、个性化的线上线下一站式瑜伽服务体验，同时面向B端客户提供高效的数字化运营管理工具，形成了双向赋能的产业服务闭环。截至目前，平台已签约瑜伽教练300余名，在线运营智慧场馆15家，为30000+客户提供专业服务，并依托大数据算力、奥本学院培训中心及供应链产业等多元化生态，推动运动康美行业全面向数字化转型升级。
          </p>
        </div>
      </div>
    </section>

    <!-- 数据统计条 -->
    <section class="stats-section">
      <div class="stats-bar">
        <div v-for="(stat, index) in stats" :key="stat.label" class="stat-item">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
          <div v-if="index < stats.length - 1" class="stat-divider"></div>
        </div>
      </div>
    </section>

    <!-- 企业文化/核心理念 -->
    <section class="culture-section">
      <div class="container-main">
        <!-- 标题区域带背景水印 -->
        <div class="culture-header">
          <div class="culture-watermark">COMPANY CULTURE</div>
          <h2 class="culture-title">企业文化/核心理念</h2>
        </div>

        <!-- 使命和愿景 - 左右两栏 -->
        <div class="culture-grid">
          <!-- 企业使命 -->
          <div class="culture-card">
            <h3 class="card-title">企业使命</h3>
            <p class="card-desc">引领新康美 创造新生活</p>
          </div>
          <!-- 企业愿景 -->
          <div class="culture-card">
            <h3 class="card-title">企业愿景</h3>
            <p class="card-desc">让美丽更自由</p>
          </div>
        </div>

        <!-- 企业价值观 -->
        <div class="values-card">
          <h3 class="values-title">企业价值观</h3>
          <div class="values-list">
            <div v-for="item in values" :key="item.title" class="value-item">
              <span class="value-label">{{ item.title }}：</span>
              <span class="value-desc">{{ item.desc }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 荣誉资质 -->
    <section class="certificate-section">
      <!-- 证书墙背景图 -->
      <div class="certificate-bg">
        <img src="../../assets/images/关于我们_slices/Frame 1000011522@2x.png" alt="荣誉资质背景" />
        <div class="certificate-overlay"></div>
      </div>

      <!-- 中心文字内容 -->
      <div class="certificate-content">
        <h2 class="certificate-title">荣誉资质</h2>
        <div class="certificate-number">100+</div>
      </div>

      <!-- 底部渐变过渡 -->
      <div class="certificate-fade"></div>
    </section>
  </div>
</template>

<script setup>
import Banner from './components/Banner.vue'

const stats = [
  { label: '始创于（年）', value: '2016' },
  { label: '直营店（家）', value: '30+' },
  { label: '客户（人）', value: '10万+' },
  { label: '瑜伽教练（人）', value: '500+' },
]

const values = [
  { title: '诚信经营', desc: '正直诚信，友善透明，守正经营' },
  { title: '第一原则', desc: '回归本质，要事第一，高效推进' },
  { title: '多走一步', desc: '环环相扣，前后接力，传递价值' },
  { title: '科技驱动', desc: '创新融合，与时俱进，智造未来' },
  { title: '开放共赢', desc: '群策群力，资源共享，互助成长' },
]
</script>

<style scoped>
/* ==================== 集团简介区域 ==================== */
.group-profile-section {
  position: relative;
  padding: clamp(3rem, 8vw, 6rem) 0;
  overflow: hidden;
  background-color: white;
}

.profile-watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(3.75rem, 12.5vw, 12.5rem);
  font-weight: 900;
  color: rgba(245, 245, 245, 0.3);
  text-transform: uppercase;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  z-index: 0;
  letter-spacing: 0.2em;
}

.profile-container {
  max-width: 896px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 0 clamp(1rem, 4vw, 1.5rem);
}

.profile-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.profile-line {
  width: 48px;
  height: 4px;
  background-color: #dc2626;
  margin: 0 auto clamp(2rem, 4vw, 3rem);
}

.profile-content {
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 3vw, 2rem);
  color: #4b5563;
  font-size: clamp(0.875rem, 1.5vw, 1.125rem);
  line-height: 1.8;
  text-align: left;
}

/* ==================== 数据统计条 ==================== */
.stats-section {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 1.5rem);
  margin-top: clamp(-2rem, -5vw, -4rem);
  margin-bottom: clamp(3rem, 6vw, 5rem);
  position: relative;
  z-index: 20;
}

.stats-bar {
  background-color: #ef233c;
  border-radius: clamp(0.75rem, 1.5vw, 1rem);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  padding: clamp(2rem, 4vw, 3rem) clamp(1rem, 2vw, 1rem);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(1.5rem, 3vw, 0);
  align-items: center;
}

@media (min-width: 640px) {
  .stats-bar {
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }
}

.stat-item {
  text-align: center;
  color: white;
  position: relative;
  padding: clamp(0.5rem, 1vw, 0);
}

.stat-value {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: clamp(0.75rem, 1.2vw, 1rem);
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
}

.stat-divider {
  display: none;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.2);
}

@media (min-width: 640px) {
  .stat-divider {
    display: block;
  }

  .stat-item:last-child .stat-divider {
    display: none;
  }
}

/* ==================== 企业文化区域 ==================== */
.culture-section {
  padding: clamp(3rem, 6vw, 5rem) 0;
  background-color: white;
}

.culture-header {
  position: relative;
  text-align: center;
  margin-bottom: clamp(2rem, 5vw, 4rem);
}

.culture-watermark {
  position: absolute;
  top: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: clamp(2rem, 5vw, 5rem);
  font-weight: 300;
  color: rgba(245, 245, 245, 1);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  pointer-events: none;
  user-select: none;
  z-index: 0;
}

.culture-title {
  position: relative;
  z-index: 10;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: bold;
  color: #1f2937;
}

.culture-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 2vw, 1.5rem);
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
}

@media (min-width: 640px) {
  .culture-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.culture-card {
  background: white;
  border: 1px solid #f3f4f6;
  border-radius: 0.5rem;
  padding: clamp(2rem, 5vw, 3rem);
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}

.culture-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  font-weight: bold;
  color: #111827;
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
}

.card-desc {
  font-size: clamp(0.875rem, 1.5vw, 1.125rem);
  color: #6b7280;
  font-weight: 300;
  letter-spacing: 0.05em;
}

.values-card {
  background: white;
  border: 1px solid #f3f4f6;
  border-radius: 1rem;
  padding: clamp(2rem, 5vw, 4rem);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.values-title {
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  font-weight: bold;
  color: #111827;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
  text-align: center;
}

.values-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(0.75rem, 2vw, 1rem);
}

.value-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: clamp(0.875rem, 1.5vw, 1.125rem);
  gap: clamp(0.25rem, 0.5vw, 0.5rem);
}

@media (min-width: 640px) {
  .value-item {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0;
  }
}

.value-label {
  font-weight: bold;
  color: #1f2937;
  min-width: clamp(5rem, 12vw, 6.25rem);
  flex-shrink: 0;
}

.value-desc {
  color: #6b7280;
  font-weight: 300;
}

/* ==================== 荣誉资质区域 ==================== */
.certificate-section {
  position: relative;
  width: 100%;
  height: clamp(31.25rem, 60vw, 50rem);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  overflow: hidden;
}

.certificate-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.certificate-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
  opacity: 0.6;
  filter: grayscale(20%);
}

.certificate-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.4);
}

.certificate-content {
  position: relative;
  z-index: 10;
  text-align: center;
}

.certificate-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: bold;
  color: #1f2937;
  margin-bottom: clamp(1rem, 2vw, 1rem);
  letter-spacing: 0.2em;
}

.certificate-number {
  font-size: clamp(4rem, 8vw, 6rem);
  font-weight: 900;
  color: #dc2626;
  font-style: italic;
  letter-spacing: -0.05em;
}

.certificate-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: clamp(4rem, 8vw, 6rem);
  background: linear-gradient(to top, white, transparent);
}
</style>
