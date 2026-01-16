<template>
  <header
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'"
  >
    <div class="header-container">
      <!-- Logo -->
      <router-link to="/" class="flex-shrink-0">
        <img
          src="../assets/images/首页_slices/加粗细@2x.png"
          alt="AOBEN奥本"
          class="logo-custom"
          :class="scrolled ? 'brightness-0' : ''"
        />
      </router-link>

      <nav class="hidden lg:flex items-center gap-6 xl:gap-12">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          :class="scrolled ? 'text-gray-700' : 'text-white'"
        >
          {{ item.name }}
        </router-link>

        <span :class="scrolled ? 'text-gray-300' : 'text-white/30'">|</span>

        <router-link to="/download" class="download-btn"> 下载APP </router-link>
      </nav>

      <!-- 移动端菜单按钮 -->
      <button
        class="lg:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all relative z-[100] min-h-[44px] min-w-[44px]"
        :class="scrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : ''"
        @click="menuOpen = !menuOpen"
      >
        <div class="w-6 flex flex-col gap-1.5">
          <span
            class="block h-0.5 rounded-full transition-all"
            :class="[
              scrolled ? 'bg-gray-800' : 'bg-white',
              menuOpen ? 'rotate-45 translate-y-2' : '',
            ]"
          ></span>
          <span
            class="block h-0.5 rounded-full transition-all"
            :class="[scrolled ? 'bg-gray-800' : 'bg-white', menuOpen ? 'opacity-0' : '']"
          ></span>
          <span
            class="block h-0.5 rounded-full transition-all"
            :class="[
              scrolled ? 'bg-gray-800' : 'bg-white',
              menuOpen ? '-rotate-45 -translate-y-2' : '',
            ]"
          ></span>
        </div>
      </button>
    </div>
  </header>

  <!-- 移动端菜单 -->
  <Teleport to="body">
    <transition name="menu-slide">
      <div v-if="menuOpen" class="mobile-menu lg:hidden">
        <div class="mobile-menu-content">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="mobile-nav-link"
            :class="{ active: $route.path === item.path }"
            @click="menuOpen = false"
          >
            {{ item.name }}
          </router-link>
          <router-link to="/download" class="mobile-download-btn" @click="menuOpen = false">
            下载APP
          </router-link>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const menuOpen = ref(false)
const scrolled = ref(false)
const route = useRoute()

const navItems = [
  { name: '首页', path: '/' },
  { name: '关于我们', path: '/about' },
  { name: '新闻资讯', path: '/news' },
  { name: '加盟奥本', path: '/join' },
  { name: '联系我们', path: '/contact' },
]

const handleScroll = () => {
  // 如果在 contact 页面，始终保持有背景颜色
  if (route.path === '/contact') {
    scrolled.value = true
    return
  }
  // 其他页面根据滚动位置决定
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // 初始化时检查一次
  handleScroll()
})

onUnmounted(() => window.removeEventListener('scroll', handleScroll))

watch(
  () => route.path,
  () => {
    handleScroll()
  },
)
</script>

<style scoped>
.header-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 3rem);
  height: clamp(3.5rem, 8vw, 6rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-link {
  position: relative;
  padding: 0.5rem 0.75rem;
  font-size: clamp(0.75rem, 1.2vw, 0.875rem);
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
  width: clamp(120px, 15vw, 200px);
  height: auto;
}

.download-btn {
  background-color: #dc2626;
  color: white;
  padding: 8px 20px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.4);
  transition:
    background-color 0.3s,
    transform 0.2s;
}

.download-btn:hover {
  background-color: #b91c1c;
}

.download-btn:active {
  transform: scale(0.95);
}
</style>

<!-- 移动端菜单样式需要非 scoped，因为使用了 Teleport -->
<style>
/* ==================== 移动端菜单 ==================== */
.mobile-menu {
  position: fixed;
  top: clamp(3.5rem, 8vw, 6rem);
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  overflow: hidden;
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px;
  gap: 16px;
}

.mobile-nav-link {
  font-size: 16px;
  color: #333;
  text-decoration: none;
  padding: 8px 16px;
  transition: color 0.3s;
}

.mobile-nav-link:hover {
  color: #e85a5a;
}

.mobile-nav-link.active {
  color: #e85a5a;
}

.mobile-download-btn {
  display: inline-block;
  margin-top: 8px;
  background: #dc2626;
  color: white;
  padding: 10px 32px;
  border-radius: 9999px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition:
    background-color 0.3s,
    transform 0.2s;
}

.mobile-download-btn:hover {
  background: #b91c1c;
}

.mobile-download-btn:active {
  transform: scale(0.95);
}

/* 菜单滑入动画 */
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: all 0.3s ease;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
  opacity: 0;
}

.menu-slide-enter-to,
.menu-slide-leave-from {
  max-height: 400px;
  opacity: 1;
}
</style>
