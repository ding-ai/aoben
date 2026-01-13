<template>
  <header class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'">
    <div class="header-container">
      <!-- Logo -->
      <router-link to="/" class="flex-shrink-0">
        <img src="../assets/images/首页_slices/加粗细@2x.png" alt="AOBEN奥本" class="logo-custom"
          :class="scrolled ? 'brightness-0' : ''" />
      </router-link>

      <!-- 桌面端导航 -->
      <nav class="hidden lg:flex items-center gap-6 xl:gap-12">
        <router-link v-for="item in navItems" :key="item.path" :to="item.path" class="nav-link"
          :class="scrolled ? 'text-gray-700' : 'text-white'">
          {{ item.name }}
        </router-link>

        <span :class="scrolled ? 'text-gray-300' : 'text-white/30'">|</span>

        <!-- 下载APP按钮 -->
        <div class="group relative">
          <div
            class="flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/60 cursor-pointer transition-all hover:border-white"
            :class="scrolled ? 'border-gray-300 hover:border-gray-400' : ''">
            <!-- 圆形图标框 -->
            <div class="w-8 h-8 rounded-full border border-current flex items-center justify-center"
              :class="scrolled ? 'text-gray-600' : 'text-white'">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <span class="text-base font-medium" :class="scrolled ? 'text-gray-700' : 'text-white'">下载APP</span>
          </div>

          <!-- 二维码弹窗 -->
          <div
            class="absolute top-full left-1/2 -translate-x-1/2 mt-4 opacity-0 invisible translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
            <!-- 顶部小三角 -->
            <div class="w-4 h-4 bg-white rotate-45 mx-auto -mb-2 shadow-sm"></div>
            <!-- 弹窗主体 -->
            <div class="bg-white rounded-2xl p-6 shadow-2xl">
              <!-- 二维码区域 -->
              <div class="w-44 h-44 bg-[#f07070] rounded-xl mb-4 flex items-center justify-center">
                <!-- 这里放真实二维码图片 -->
                <span class="text-white/80 text-sm">二维码</span>
              </div>
              <p class="text-gray-400 text-sm text-center">扫描二维码下载APP</p>
            </div>
          </div>
        </div>
      </nav>

      <!-- 移动端菜单按钮 -->
      <button class="lg:hidden w-10 h-10 flex items-center justify-center" @click="menuOpen = !menuOpen">
        <div class="w-6 flex flex-col gap-1.5">
          <span class="block h-0.5 rounded-full transition-all" :class="[
            scrolled ? 'bg-gray-800' : 'bg-white',
            menuOpen ? 'rotate-45 translate-y-2' : '',
          ]"></span>
          <span class="block h-0.5 rounded-full transition-all"
            :class="[scrolled ? 'bg-gray-800' : 'bg-white', menuOpen ? 'opacity-0' : '']"></span>
          <span class="block h-0.5 rounded-full transition-all" :class="[
            scrolled ? 'bg-gray-800' : 'bg-white',
            menuOpen ? '-rotate-45 -translate-y-2' : '',
          ]"></span>
        </div>
      </button>
    </div>

    <!-- 移动端菜单 -->
    <div v-if="menuOpen" class="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-white">
      <nav class="p-6">
        <ul class="space-y-2">
          <li v-for="item in navItems" :key="item.path">
            <router-link :to="item.path" class="block py-4 px-4 text-lg text-gray-700 rounded-xl hover:bg-gray-50"
              @click="menuOpen = false">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
        <button class="w-full mt-6 py-4 bg-gradient-to-r from-brand to-orange-400 text-white rounded-xl font-medium">
          下载APP
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const scrolled = ref(false)

const navItems = [
  { name: '首页', path: '/' },
  { name: '关于我们', path: '/about' },
  { name: '新闻资讯', path: '/news' },
  { name: '加盟奥本', path: '/join' },
  { name: '联系我们', path: '/contact' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.header-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (min-width: 640px) {
  .header-container {
    padding: 0 1.5rem;
    height: 5rem;
  }
}

@media (min-width: 1024px) {
  .header-container {
    padding: 0 3rem;
    height: 6rem;
  }
}

.nav-link {
  position: relative;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: #e85a5a;
  border-radius: 2px;
  transform: translateX(-50%);
  transition: width 0.3s;
}

.nav-link:hover::after,
.nav-link.router-link-exact-active::after {
  width: 20px;
}

.nav-link.router-link-exact-active {
  color: #e85a5a;
}

.logo-custom {
  width: 200px;
  height: 32.98px;
}
</style>
