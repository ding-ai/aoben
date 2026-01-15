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

        <div class="group relative">
          <div
            class="flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/60 cursor-pointer transition-all hover:border-white"
            :class="scrolled ? 'border-gray-300 hover:border-gray-400' : ''"
          >
            <div
              class="w-8 h-8 rounded-full border border-current flex items-center justify-center"
              :class="scrolled ? 'text-gray-600' : 'text-white'"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
            <span class="text-base font-medium" :class="scrolled ? 'text-gray-700' : 'text-white'"
              >下载APP</span
            >
          </div>

          <div
            class="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible transition-all duration-300 transform translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
          >
            <div
              class="relative bg-white rounded-2xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.15)] w-48"
            >
              <div
                class="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-t border-l border-gray-50"
              ></div>

              <div
                class="w-full aspect-square bg-[#f07070] rounded-xl mb-3 flex items-center justify-center overflow-hidden"
              >
                <span class="text-white text-xs">二维码图片</span>
              </div>

              <p class="text-gray-400 text-[12px] text-center whitespace-nowrap">
                扫描二维码下载APP
              </p>
            </div>
          </div>
        </div>
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

  <!-- 移动端菜单 - 使用 Teleport 避免 backdrop-blur 创建的层叠上下文问题 -->
  <Teleport to="body">
    <transition name="menu-slide">
      <div v-if="menuOpen" class="mobile-menu lg:hidden">
        <nav class="mobile-nav">
          <ul class="mobile-nav-list">
            <li v-for="item in navItems" :key="item.path">
              <router-link
                :to="item.path"
                class="mobile-nav-link"
                :class="{ active: $route.path === item.path }"
                @click="menuOpen = false"
              >
                <span>{{ item.name }}</span>
                <svg class="nav-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </router-link>
            </li>
          </ul>
          <div class="mobile-nav-footer">
            <button class="mobile-download-btn">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              <span>下载APP</span>
            </button>
          </div>
        </nav>
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
</style>

<!-- 移动端菜单样式需要非 scoped，因为使用了 Teleport -->
<style>
/* ==================== 移动端菜单 ==================== */
.mobile-menu {
  position: fixed;
  top: clamp(3.5rem, 8vw, 6rem);
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 9999;
  overflow-y: auto;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
}

.mobile-nav-list {
  flex: 1;
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  background: #f8f8f8;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.3s;
}

.mobile-nav-link:hover,
.mobile-nav-link:active {
  background: #f0f0f0;
}

.mobile-nav-link.active {
  background: linear-gradient(135deg, #e85a5a 0%, #d14545 100%);
  color: white;
}

.mobile-nav-link.active .nav-arrow {
  color: white;
}

.nav-arrow {
  width: 1.25rem;
  height: 1.25rem;
  color: #ccc;
  transition: transform 0.3s;
}

.mobile-nav-link:hover .nav-arrow {
  transform: translateX(4px);
}

.mobile-nav-footer {
  padding: 1rem 0;
  border-top: 1px solid #eee;
  margin-top: auto;
}

.mobile-download-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #e85a5a 0%, #d14545 100%);
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.mobile-download-btn:active {
  transform: scale(0.98);
}

/* 菜单滑入动画 */
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: all 0.3s ease;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
