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
</template>
<script setup></script>
<style scoped>
.banner {
  min-height: clamp(400px, 42vw, 800px);
  display: flex;
  align-items: center;
  color: white;
  background: url('../../assets/images/联系我们_slices/Group 1000011080.png') no-repeat center center;
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
</style>
