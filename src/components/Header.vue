<template>
  <header
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'"
  >
    <div class="header-container">
      <!-- Logo -->
      <router-link to="/" class="flex-shrink-0 transition-transform hover:scale-105">
        <img
          src="../assets/images/logo.png"
          alt="AOBEN奥本"
          class="h-8 sm:h-10 lg:h-12 w-auto object-contain"
          :class="scrolled ? 'brightness-0' : ''"
        />
      </router-link>

      <!-- 桌面端导航 -->
      <nav class="hidden lg:flex items-center gap-2 xl:gap-4">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          :class="scrolled ? 'text-gray-700 hover:text-brand' : 'text-white hover:text-white/80'"
        >
          {{ item.name }}
        </router-link>

        <span class="mx-2 xl:mx-4" :class="scrolled ? 'text-gray-300' : 'text-white/30'">|</span>

        <!-- 下载APP按钮 -->
        <div class="download-btn group relative">
          <div
            class="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 cursor-pointer transition-all duration-300"
            :class="
              scrolled
                ? 'border-brand text-brand hover:bg-brand hover:text-white'
                : 'border-white/70 text-white hover:bg-white/20 hover:border-white'
            "
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span class="text-sm font-medium">下载APP</span>
          </div>

          <!-- 二维码弹窗 -->
          <div
            class="absolute top-full right-0 mt-4 p-5 bg-white rounded-2xl shadow-2xl opacity-0 invisible translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
          >
            <div
              class="w-36 h-36 bg-gradient-to-br from-brand to-orange-400 rounded-xl mb-3 flex items-center justify-center text-white text-xs"
            >
              二维码
            </div>
            <p class="text-xs text-gray-500 text-center">扫码下载奥本APP</p>
            <div
              class="absolute -top-2 right-8 w-4 h-4 bg-white rotate-45 shadow-[-2px_-2px_5px_rgba(0,0,0,0.05)]"
            ></div>
          </div>
        </div>
      </nav>

      <!-- 移动端菜单按钮 -->
      <button
        class="lg:hidden relative w-10 h-10 flex items-center justify-center"
        @click="menuOpen = !menuOpen"
        aria-label="菜单"
      >
        <div class="w-6 flex flex-col gap-1.5">
          <span
            class="block h-0.5 rounded-full transition-all duration-300 origin-center"
            :class="[
              scrolled ? 'bg-gray-800' : 'bg-white',
              menuOpen ? 'rotate-45 translate-y-2' : '',
            ]"
          ></span>
          <span
            class="block h-0.5 rounded-full transition-all duration-300"
            :class="[scrolled ? 'bg-gray-800' : 'bg-white', menuOpen ? 'opacity-0 scale-0' : '']"
          ></span>
          <span
            class="block h-0.5 rounded-full transition-all duration-300 origin-center"
            :class="[
              scrolled ? 'bg-gray-800' : 'bg-white',
              menuOpen ? '-rotate-45 -translate-y-2' : '',
            ]"
          ></span>
        </div>
      </button>
    </div>

    <!-- 移动端菜单 -->
    <Transition name="slide">
      <div
        v-if="menuOpen"
        class="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-white/98 backdrop-blur-lg"
      >
        <nav class="container-main py-8">
          <ul class="space-y-2">
            <li v-for="item in navItems" :key="item.path">
              <router-link
                :to="item.path"
                class="block py-4 px-4 text-lg text-gray-700 rounded-xl transition-colors hover:bg-gray-50 hover:text-brand"
                @click="menuOpen = false"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
          <div class="mt-8 px-4">
            <button
              class="w-full py-4 bg-gradient-to-r from-brand to-orange-400 text-white rounded-xl font-medium shadow-lg"
            >
              下载APP
            </button>
          </div>
        </nav>
      </div>
    </Transition>
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

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@reference "tailwindcss" source("../style.css");

.header-container {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (min-width: 640px) {
  .header-container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    height: 5rem;
  }
}

@media (min-width: 1024px) {
  .header-container {
    padding-left: 3rem;
    padding-right: 3rem;
    height: 6rem;
  }
}

.nav-link {
  @apply relative px-3 xl:px-4 py-2 text-sm xl:text-base font-medium transition-colors duration-300;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #e85a5a;
  border-radius: 9999px;
  transition: all 0.3s;
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.router-link-exact-active::after {
  width: 24px;
}

.nav-link.router-link-exact-active {
  color: #e85a5a;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
