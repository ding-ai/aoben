<template>
  <header>
    <div class="banner">
      <div class="container-main banner-content">
        <h1 class="banner-title animate-fade-in-up">奥本瑜伽·品牌故事</h1>
        <p class="banner-subtitle animate-fade-in-up" style="animation-delay: 0.2s">
          始于2016年，专注瑜伽连锁经营
        </p>
      </div>
    </div>
  </header>

  <main>
    <div class="brand-section section-padding">
      <div class="container-main">
        <h2 class="section-title">品牌理念</h2>
        <div class="section-subtitle-img">
          <img src="/src/assets/images/加盟奥本_slices/Brand Ideology.png" alt="Brand Ideology" />
        </div>
      </div>
      <div class="container-main brand-desc">
        <p>
          奥本，取"Open"开放之意，以"O"为核心构建瑜伽产业的共享生态。我们用科技链接用户、教练、场馆三方，打造瑜伽行业的"滴滴"——让师资、会员、场地在平台上自由流动，让开店
          回归服务本质，让资源配置达到最优效率。以瑜伽为入口，延伸至女性康美全生态，让每一份健康追求都能找到圆满答案。
        </p>
      </div>
      <div class="container-main features-grid">
        <div class="feature-item" v-for="item in features" :key="item.text">
          <img :src="item.icon" alt="" />
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </main>

  <section class="history-container">
    <div class="container-main">
      <div class="history-header">
        <div class="history-header-inner">
          <div class="history-title-wrap">
            <h2 class="history-title">发展历程</h2>
            <p class="history-subtitle">OUR STORY</p>
          </div>
          <div class="timeline-controls">
            <button
              class="arrow-btn"
              :class="{ active: currentPage > 0 }"
              @click="prevPage"
              :disabled="currentPage === 0"
            >
              <img src="/src/assets/images/新闻资讯_slices/chevron-left@2x.png" alt="上一页" />
            </button>
            <button
              class="arrow-btn"
              :class="{ active: currentPage < totalPages - 1 }"
              @click="nextPage"
              :disabled="currentPage >= totalPages - 1"
            >
              <img src="/src/assets/images/新闻资讯_slices/chevron-left@2x(1).png" alt="下一页" />
            </button>
          </div>
        </div>
      </div>

      <div class="timeline-wrapper">
        <div class="timeline-content">
          <div class="timeline-line"></div>

          <!-- 左侧圆形按钮 -->
          <button class="left-arrow" @click="prevPage" :disabled="currentPage === 0">
            <img src="/src/assets/images/新闻资讯_slices/chevron-left@2x.png" alt="上一页" />
          </button>

          <div class="timeline-list" :class="slideDirection">
            <div
              v-for="(item, index) in visibleTimeline"
              :key="currentPage + '-' + item.year"
              class="timeline-item"
              :class="index % 2 === 0 ? 'item-bottom' : 'item-top'"
            >
              <div class="dot"></div>
              <div class="info-box">
                <h3>{{ item.year }} {{ item.title }}</h3>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>

          <!-- 右侧圆形按钮 -->
          <button class="right-arrow" @click="nextPage" :disabled="currentPage >= totalPages - 1">
            <img
              src="/src/assets/images/新闻资讯_slices/chevron-left@2x.png"
              alt="下一页"
              style="transform: rotate(180deg)"
            />
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- 五大核心业务板块 -->
  <section class="business-section">
    <div class="container-main">
      <div class="business-header">
        <h2 class="business-title">五大核心业务板块</h2>
        <p class="business-subtitle">BUSINESS</p>
      </div>
      <div class="business-grid">
        <div class="business-card" v-for="item in businessList" :key="item.title">
          <div class="business-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                v-if="item.title === '运动塑形'"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              />
              <path
                v-else-if="item.title === '美肤养护'"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
              <path
                v-else-if="item.title === '产后恢复'"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"
              />
              <path
                v-else-if="item.title === '熟龄管理'"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              />
              <path
                v-else
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l4.59-4.58L18 11l-6 6z"
              />
            </svg>
          </div>
          <div class="business-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 五大核心优势 -->
  <section class="core-section">
    <div class="container-main">
      <div class="core-header">
        <h2 class="core-title">五大核心优势</h2>
        <p class="core-subtitle">CORE</p>
      </div>
      <div class="core-grid">
        <div class="core-card" v-for="item in coreList" :key="item.title">
          <div class="core-icon" style="text-align: center">
            <img
              src="/src/assets/images/加盟奥本_slices/Frame 1000011158.png"
              :alt="item.title"
              style="display: block; margin: 0 auto"
            />
          </div>
          <h3 class="core-card-title" style="text-align: center">{{ item.title }}</h3>
          <p class="core-card-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// 特色功能数据
const features = [
  { icon: '/src/assets/images/加盟奥本_slices/Frame 1000010504.png', text: '门店随心换' },
  { icon: '/src/assets/images/加盟奥本_slices/Frame 1000010504.png', text: '课程自由选' },
  { icon: '/src/assets/images/加盟奥本_slices/Frame 1000010504.png', text: '教练任你挑' },
]

// 五大核心业务数据
const businessList = [
  {
    title: '运动塑形',
    desc: '引进瑜伽、泰拳等塑身力量训练，实现健身+普拉提科学塑形，打造更加优体。',
  },
  {
    title: '美肤养护',
    desc: '长久驻颜，促进皮肤长期滋养，去斑、自主研发护肤产品，提供专业皮肤护理方案。',
  },
  {
    title: '产后恢复',
    desc: '精准评估，大幅提升产后调养，去斑、私密+骨盆+私密，多维助力快速恢复状态。',
  },
  {
    title: '熟龄管理',
    desc: '匀称调理，促进升级营养吸收，去斑、优先运动配套设备及产品，提供全套养方案。',
  },
  {
    title: '健康调理',
    desc: '提升机能，增强身体适应力，实现内外协调，多技术融合物质提高力。',
  },
]

// 五大核心优势数据
const coreList = [
  {
    title: '模式优势',
    desc: '奥本打造了以共享瑜伽为核心的互联网平台，通过"场地引流、资源链接、多业态互补"三大主线，整合瑜伽五大品牌资源中科融合经营一体化，做生态赋能共生共赢。',
  },
  {
    title: '产品优势',
    desc: '自主研发3大系列产品，满足多元专业级别，同时，打通供应链整合资源20+国内外精品，含瑜伽服、Foreo、全棉时代、乔妮雅等，全链路体验升级，视觉营销增量。',
  },
  {
    title: '平台优势',
    desc: '自主技术平台拥有24项专利技术，实时数据跟踪、投后管、便捷化、线上小程序一键预约购物，线下智能化设备全流程配置。',
  },
  {
    title: '营销优势',
    desc: '线上打造集美集粉丝、小红书、抖音等全媒体矩阵，精准投放定向推流、借力双微及各类新媒体，依托大众点评平台自发私域流量，开心同好社群员打造单店流量池口碑裂变。',
  },
  {
    title: '服务优势',
    desc: '建立完善的SOP服务标准，确保多业态服务品质统一，提供1对1专属顾问服务，选址租赁到装修开业全流程陪跑，用心呵护会员打造单店流量池口碑裂变。',
  },
]

// 发展历程数据
const timelineData = [
  { year: '2016', title: 'LULU瑜伽', desc: '奥本美肤科技九方店成立，开创融合瑜伽美容新商业模式' },
  {
    year: '2018.9',
    title: '奥本企管',
    desc: '成立奥本LULU瑜伽SPA生活馆(九方店)第一家门店升级开业，成立奥本企业管理有限公司',
  },
  {
    year: '2019.12',
    title: '奥本美肤',
    desc: '成立奥本美肤科技有限公司，奥本瑜伽SPA生活馆(万象汇)奥本第二家门店',
  },
  {
    year: '2020.9',
    title: '奥本培训',
    desc: '奥本瑜伽SPA生活馆(金鹰商场)第四家门店开业，成立奥本瑜伽培训服务有限公司',
  },
  {
    year: '2021.6',
    title: '品牌升级',
    desc: '奥本瑜伽品牌全面升级，推出全新VI系统，门店数量突破10家',
  },
  {
    year: '2022.3',
    title: '科技赋能',
    desc: '奥本运动APP上线，实现线上线下一体化服务，会员突破5万人',
  },
  {
    year: '2023.1',
    title: '全国布局',
    desc: '奥本瑜伽走出苏州，进军上海、杭州等一线城市，门店突破20家',
  },
  {
    year: '2024.4',
    title: 'SaaS平台',
    desc: '奥本运动互联网SaaS平台正式上线，签约瑜伽教练300余名',
  },
]

// 每页显示数量
const itemsPerPage = 4
const currentPage = ref(0)
const slideDirection = ref('')

// 总页数
const totalPages = computed(() => Math.ceil(timelineData.length / itemsPerPage))

// 当前显示的数据
const visibleTimeline = computed(() => {
  const start = currentPage.value * itemsPerPage
  return timelineData.slice(start, start + itemsPerPage)
})

// 上一页
const prevPage = () => {
  if (currentPage.value > 0) {
    slideDirection.value = 'slide-right'
    currentPage.value--
    // 动画结束后清除class
    setTimeout(() => {
      slideDirection.value = ''
    }, 400)
  }
}

// 下一页
const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    slideDirection.value = 'slide-left'
    currentPage.value++
    // 动画结束后清除class
    setTimeout(() => {
      slideDirection.value = ''
    }, 400)
  }
}
</script>

<style scoped>
/* ==================== Banner 区域 ==================== */
.banner {
  min-height: clamp(400px, 42vw, 800px);
  display: flex;
  align-items: center;
  color: white;
  background: url('../../assets/images/加盟奥本_slices/Rectangle 346240918@2x.png') no-repeat center
    center;
  background-size: cover;
}

.banner-content {
  padding-top: clamp(4rem, 10vh, 8rem);
}

.banner-title {
  font-family: 'MiSans';
  font-size: clamp(2rem, 6vw, 3.75rem);
  font-weight: 500;
  line-height: 1.2;
}

.banner-subtitle {
  font-family: 'MiSans';
  font-size: clamp(0.875rem, 2vw, 1.125rem);
  font-weight: 300;
  margin-top: clamp(0.5rem, 1vw, 0.75rem);
  letter-spacing: 0.5px;
  opacity: 0.8;
}

/* ==================== 品牌理念区域 ==================== */
.brand-section {
  min-height: clamp(450px, 42vw, 800px);
  background: url('../../assets/images/加盟奥本_slices/Frame 1000011552@2x.png') no-repeat center
    center;
  background-size: cover;
  color: white;
}

.section-title {
  text-align: center;
  font-family: 'MiSans';
  font-size: clamp(1.5rem, 4vw, 2.375rem);
  font-weight: 700;
}

.section-subtitle-img {
  text-align: center;
  margin-top: clamp(0.75rem, 2vw, 1.125rem);
}

.section-subtitle-img img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.brand-desc {
  margin-top: clamp(1.5rem, 4vw, 3rem);
  font-family: 'MiSans';
  font-size: clamp(0.875rem, 1.5vw, 1.125rem);
  font-weight: 300;
  line-height: 1.6;
  /* text-align: center; */
}

.features-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(2rem, 6vw, 5rem);
  margin-top: clamp(2rem, 4vw, 3rem);
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
}

.feature-item:hover img {
  transform: scale(1.1);
}

.feature-item:hover p {
  color: #e85a5a;
}

/* 图片 40px 基础，响应式缩放 */
.feature-item img {
  width: clamp(32px, 4vw, 40px);
  height: clamp(32px, 4vw, 40px);
  object-fit: contain;
  transition: transform 0.3s ease;
}

.feature-item p {
  margin-top: clamp(0.5rem, 1vw, 0.75rem);
  font-size: clamp(0.75rem, 1.2vw, 1rem);
  transition: color 0.3s ease;
}

/* ==================== 发展历程区域 ==================== */
.history-container {
  min-height: clamp(500px, 42vw, 800px);
  padding: clamp(3rem, 8vw, 6rem) 0;
  background-image: url('../../assets/images/加盟奥本_slices/Frame 1000011562@2x.png');
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.history-header {
  margin-bottom: clamp(2rem, 5vw, 4rem);
}

.history-header-inner {
  display: flex;
  align-items: flex-start;
  position: relative;
}

/* 控制按钮 - 左侧，只在移动端显示 */
.timeline-controls {
  display: flex;
  flex-direction: row;
  gap: clamp(0.5rem, 1vw, 1rem);
  position: absolute;
  left: 0;
  top: 0;
}

@media (min-width: 769px) {
  .timeline-controls {
    display: none;
  }
}

.history-title-wrap {
  text-align: center;
  width: 100%;
}

.history-title {
  font-family: 'MiSans';
  font-size: clamp(1.5rem, 4vw, 2.375rem);
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
}

.history-subtitle {
  font-family: 'Times New Roman', serif;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: #ccc;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* 时间轴区域 */
.timeline-wrapper {
  position: relative;
  padding: clamp(4rem, 8vw, 6rem) 0;
}

.arrow-btn {
  width: clamp(32px, 4vw, 40px);
  height: clamp(32px, 4vw, 40px);
  border-radius: 50%;
  border: 1px solid #e85a5a;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
}

/* 禁用状态：红色边框 + 红色箭头 */
.arrow-btn:disabled {
  cursor: not-allowed;
}

.arrow-btn:disabled img {
  filter: none;
}

/* 可点击状态：红色背景 + 白色箭头 */
.arrow-btn:not(:disabled) {
  background-color: #e85a5a;
}

.arrow-btn:not(:disabled) img {
  filter: invert(1);
}

.arrow-btn img {
  width: clamp(14px, 1.5vw, 18px);
}

.timeline-content {
  position: relative;
  width: 100%;
  padding-left: clamp(4rem, 6vw, 5rem);
  padding-right: clamp(4rem, 6vw, 5rem);
}

.timeline-line {
  position: absolute;
  top: 50%;
  left: clamp(4rem, 6vw, 5rem);
  right: clamp(4rem, 6vw, 5rem);
  height: 2px;
  background-color: #eee;
  z-index: 1;
}

.timeline-list {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 2;
}

/* 滑动动画 */
.timeline-list.slide-left {
  animation: slideInLeft 0.4s ease-out;
}

.timeline-list.slide-right {
  animation: slideInRight 0.4s ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.timeline-item {
  position: relative;
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 clamp(0.5rem, 1vw, 1rem);
}

.dot {
  width: clamp(10px, 1.2vw, 14px);
  height: clamp(10px, 1.2vw, 14px);
  background-color: #e85a5a;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}

.info-box {
  width: 100%;
  max-width: clamp(140px, 18vw, 200px);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.info-box h3 {
  font-size: clamp(0.8rem, 1.3vw, 1.1rem);
  font-weight: 700;
  margin-bottom: clamp(0.25rem, 0.5vw, 0.5rem);
  color: #333;
  white-space: nowrap;
}

.info-box p {
  font-size: clamp(0.7rem, 1vw, 0.85rem);
  color: #666;
  line-height: 1.5;
}

.item-top .info-box {
  bottom: calc(50% + clamp(1.5rem, 2vw, 2rem));
}

.item-bottom .info-box {
  top: calc(50% + clamp(1.5rem, 2vw, 2rem));
}

.right-arrow {
  width: clamp(36px, 4vw, 48px);
  height: clamp(36px, 4vw, 48px);
  background-color: #e85a5a;
  border: 1px solid #e85a5a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  transition: all 0.3s;
}

/* 禁用状态：红色边框 + 红色箭头 */
.right-arrow:disabled {
  background-color: transparent;
  cursor: not-allowed;
}

.right-arrow:disabled img {
  filter: none;
}

/* 可点击状态：红色背景 + 白色箭头 */
.right-arrow:not(:disabled) img {
  filter: invert(1);
}

.right-arrow:not(:disabled):hover {
  transform: translateY(-50%) scale(1.1);
}

.right-arrow img {
  width: clamp(16px, 1.8vw, 22px);
}

.left-arrow {
  width: clamp(36px, 4vw, 48px);
  height: clamp(36px, 4vw, 48px);
  background-color: #e85a5a;
  border: 1px solid #e85a5a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  transition: all 0.3s;
}

/* 禁用状态：红色边框 + 红色箭头 */
.left-arrow:disabled {
  background-color: transparent;
  cursor: not-allowed;
}

.left-arrow:disabled img {
  filter: none;
}

/* 可点击状态：红色背景 + 白色箭头 */
.left-arrow:not(:disabled) img {
  filter: invert(1);
}

.left-arrow:not(:disabled):hover {
  transform: translateY(-50%) scale(1.1);
}

.left-arrow img {
  width: clamp(16px, 1.8vw, 22px);
}

/* ==================== 移动端适配 ==================== */
@media (max-width: 768px) {
  .timeline-list {
    flex-direction: column;
    gap: 3rem;
  }

  .timeline-item {
    align-items: flex-start;
    padding-left: 2rem;
  }

  .timeline-line {
    width: 2px;
    height: 100%;
    top: 0;
    left: calc(clamp(3rem, 5vw, 4rem) + 0.5rem);
    right: auto;
  }

  .dot {
    left: 0;
    top: 0;
    transform: none;
  }

  .info-box {
    position: relative;
    left: 0;
    transform: none;
    max-width: 100%;
  }

  .item-top .info-box,
  .item-bottom .info-box {
    top: auto;
    bottom: auto;
  }

  .right-arrow,
  .left-arrow {
    display: none;
  }
}

/* ==================== 通用 ==================== */
.text-center {
  text-align: center;
}

/* ==================== 五大核心业务板块 ==================== */
.business-section {
  min-height: clamp(400px, 32vw, 600px);
  padding: clamp(3rem, 6vw, 5rem) 0;
  background-color: #f8f8f8;
}

.business-header {
  text-align: center;
  margin-bottom: clamp(2rem, 4vw, 3rem);
}

.business-title {
  font-family: 'MiSans';
  font-size: clamp(1.5rem, 4vw, 2.375rem);
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
}

.business-subtitle {
  font-family: 'Times New Roman', serif;
  font-size: clamp(1.25rem, 3vw, 2rem);
  color: #ccc;
  text-transform: uppercase;
  letter-spacing: 4px;
}

.business-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(1rem, 2vw, 1.5rem);
  padding-top: clamp(30px, 4vw, 40px); /* 给图标留出空间 */
}

@media (min-width: 640px) {
  .business-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .business-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

.business-card {
  background: white;
  border-radius: clamp(0.75rem, 1.5vw, 1rem);
  padding: clamp(1.5rem, 3vw, 2rem) clamp(1rem, 2vw, 1.5rem) clamp(1rem, 2vw, 1.5rem);
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  margin-top: clamp(20px, 3vw, 30px); /* 图标悬浮的空间 */
}

.business-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.business-icon {
  width: clamp(40px, 5vw, 56px);
  height: clamp(40px, 5vw, 56px);
  border-radius: 50%;
  background-color: #e85a5a;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: clamp(-20px, -3vw, -28px);
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 4px 12px rgba(232, 90, 90, 0.3);
}

.business-icon svg {
  width: 50%;
  height: 50%;
  color: white;
}

.business-content {
  padding-top: clamp(0.5rem, 1vw, 0.75rem);
  text-align: center;
}

.business-content h3 {
  font-family: 'MiSans';
  font-size: clamp(0.875rem, 1.5vw, 1.125rem);
  font-weight: 600;
  color: #333;
  margin-bottom: clamp(0.5rem, 1vw, 0.75rem);
}

.business-content p {
  font-size: clamp(0.7rem, 1vw, 0.8rem);
  color: #999;
  line-height: 1.6;
}

/* ==================== 五大核心优势 ==================== */
.core-section {
  min-height: clamp(450px, 35vw, 670px);
  padding: clamp(3rem, 6vw, 5rem) 0;
  background-color: #fff;
}

.core-header {
  text-align: center;
  margin-bottom: clamp(2rem, 4vw, 3rem);
}

.core-title {
  font-family: 'MiSans';
  font-size: clamp(1.5rem, 4vw, 2.375rem);
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
}

.core-subtitle {
  font-family: 'Times New Roman', serif;
  font-size: clamp(1.25rem, 3vw, 2rem);
  color: #ccc;
  text-transform: uppercase;
  letter-spacing: 4px;
}

.core-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(1rem, 2vw, 1.5rem);
}

@media (min-width: 640px) {
  .core-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .core-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

.core-card {
  background: #f8f8f8;
  border-radius: clamp(0.75rem, 1.5vw, 1rem);
  padding: clamp(1rem, 2vw, 1.5rem);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.core-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.core-icon {
  width: 100%;
  margin-bottom: clamp(0.5rem, 1vw, 0.75rem);
  text-align: center;
}

.core-icon img {
  width: clamp(32px, 3.5vw, 44px);
  height: clamp(32px, 3.5vw, 44px);
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.core-card-title {
  font-family: 'MiSans';
  font-size: clamp(0.8rem, 1.1vw, 0.95rem);
  font-weight: 600;
  color: #333;
  margin-bottom: clamp(0.25rem, 0.5vw, 0.375rem);
  text-align: center;
}

.core-card-desc {
  font-size: clamp(0.65rem, 0.85vw, 0.75rem);
  color: #999;
  line-height: 1.5;
  text-align: center;
}

/* ==================== 动画 ==================== */
.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
