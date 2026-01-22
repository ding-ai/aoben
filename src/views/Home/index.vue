<template>
  <div class="w-full">
    <ScrollIndicator />
    <!-- Banner -->
    <BannerSection />

    <!-- 集团简介 -->
    <section class="group-profile">
      <div class="profile-container">
        <!-- 左侧文字内容 -->
        <div class="profile-content">
          <h2 class="profile-title">集团简介</h2>
          <img src="https://cdn.aoben.yoga/membermini/web/20260121/GROUPPROFILE.png/low_quality?imageSlim"
            alt="GROUP PROFILE" class="profile-subtitle-img" />

          <div class="profile-text">
            <p>
              奥本集团是一家专注于瑜伽、养生、医美领域的健康科技公司，融合科技医美、美
              容养生、运动美学三位一体的理念，公司在行业内首创"奥本新康美"的商业模式。
            </p>
            <p>
              奥本集团已构建“瑜伽、医美、健康、教育、零售”的多元品牌矩阵，拥有30余家城
              市地标直营店，并计划三年内扩张至300家。
            </p>
          </div>

          <button class="profile-btn">
            <span>了解详情</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <!-- 右侧数据统计 -->
        <div class="profile-stats" ref="statsRef">
          <div class="stat-item" v-for="stat in profileStats" :key="stat.label">
            <div class="stat-number">{{ stat.animatedNumber }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>

        <!-- 右上角红色背景装饰图 - 最底层 z-index: 1 -->
        <div class="red-decoration-bg">
          <img src="https://cdn.aoben.yoga/membermini/web/20260119/Rectangle346241192.webp/low_quality?imageSlim" alt=""
            loading="lazy" decoding="async" />
        </div>

        <!-- 中间建筑图片 - 上层 z-index: 5 -->
        <div class="profile-image">
          <img src="https://cdn.aoben.yoga/membermini/web/20260119/Frame1000011614.webp/low_quality?imageSlim"
            alt="奥本大楼" loading="lazy" decoding="async" />
        </div>
      </div>
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
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <span class="nav-page">
                <span class="nav-current">{{ String(currentNews + 1).padStart(2, '0') }}</span> /
                {{ String(totalNewsPages).padStart(2, '0') }}
              </span>
              <button class="nav-arrow" @click="nextNews" :disabled="currentNews >= totalNewsPages - 1">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            <button class="news-btn" @click="goToNews">
              <span>了解详情</span>
              <span>→</span>
            </button>
          </div>

          <!-- 右侧：新闻卡片 -->
          <div class="news-right">
            <div v-for="(item, idx) in newsItems" :key="idx" class="news-card"
              :class="{ active: idx === activeNewsCard }" @click="handleNewsCardClick(idx)">
              <div class="news-date">
                <span class="date-day">{{ item.date }}</span>
                <span class="date-month">{{ item.month }}</span>
              </div>
              <h3 class="news-card-title" :class="{ active: idx === activeNewsCard }">
                {{ item.title }}
              </h3>
              <p class="news-card-desc">{{ item.desc }}</p>
              <div class="news-card-image">
                <img :src="item.image" :alt="item.title" loading="lazy" decoding="async" />
              </div>
              <div class="news-card-arrow" :class="{ active: idx === activeNewsCard }">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务分类 -->
    <section class="flex flex-col lg:flex-row h-auto lg:h-[920px] w-full overflow-hidden bg-black relative">
      <div v-for="(cat, idx) in serviceCategories" :key="idx"
        class="relative flex-none lg:flex-1 transition-all duration-[800ms] ease-in-out cursor-pointer overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5 last:border-0 h-[260px] lg:h-full will-change-[flex]"
        :class="[
          !isMobile ? 'lg:hover:flex-[6]' : '',
          activeCategory === idx && isMobile ? 'lg:flex-[6]' : 'lg:flex-1',
        ]" @click="isMobile && (activeCategory = activeCategory === idx ? null : idx)">
        <!-- 背景图片层 -->
        <div class="absolute inset-0 z-0">
          <img :src="cat.image" :alt="cat.name"
            class="w-full h-full object-cover transition-transform duration-[1200ms]" :class="[
              (!isMobile && 'group-hover:scale-105') ||
              (activeCategory === idx && isMobile ? 'scale-105' : 'scale-100'),
            ]" loading="lazy" decoding="async" />
          <div class="absolute inset-0 transition-colors duration-700" :class="[
            (!isMobile && 'group-hover:bg-black/15') ||
            (activeCategory === idx && isMobile ? 'bg-black/15' : 'bg-black/30'),
          ]"></div>
        </div>

        <!-- 内容承载层 -->
        <div class="absolute inset-x-0 bottom-0 w-full h-full flex flex-col items-center justify-end z-20 pb-0 lg:pb-16"
          :class="!isMobile ? 'group' : ''">
          <!-- 1. 展开后的描述卡片 -->
          <!-- 动画策略：
            - 鼠标移入：延迟 400ms (delay-[400ms])，等待容器展开一定宽度后再渐入。
            - 鼠标移出：不设延迟 (delay-0)，持续时间缩短 (duration-200)，实现内容先于容器复原而消失。
            - 样式：居中且左右留空 (w-[90%] max-w-4xl mx-auto)。
          -->
          <div
            class="absolute bottom-2 lg:bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-black/50 backdrop-blur-[32px] rounded-xl p-6 lg:p-16 min-h-[150px] lg:min-h-[240px] transition-all duration-200 lg:duration-600 ease-out flex flex-col items-center justify-center text-center border border-white/10 shadow-2xl"
            :class="[
              (!isMobile &&
                'group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-[400ms] translate-y-full opacity-0 delay-0') ||
              (activeCategory === idx && isMobile
                ? 'translate-y-0 opacity-100 delay-[400ms]'
                : 'translate-y-full opacity-0 delay-0'),
            ]">
            <div class="bg-white px-5 py-1.5 mb-5 shadow-xl flex items-center justify-center rounded-sm">
              <!-- <span
                :style="{ color: cat.textColor }"
                class="text-[11px] font-bold tracking-[0.1em] uppercase whitespace-nowrap"
              >
                {{ cat.img }}
              </span> -->
              <img :src="cat.img" alt="" />
            </div>
            <h4 class="text-white text-2xl lg:text-4xl font-bold tracking-widest mb-6 whitespace-nowrap">
              {{ cat.name }}
            </h4>
            <p
              class="text-white/80 text-[13px] lg:text-base leading-loose max-w-3xl font-light text-center px-2 lg:px-6">
              {{ cat.description }}
            </p>
          </div>

          <!-- 2. 初始状态的底部栏 -->
          <div
            class="absolute bottom-8 lg:bottom-10 w-full h-[120px] lg:h-[140px] bg-white/10 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-200 lg:duration-300 ease-out"
            :class="[
              (!isMobile &&
                'group-hover:opacity-0 group-hover:-translate-y-32 opacity-100 translate-y-0') ||
              (activeCategory === idx && isMobile
                ? 'opacity-0 -translate-y-32'
                : 'opacity-100 translate-y-0'),
            ]">
            <div class="bg-white px-4 lg:px-5 py-1.5 mb-3 shadow-md flex items-center justify-center rounded-sm">
              <span :style="{ color: cat.textColor }"
                class="text-[10px] lg:text-[11px] font-bold tracking-[0.1em] whitespace-nowrap">
                {{ cat.tag }}
              </span>
            </div>
            <h3 class="text-white text-sm lg:text-lg font-medium tracking-[0.2em] whitespace-nowrap">
              {{ cat.name }}
            </h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import BannerSection from './components/BannerSection.vue'
import ScrollIndicator from '@/components/ScrollIndicator.vue'

// 服务分类激活状态 - 仅用于移动端
const activeCategory = ref(null)

// 新闻卡片激活状态
const activeNewsCard = ref(null)

// 检测是否为移动端
const isMobile = ref(false)

// 初始化路由器
const router = useRouter()

const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const statsRef = ref(null)
const profileStats = ref([
  { number: '2016', animatedNumber: '0', label: '始创于（年）', target: 2016, suffix: '' },
  { number: '30+', animatedNumber: '0', label: '直营店（家）', target: 30, suffix: '+' },
  { number: '10万+', animatedNumber: '0', label: '客户（人）', target: 10, suffix: '万+' },
  { number: '500+', animatedNumber: '0', label: '瑜伽教练（人）', target: 500, suffix: '+' },
])

let observer = null
let animationFrameId = null

// 优化的数字动画函数
const animateNumber = (stat, duration = 2000) => {
  const start = 0
  const end = stat.target
  const startTime = performance.now()

  const updateNumber = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    // 使用缓动函数 (easeOutQuart)
    const easeProgress = 1 - Math.pow(1 - progress, 4)
    const current = Math.floor(start + (end - start) * easeProgress)

    stat.animatedNumber = current + stat.suffix

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(updateNumber)
    } else {
      stat.animatedNumber = end + stat.suffix
    }
  }

  requestAnimationFrame(updateNumber)
}

// 使用 Intersection Observer 检测元素是否进入视口
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 元素进入视口，所有数字同时开始动画
          profileStats.value.forEach((stat) => {
            animateNumber(stat)
          })
          observer.unobserve(entry.target) // 动画只执行一次
        }
      })
    },
    { threshold: 0.3 }, // 当30%的元素可见时触发
  )

  if (statsRef.value) {
    observer.observe(statsRef.value)
  }
})

// 清理资源
onUnmounted(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})

const serviceCategories = [
  {
    name: '奥本瑜伽普拉提',
    img: 'https://cdn.aoben.yoga/membermini/web/20260121/Frame36.png/low_quality?imageSlim',
    textColor: '#E52E2A',
    image:
      'https://cdn.aoben.yoga/membermini/web/20260119/Frame1000011602.webp/low_quality?imageSlim',
    description:
      '奥本瑜伽普拉提致力于提供最专业的瑜伽教学与普拉提核心训练，环境优雅，设施齐全，为您打造身心合一的运动体验。',
  },
  {
    name: '奥本美肤SPA',
    img: 'https://cdn.aoben.yoga/membermini/web/20260121/Frame37.png/low_quality?imageSlim',
    textColor: '#2DAA9E',
    image:
      'https://cdn.aoben.yoga/membermini/web/20260119/Frame1000011603.webp/low_quality?imageSlim',
    description:
      '奥本美肤SPA围绕面部年轻化、身体健康化以及形体标准化展开服务。我们融合高科仪器的精准之力与独创按摩手法的精妙之道，为每一位顾客量身定制专属的个性化服务。',
  },
  {
    name: '奥本科技医美',
    img: 'https://cdn.aoben.yoga/membermini/web/20260121/Frame37(1).png/low_quality?imageSlim',
    textColor: '#00A2E8',
    image:
      'https://cdn.aoben.yoga/membermini/web/20260119/Frame1000011604.webp/low_quality?imageSlim',
    description:
      '奥本科技医美融合前沿医学科技与美学理念，提供安全、专业、个性化的医美解决方案，让美丽与健康同行，助您焕发自信光彩。',
  },
  {
    name: '奥本学院',
    img: 'https://cdn.aoben.yoga/membermini/web/20260121/Frame1000011608.png/low_quality?imageSlim',
    textColor: '#1A1A1A',
    image:
      'https://cdn.aoben.yoga/membermini/web/20260119/Frame1000011605.webp/low_quality?imageSlim',
    description:
      '奥本学院专注于健康产业人才培养与商业赋能，提供系统化培训课程与实战指导，助力学员实现职业成长与创业梦想。',
  },
  {
    name: '奥本先康达',
    img: 'https://cdn.aoben.yoga/membermini/web/20260121/Frame37(2).png/low_quality?imageSlim',
    textColor: '#1A1A1A',
    image:
      'https://cdn.aoben.yoga/membermini/web/20260119/Frame1000011606.webp/low_quality?imageSlim',
    description:
      '奥本先康达专注于生物科技研发与转化，探索生命科技，守护人类健康，让前沿科技造福更多家庭与社会。',
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

// 处理新闻卡片点击事件
const handleNewsCardClick = (index) => {
  // 如果点击的是已激活的卡片，则取消激活
  if (activeNewsCard.value === index) {
    activeNewsCard.value = null
  } else {
    // 否则激活该卡片
    activeNewsCard.value = index
  }
}

// 跳转到新闻页面
const goToNews = () => {
  router.push('/news')
}
</script>

<style scoped>
/* ==================== 集团简介区域 ==================== */
.group-profile {
  position: relative;
  width: 100%;
  min-height: 700px;
  background-color: #fafafa;
  background-image: url('https://cdn.aoben.yoga/membermini/web/20260119/Frame1000011562.webp/low_quality?imageSlim');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

@media (max-width: 1024px) {
  .group-profile {
    min-height: 600px;
  }
}

@media (max-width: 768px) {
  .group-profile {
    min-height: 550px;
  }
}

@media (max-width: 640px) {
  .group-profile {
    min-height: 500px;
  }
}

.profile-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 7.5rem 3rem 5rem;
  position: relative;
  height: 100%;
  min-height: 700px;
}

@media (max-width: 1024px) {
  .profile-container {
    padding: 5rem 2rem 4rem;
    min-height: 600px;
  }
}

@media (max-width: 768px) {
  .profile-container {
    padding: 4rem 1.5rem 3rem;
    min-height: 550px;
  }
}

@media (max-width: 640px) {
  .profile-container {
    padding: 3rem 1rem 2.5rem;
    min-height: 500px;
  }
}

/* 左侧内容 */
.profile-content {
  position: relative;
  z-index: 10;
  max-width: 540px;
}

@media (max-width: 1024px) {
  .profile-content {
    max-width: 400px;
  }
}

@media (max-width: 768px) {
  .profile-content {
    max-width: 300px;
  }
}

@media (max-width: 640px) {
  .profile-content {
    max-width: 250px;
  }
}

@media (max-width: 480px) {
  .profile-content {
    max-width: 220px;
  }
}

@media (max-width: 440px) {
  .profile-content {
    max-width: 200px;
  }
}

@media (max-width: 375px) {
  .profile-content {
    max-width: 180px;
  }
}

.profile-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  /* margin-bottom: 0.5rem; */
  /* letter-spacing: 0.1em; */
}

@media (max-width: 1024px) {
  .profile-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .profile-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 640px) {
  .profile-title {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .profile-title {
    font-size: 1.125rem;
  }
}

@media (max-width: 375px) {
  .profile-title {
    font-size: 1rem;
  }
}

.profile-subtitle-img {
  max-width: 200px;
  height: auto;
  margin-bottom: 2rem;
}

@media (max-width: 1024px) {
  .profile-subtitle-img {
    max-width: 180px;
    margin-bottom: 1.75rem;
  }
}

@media (max-width: 768px) {
  .profile-subtitle-img {
    max-width: 160px;
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 640px) {
  .profile-subtitle-img {
    max-width: 140px;
    margin-bottom: 1.25rem;
  }
}

@media (max-width: 480px) {
  .profile-subtitle-img {
    max-width: 120px;
    margin-bottom: 1rem;
  }
}

@media (max-width: 375px) {
  .profile-subtitle-img {
    max-width: 100px;
    margin-bottom: 0.875rem;
  }
}

.profile-text {
  color: #a39b9b;
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 3rem;
}

@media (max-width: 1024px) {
  .profile-text {
    font-size: 0.8125rem;
    line-height: 1.4;
    margin-bottom: 1.75rem;
  }
}

@media (max-width: 768px) {
  .profile-text {
    font-size: 0.75rem;
    line-height: 1.2;
    margin-bottom: 3.5rem;
  }
}

@media (max-width: 640px) {
  .profile-text {
    font-size: 0.6875rem;
    line-height: 1.2;
    margin-bottom: 3.25rem;
  }
}

@media (max-width: 480px) {
  .profile-text {
    font-size: 0.625rem;
    line-height: 1.15;
    margin-bottom: 2.5rem;
  }
}

@media (max-width: 375px) {
  .profile-text {
    font-size: 0.5625rem;
    line-height: 1.2;
    margin-bottom: 2rem;
  }
}

.profile-text p {
  margin-bottom: 1rem;
}

@media (max-width: 640px) {
  .profile-text p {
    margin-bottom: 0.75rem;
  }
}

@media (max-width: 480px) {
  .profile-text p {
    margin-bottom: 0.7rem;
    line-height: 1.8;
    /* letter-spacing: 1px; */
  }
}

@media (max-width: 375px) {
  .profile-text p {
    margin-bottom: 0.5rem;
  }
}

.profile-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  background: linear-gradient(135deg, #e85a5a 0%, #d14545 100%);
  color: white;
  border: none;
  border-radius: 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(232, 90, 90, 0.3);
  will-change: transform;
}

@media (max-width: 1024px) {
  .profile-btn {
    padding: 0.6875rem 1.5rem;
    font-size: 0.8125rem;
  }
}

@media (max-width: 768px) {
  .profile-btn {
    padding: 0.625rem 1.25rem;
    font-size: 0.75rem;
  }
}

@media (max-width: 640px) {
  .profile-btn {
    padding: 0.5625rem 1.125rem;
    font-size: 0.6875rem;
    gap: 0.375rem;
  }
}

@media (max-width: 480px) {
  .profile-btn {
    padding: 0.5rem 1rem;
    font-size: 0.625rem;
    gap: 0.3rem;
  }
}

@media (max-width: 375px) {
  .profile-btn {
    padding: 0.4375rem 0.875rem;
    font-size: 0.5625rem;
  }
}

.profile-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(232, 90, 90, 0.4);
}

@media (max-width: 640px) {
  .profile-btn:hover {
    transform: translateY(-1px);
  }
}

/* 中间建筑图片 - 使用绝对定位，z-index: 5 在上层 */
.profile-image {
  position: absolute;
  right: 0px;
  bottom: 0;
  width: 1300px;
  height: auto;
  z-index: 5;
  pointer-events: none;
}

@media (max-width: 1280px) {
  .profile-image {
    right: 0px;
    width: 1000px;
  }
}

@media (max-width: 1024px) {
  .profile-image {
    right: 0px;
    width: 900px;
  }
}

@media (max-width: 768px) {
  .profile-image {
    right: 0px;
    bottom: 0;
    width: 800px;
    /* opacity: 0.8; */
  }
}

@media (max-width: 640px) {
  .profile-image {
    right: 0%;
    /* bottom: 50px; */
    /* transform: translateX(50%); */
    width: 700px;
    /* opacity: 0.5; */
  }
}

@media (max-width: 480px) {
  .profile-image {
    width: 750px;
    bottom: 0px;
    transform: translate(120px, 0px);
  }
}

@media (max-width: 375px) {
  .profile-image {
    width: 700px;
    transform: translate(110px, 0px);
  }
}

@media (max-width: 360px) {
  .profile-image {
    width: 550px;
    transform: translate(70px, 0px);
  }
}

.profile-image img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* 右上角红色背景装饰图 - z-index: 1 在底层 */
.red-decoration-bg {
  position: absolute;
  top: 90px;
  right: 0;
  width: 350px;
  height: 500px;
  z-index: 1;
  pointer-events: none;
}

@media (max-width: 1280px) {
  .red-decoration-bg {
    width: 300px;
    top: 80px;
  }
}

@media (max-width: 1024px) {
  .red-decoration-bg {
    width: 260px;
    top: 70px;
  }
}

@media (max-width: 768px) {
  .red-decoration-bg {
    width: 220px;
    top: 60px;
  }
}

@media (max-width: 640px) {
  .red-decoration-bg {
    width: 200px;
    top: 50px;
  }
}

@media (max-width: 480px) {
  .red-decoration-bg {
    width: 180px;
    top: 80px;
    transform: translate(20px, 10px);
  }
}

@media (max-width: 375px) {
  .red-decoration-bg {
    width: 180px;
    top: 70px;
    transform: translate(15px, 8px);
  }
}

@media (max-width: 360px) {
  .red-decoration-bg {
    width: 150px;
    top: 30px;
    transform: translate(10px, 5px);
  }
}

.red-decoration-bg img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* 右侧数据统计 - 绝对定位在红色区域内，z-index: 10 在最上层 */
.profile-stats {
  position: absolute;
  top: 8rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  z-index: 10;
}

@media (max-width: 1280px) {
  .profile-stats {
    top: 7rem;
    right: 2rem;
    gap: 2.25rem;
  }
}

@media (max-width: 1024px) {
  .profile-stats {
    top: 6rem;
    right: 2rem;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .profile-stats {
    top: 5rem;
    right: 2rem;
    gap: 1.75rem;
  }
}

@media (max-width: 640px) {
  .profile-stats {
    top: 4rem;
    right: 2rem;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .profile-stats {
    top: 7rem;
    right: 1.25rem;
    gap: 1.125rem;
  }
}

@media (max-width: 375px) {
  .profile-stats {
    top: 8rem;
    right: 1rem;
    gap: 1rem;
  }
}

@media (max-width: 360px) {
  .profile-stats {
    top: 2.75rem;
    right: 0.875rem;
    gap: 0.875rem;
  }
}

.stat-item {
  text-align: right;
  color: white;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 0.25rem;
}

@media (max-width: 1024px) {
  .stat-number {
    font-size: 2.25rem;
  }
}

@media (max-width: 768px) {
  .stat-number {
    font-size: 2rem;
  }
}

@media (max-width: 640px) {
  .stat-number {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .stat-number {
    font-size: 1.375rem;
  }
}

@media (max-width: 375px) {
  .stat-number {
    font-size: 1.25rem;
  }
}

@media (max-width: 360px) {
  .stat-number {
    font-size: 1.125rem;
  }
}

.stat-label {
  font-size: 0.75rem;
  opacity: 0.9;
  font-weight: 300;
}

@media (max-width: 1024px) {
  .stat-label {
    font-size: 0.6875rem;
  }
}

@media (max-width: 768px) {
  .stat-label {
    font-size: 0.625rem;
  }
}

@media (max-width: 640px) {
  .stat-label {
    font-size: 0.5625rem;
  }
}

@media (max-width: 480px) {
  .stat-label {
    font-size: 0.5rem;
  }
}

@media (max-width: 375px) {
  .stat-label {
    font-size: 0.4375rem;
  }
}

@media (max-width: 360px) {
  .stat-label {
    font-size: 0.4rem;
  }
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
  font-family: 'MiSans', sans-serif;
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

@media (min-width: 640px) {
  .news-right {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (min-width: 768px) {
  .news-right {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
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

@media (max-width: 768px) {
  .date-day {
    font-size: 32px;
  }
}

@media (max-width: 480px) {
  .date-day {
    font-size: 28px;
  }
}

.date-month {
  font-size: 14px;
  color: #999;
}

@media (max-width: 480px) {
  .date-month {
    font-size: 12px;
  }
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

@media (max-width: 768px) {
  .news-card-title {
    font-size: 17px;
  }
}

@media (max-width: 480px) {
  .news-card-title {
    font-size: 16px;
  }
}

.news-card-desc {
  font-size: 14px;
  color: #999;
  margin-bottom: 24px;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 480px) {
  .news-card-desc {
    font-size: 13px;
    margin-bottom: 20px;
  }
}

.news-card-image {
  width: 100%;
  height: 160px;
  overflow: hidden;
  margin-bottom: 32px;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .news-card-image {
    height: 150px;
    margin-bottom: 28px;
  }
}

@media (max-width: 480px) {
  .news-card-image {
    height: 140px;
    margin-bottom: 24px;
  }
}

.news-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition:
    transform 0.4s ease,
    filter 0.4s ease;
  will-change: transform, filter;
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

@media (max-width: 480px) {
  .news-card-arrow {
    width: 36px;
    height: 36px;
  }
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

/* 平板端适配 */
@media (max-width: 1024px) {
  .news-section {
    padding: 72px 0;
  }

  .news-container {
    padding: 0 20px;
  }

  .news-wrapper {
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .news-section {
    padding: 60px 0;
  }

  .news-container {
    padding: 0 16px;
  }

  .news-wrapper {
    gap: 36px;
  }

  .news-title {
    font-size: 26px;
  }

  .news-title-bg {
    font-size: 40px;
  }

  .news-slogan {
    font-size: 17px;
    margin-bottom: 40px;
  }

  .news-card {
    padding: 28px;
  }
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
}

@media (max-width: 480px) {
  .news-section {
    padding: 40px 0;
  }

  .news-container {
    padding: 0 12px;
  }

  .news-wrapper {
    gap: 28px;
  }

  .news-title {
    font-size: 22px;
  }

  .news-title-bg {
    font-size: 28px;
  }

  .news-line {
    width: 40px;
    height: 3px;
    margin-top: 20px;
    margin-bottom: 28px;
  }

  .news-slogan {
    font-size: 15px;
    margin-bottom: 28px;
  }

  .news-nav {
    gap: 12px;
    margin-bottom: 28px;
  }

  .nav-page {
    font-size: 18px;
  }

  .news-btn {
    padding: 10px 28px;
    font-size: 13px;
  }

  .news-card {
    padding: 20px;
  }
}
</style>
