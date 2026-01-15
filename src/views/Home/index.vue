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

    <!-- 集团资讯 -->
    <section class="news-section">
      <div class="news-container">
        <div class="news-wrapper">
          <!-- 左侧：标题和导航 -->
          <div class="news-left">
            <h2 class="news-title">集团资讯</h2>
            <p class="news-title-bg">GROUP INFO</p>
            <div class="news-line"></div>
            <p class="news-slogan">了解行业，注重未来</p>
            <div class="news-nav">
              <button class="nav-arrow" @click="prevNews" :disabled="currentNews === 0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <span class="nav-page">
                <span class="nav-current">{{ String(currentNews + 1).padStart(2, '0') }}</span> /
                {{ String(totalNewsPages).padStart(2, '0') }}
              </span>
              <button
                class="nav-arrow"
                @click="nextNews"
                :disabled="currentNews >= totalNewsPages - 1"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
            <button class="news-btn">
              <span>了解详情</span>
              <span>→</span>
            </button>
          </div>

          <!-- 右侧：新闻卡片 -->
          <div class="news-right">
            <div
              v-for="(item, idx) in newsItems"
              :key="idx"
              class="news-card"
              :class="{ active: idx === 0 }"
            >
              <div class="news-date">
                <span class="date-day">{{ item.date }}</span>
                <span class="date-month">{{ item.month }}</span>
              </div>
              <h3 class="news-card-title" :class="{ active: idx === 0 }">{{ item.title }}</h3>
              <p class="news-card-desc">{{ item.desc }}</p>
              <div class="news-card-image">
                <img :src="item.image" :alt="item.title" />
              </div>
              <div class="news-card-arrow" :class="{ active: idx === 0 }">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务分类 -->
    <section class="services-section">
      <div v-for="(cat, idx) in serviceCategories" :key="idx" class="service-item">
        <img :src="cat.image" :alt="cat.name" class="service-bg" />
        <div class="service-overlay"></div>
        <div class="service-content">
          <div class="service-tag">{{ cat.icon }}</div>
          <div class="service-title-wrap">
            <h3 class="service-title">{{ cat.name }}</h3>
            <div class="service-line"></div>
          </div>
          <div class="service-btn-wrap">
            <span class="service-btn">VIEW MORE</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import BannerSection from './components/BannerSection.vue'

const profileStats = [
  { number: '2016', label: '始创于（年）' },
  { number: '30+', label: '直营店（家）' },
  { number: '10万+', label: '客户（人）' },
  { number: '500+', label: '瑜伽教练（人）' },
]

const serviceCategories = [
  {
    name: '奥本瑜伽普拉提',
    icon: 'AOBÉN奥本',
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: '奥本美肤SPA',
    icon: 'AOBEN',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: '奥本科技医美',
    icon: 'Dr.AOBEN',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: '奥本学院',
    icon: 'AOBEN',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: '奥本先康达',
    icon: 'AOBEN LIFE',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  },
]

// 新闻数据
const newsItems = [
  {
    date: '20',
    month: '2025.05',
    title: '奥本运动完成Pre-A轮融...',
    desc: '奥本集团，"全员A"工程已在关键业务条线全面落地，研发中心、客户服务、知识...',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400',
  },
  {
    date: '09',
    month: '2025.05',
    title: 'AI赋能、资源共享，加速...',
    desc: '奥本集团旗下奥本先康达今日在苏州与先康达集团正式签署细胞科研战略合作协...',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400',
  },
  {
    date: '30',
    month: '2025.04',
    title: '奥本先康达与先康达集团...',
    desc: '毕业即就业、毕业即创业"人才培养模式正式启动',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400',
  },
]

const currentNews = ref(0)
const totalNewsPages = computed(() => Math.ceil(newsItems.length / 3))

const prevNews = () => {
  if (currentNews.value > 0) {
    currentNews.value--
  }
}

const nextNews = () => {
  if (currentNews.value < totalNewsPages.value - 1) {
    currentNews.value++
  }
}
</script>

<style scoped>
/* ==================== 集团简介区域 ==================== */
.group-profile {
  position: relative;
  width: 100%;
  /* 手机最小500px，中间按42vw缩放，最大800px */
  min-height: clamp(500px, 42vw, 800px);
  background-color: #fafafa;
  /* background-image: url('../../assets/images/首页_slices/Frame 1000011613.png'); */
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

/* ==================== 集团资讯区域 ==================== */
.news-section {
  padding: 96px 0;
  background-color: #f9f9f9;
}

.news-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.news-wrapper {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

@media (min-width: 1024px) {
  .news-wrapper {
    flex-direction: row;
    gap: 64px;
  }
}

/* 左侧标题区域 */
.news-left {
  position: relative;
}

@media (min-width: 1024px) {
  .news-left {
    width: 25%;
  }
}

.news-title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
}

.news-title-bg {
  font-family: serif;
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  opacity: 0.05;
  position: absolute;
  top: -16px;
  left: 0;
  pointer-events: none;
}

.news-line {
  width: 48px;
  height: 4px;
  background-color: #ff3b30;
  margin-top: 24px;
  margin-bottom: 32px;
}

.news-slogan {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 48px;
}

.news-nav {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
}

.nav-arrow {
  color: #999;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  transition: color 0.3s;
}

.nav-arrow:hover:not(:disabled) {
  color: #333;
}

.nav-arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.nav-page {
  font-size: 20px;
  font-weight: bold;
}

.nav-current {
  color: #ff3b30;
}

.news-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #ff3b30;
  color: white;
  padding: 12px 32px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.news-btn:hover {
  background-color: #dc2626;
}

/* 右侧新闻卡片 */
.news-right {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .news-right {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .news-right {
    width: 75%;
    grid-template-columns: repeat(3, 1fr);
  }
}

.news-card {
  background: white;
  padding: 32px;
  cursor: pointer;
  border-radius: 4px;
  transition: box-shadow 0.3s;
}

.news-card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.news-date {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 24px;
}

.date-day {
  font-size: 36px;
  font-weight: bold;
  color: #333;
}

.date-month {
  font-size: 14px;
  color: #999;
}

.news-card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.news-card-title.active {
  color: #ff3b30;
}

.news-card-desc {
  font-size: 14px;
  color: #999;
  margin-bottom: 24px;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-card-image {
  width: 100%;
  height: 160px;
  overflow: hidden;
  margin-bottom: 32px;
}

.news-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: all 0.5s;
  transform: scale(1);
}

.news-card:hover .news-card-image img {
  filter: grayscale(0%);
  transform: scale(1.1);
}

.news-card-arrow {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e5e5e5;
  color: #999;
  transition: all 0.3s;
}

.news-card-arrow.active {
  background-color: #ff3b30;
  border-color: #ff3b30;
  color: white;
}

.news-card:hover .news-card-arrow:not(.active) {
  border-color: #ff3b30;
  color: #ff3b30;
}

/* 手机端适配 */
@media (max-width: 640px) {
  .news-section {
    padding: 48px 0;
  }

  .news-title {
    font-size: 24px;
  }

  .news-title-bg {
    font-size: 32px;
  }

  .news-slogan {
    font-size: 16px;
    margin-bottom: 32px;
  }

  .news-card {
    padding: 24px;
  }

  .date-day {
    font-size: 28px;
  }

  .news-card-title {
    font-size: 16px;
  }

  .news-card-image {
    height: 140px;
  }
}

/* ==================== 服务分类区域 ==================== */
.services-section {
  display: flex;
  flex-direction: row;
  height: 600px;
  width: 100%;
  overflow: hidden;
  background-color: black;
}

.service-item {
  position: relative;
  flex: 1;
  cursor: pointer;
  overflow: hidden;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  transition: flex 0.7s ease-in-out;
}

.service-item:last-child {
  border-right: none;
}

.service-item:hover {
  flex: 2.5;
}

.service-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease;
}

.service-item:hover .service-bg {
  transform: scale(1.05);
}

.service-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: background-color 0.5s ease;
}

.service-item:hover .service-overlay {
  background-color: rgba(0, 0, 0, 0.2);
}

.service-content {
  position: relative;
  z-index: 10;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 48px;
  color: white;
  text-align: center;
  padding-left: 16px;
  padding-right: 16px;
  overflow: hidden;
}

.service-tag {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  color: black;
  padding: 6px 16px;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 24px;
  opacity: 0;
  transform: translateY(16px);
  transition: all 0.5s ease 0.1s;
}

.service-item:hover .service-tag {
  opacity: 1;
  transform: translateY(0);
}

.service-title-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service-title {
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.15em;
  white-space: nowrap;
  transition: transform 0.5s ease;
}

.service-item:hover .service-title {
  transform: scale(1.1);
}

.service-line {
  width: 0;
  height: 2px;
  background-color: #ff3b30;
  margin-top: 16px;
  transition: width 0.5s ease 0.2s;
}

.service-item:hover .service-line {
  width: 48px;
}

.service-btn-wrap {
  margin-top: 24px;
  opacity: 0;
  transition: opacity 0.5s ease 0.3s;
}

.service-item:hover .service-btn-wrap {
  opacity: 1;
}

.service-btn {
  font-size: 12px;
  letter-spacing: 0.15em;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 8px 16px;
  border-radius: 9999px;
  transition: all 0.3s ease;
}

.service-btn:hover {
  background-color: white;
  color: black;
}

/* 平板端适配 */
@media (max-width: 1024px) {
  .services-section {
    height: 500px;
  }

  .service-title {
    font-size: 16px;
  }

  .service-content {
    padding-bottom: 36px;
  }
}

/* 手机端适配 - 改为纵向排列 */
@media (max-width: 768px) {
  .services-section {
    flex-direction: column;
    height: auto;
  }

  .service-item {
    flex: none;
    height: 200px;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .service-item:last-child {
    border-bottom: none;
  }

  .service-item:hover {
    flex: none;
    height: 280px;
  }

  .service-content {
    padding-bottom: 24px;
  }

  .service-title {
    font-size: 16px;
  }

  .service-tag {
    font-size: 9px;
    padding: 4px 12px;
    margin-bottom: 16px;
  }

  .service-btn-wrap {
    margin-top: 16px;
  }

  .service-btn {
    font-size: 10px;
    padding: 6px 12px;
  }
}
</style>
