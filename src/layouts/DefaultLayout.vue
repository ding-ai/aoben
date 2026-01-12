<template>
  <div class="min-h-screen flex flex-col">
    <!-- 固定顶部 Header -->
    <HeaderNav />

    <!-- 主内容区域 -->
    <main class="flex-1 w-full">
      <router-view />
    </main>

    <!-- 底部 Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import HeaderNav from '@/components/Header.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>
