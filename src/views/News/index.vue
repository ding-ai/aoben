<template>
  <div class="news-page">
    <!-- Banner -->
    <header class="banner">
      <div class="container-main banner-content">
        <h1 class="banner-title animate-fade-in-up">新闻动态</h1>
        <p class="banner-subtitle animate-fade-in-up" style="animation-delay: 0.2s">
          了解集团最新消息, 以便与我们合作
        </p>
      </div>
    </header>

    <!-- 最新动态 -->
    <section class="section-padding">
      <div class="container-main">
        <h2 class="section-title-left">最新动态</h2>

        <div class="news-grid">
          <a href="#" class="news-card" v-for="item in latestNews" :key="item.id">
            <div class="news-card-image">
              <img :src="item.image" :alt="item.title" class="image-fill" />
            </div>
            <div class="news-card-body">
              <h3 class="news-card-title" :title="item.title">{{ item.title }}</h3>
              <p class="news-card-desc">{{ item.desc }}</p>
              <p class="news-card-date">{{ item.date }}</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- 往期动态 -->
    <section class="section-padding bg-gray-50">
      <div class="container-main">
        <h2 class="section-title-left">往期动态</h2>

        <div class="past-news-list">
          <a href="#" class="past-news-item" v-for="item in pastNews" :key="item.id">
            <div class="past-news-image">
              <img :src="item.image" :alt="item.title" />
            </div>
            <div class="past-news-content">
              <h3 class="past-news-title">{{ item.title }}</h3>
              <p class="past-news-desc">{{ item.desc }}</p>
              <p class="past-news-date">{{ item.date }}</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- 分页 -->
    <section class="pagination-section">
      <div class="container-main">
        <div class="pagination">
          <button class="pagination-btn">
            <img src="/src/assets/images/新闻资讯_slices/chevron-left@2x.png" alt="上一页" />
          </button>
          <span class="pagination-text">01/03</span>
          <button class="pagination-btn">
            <img src="/src/assets/images/新闻资讯_slices/chevron-left@2x(1).png" alt="下一页" />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const latestNews = [
  {
    id: 1,
    title: '[公司动态][转载]喜报|重磅!先康达生命PANK细胞疗法获美国FDA孤儿药资格认定，用于肝癌治疗',
    desc: '以科技重构产业，以服务赢得人心，奥本走进发展新阶段',
    date: '2025.05.20',
    image: 'https://cdn.aoben.yoga/membermini/download/20250523/news.png/low_quality?imageSlim',
  },
  {
    id: 2,
    title: '奥本运动完成Pre-A轮融资，与苏州步步高投资集团达成战略合作伙伴',
    desc: '奥本集团，"全员A"工程已在关键业务条线全面落地，研发中心、客户服务、知识管理与培训内容四大板块均实现日常化使用AI工具。',
    date: '2025.05.20',
    image: 'https://cdn.aoben.yoga/membermini/yuangong/20250606/das.png/low_quality?imageSlim',
  },
  {
    id: 3,
    title: 'Ai赋能、资源共享，共同加速中国新康美产业数字化转型',
    desc: '奥本集团旗下奥本先康达今日在苏州与先康达集团正式签署细胞科研战略合作协议，并举办"细胞康养战略合作签约会"。',
    date: '2025.05.20',
    image: 'https://cdn.aoben.yoga/membermini/test/20250509/AI.png/low_quality?imageSlim',
  },
]

const pastNews = [
  {
    id: 1,
    title: '奥本运动完成Pre-A轮融资，与苏州步步高投资集团达成战略合作伙伴',
    desc: '奥本集团，"全员A"工程已在关键业务条线全面落地，研发中心、客户服务、知识管理与培训内容四大板块均实现日常化使用AI工具。',
    date: '2025.05.20',
    image: 'https://cdn.aoben.yoga/membermini/test/20250509/AI.png/low_quality?imageSlim',
  },
  {
    id: 2,
    title: '奥本运动完成Pre-A轮融资，与苏州步步高投资集团达成战略合作伙伴',
    desc: '奥本集团，"全员A"工程已在关键业务条线全面落地，研发中心、客户服务、知识管理与培训内容四大板块均实现日常化使用AI工具。',
    date: '2025.05.20',
    image: 'https://cdn.aoben.yoga/membermini/test/20250509/AI.png/low_quality?imageSlim',
  },
  {
    id: 3,
    title: '奥本运动完成Pre-A轮融资，与苏州步步高投资集团达成战略合作伙伴',
    desc: '奥本集团，"全员A"工程已在关键业务条线全面落地，研发中心、客户服务、知识管理与培训内容四大板块均实现日常化使用AI工具。',
    date: '2025.05.20',
    image: 'https://cdn.aoben.yoga/membermini/test/20250509/AI.png/low_quality?imageSlim',
  },
]
</script>

<style scoped>
/* ==================== Banner ==================== */
.banner {
  min-height: clamp(400px, 42vw, 800px);
  display: flex;
  align-items: center;
  color: white;
  background: url('../../assets/images/新闻资讯_slices/官网正品 1@2x.png') no-repeat center center;
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

/* ==================== Section 标题 ==================== */
.section-title-left {
  font-family: 'MiSans';
  font-size: clamp(1.5rem, 4vw, 2.375rem);
  font-weight: 700;
  color: #333;
  margin-bottom: clamp(1rem, 3vw, 1.5rem);
}

/* ==================== 最新动态卡片 ==================== */
.news-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.5rem, 3vw, 2rem);
}

@media (min-width: 640px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .news-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.news-card {
  display: block;
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.news-card-image {
  width: 100%;
  height: clamp(160px, 20vw, 260px);
  overflow: hidden;
  border: 1px solid #eee;
}

.news-card-body {
  padding: clamp(1rem, 2vw, 1.5rem);
}

.news-card-title {
  font-family: 'MiSans';
  font-size: clamp(1rem, 2vw, 1.375rem);
  font-weight: 700;
  line-height: 1.4;
  color: #333;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-card-desc {
  font-size: clamp(0.8rem, 1.2vw, 0.9rem);
  color: #666;
  line-height: 1.6;
  margin: clamp(0.75rem, 1.5vw, 1.25rem) 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-card-date {
  font-size: clamp(0.75rem, 1vw, 0.875rem);
  color: #999;
  text-align: right;
}

/* ==================== 往期动态 ==================== */
.past-news-list {
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 3vw, 2rem);
}

.past-news-item {
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 2vw, 1.5rem);
  padding-bottom: clamp(1.5rem, 3vw, 2rem);
  border-bottom: 1px solid #eee;
  transition: opacity 0.3s;
}

.past-news-item:hover {
  opacity: 0.85;
}

@media (min-width: 768px) {
  .past-news-item {
    flex-direction: row;
  }
}

.past-news-image {
  flex-shrink: 0;
  width: 100%;
  height: clamp(180px, 25vw, 214px);
  overflow: hidden;
  border-radius: 0.5rem;
}

@media (min-width: 768px) {
  .past-news-image {
    width: clamp(280px, 25vw, 380px);
  }
}

.past-news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.past-news-item:hover .past-news-image img {
  transform: scale(1.05);
}

.past-news-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.past-news-title {
  font-family: 'MiSans';
  font-size: clamp(1rem, 2vw, 1.375rem);
  font-weight: 700;
  color: #333;
  line-height: 1.4;
  margin-bottom: clamp(0.5rem, 1vw, 0.75rem);
}

.past-news-desc {
  font-family: 'MiSans';
  font-size: clamp(0.8rem, 1.2vw, 0.9rem);
  color: #666;
  line-height: 1.8;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.past-news-date {
  font-size: clamp(0.75rem, 1vw, 0.875rem);
  color: #999;
  text-align: right;
  margin-top: auto;
}

/* ==================== 分页 ==================== */
.pagination-section {
  padding: clamp(2rem, 4vw, 3rem) 0;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(0.75rem, 1.5vw, 1rem);
}

.pagination-btn {
  width: clamp(28px, 3vw, 36px);
  height: clamp(28px, 3vw, 36px);
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.3s;
}

.pagination-btn:hover {
  border-color: #e85a5a;
}

.pagination-btn img {
  width: clamp(14px, 1.5vw, 18px);
  height: auto;
}

.pagination-text {
  font-size: clamp(1.25rem, 2.5vw, 1.875rem);
  color: #333;
  font-weight: 500;
}

/* ==================== 通用 ==================== */
.image-fill {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
