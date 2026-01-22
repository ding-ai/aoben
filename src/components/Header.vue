<template>
  <header
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'"
  >
    <div class="header-container flex items-center justify-between"  style="height: 96px;">
      <!-- 左侧 SVG 图标 -->
<div>
        <svg xmlns="http://www.w3.org/2000/svg" width="201" height="34" viewBox="0 0 201 34" fill="none" class="logo-custom"
          :class="scrolled ? 'brightness-0' : ''"
          loading="eager"
          decoding="async">
    <path d="M158.638 22.7695L158.635 22.9307L158.603 24.5576H170.797V26.1514H159.122C160.135 27.3252 161.505 28.286 163.255 29.0566C165.148 29.8899 167.708 30.5534 170.944 31.0606L171.129 31.0899L171.069 31.2676L170.578 32.7041L170.535 32.8311L170.403 32.8086C167.223 32.2816 164.598 31.5604 162.531 30.624C160.541 29.7228 158.954 28.5886 157.775 27.2197C156.972 28.4098 155.545 29.4552 153.532 30.3779L153.531 30.3789C151.413 31.3317 148.562 32.1934 144.981 32.9307L144.844 32.958L144.799 32.8262L144.326 31.4248L144.269 31.2529L144.446 31.2188C148.068 30.5187 150.841 29.7331 152.77 28.8643C154.568 28.0543 155.749 27.1353 156.323 26.1348H144.511V24.54H156.744L156.778 22.9238L156.781 22.7695H158.638ZM155.819 5.63282L157.431 5.86036L157.6 5.88477L157.563 6.05177C157.444 6.57621 157.166 7.45928 156.72 8.69825H168.045V23.4883H166.293V10.3457H149.067V23.4883H147.315V8.69825H154.632C155.138 7.24859 155.475 6.26862 155.646 5.74024L155.687 5.61427L155.819 5.63282ZM158.53 10.8711V15.8652H165.312V17.544H164.996V17.3897H158.53V17.4063C161.782 19.4138 163.968 20.8025 165.085 21.5703L165.214 21.6592L165.127 21.7881L164.427 22.8399L164.336 22.9756L164.203 22.8799C163.576 22.4268 162.685 21.8326 161.529 21.0791C160.447 20.3848 159.457 19.7389 158.53 19.1631V22.2266H156.866V18.7383C156.124 19.5229 155.308 20.2384 154.379 20.8838C153.354 21.6086 152.049 22.3485 150.487 23.1211L150.348 23.1895L150.277 23.0527L149.663 21.8789L149.587 21.7334L149.736 21.6631C151.361 20.8941 152.685 20.1623 153.674 19.4854C154.563 18.877 155.382 18.184 156.131 17.4072H150.066V15.8652H156.866V10.8711H158.53ZM163.394 11.1494L164.328 11.8818L164.456 11.9824L164.353 12.1074L164.277 12.1982L164.272 12.2041C163.584 12.962 162.477 14.0689 160.97 15.5059L160.86 15.6113L160.75 15.5049L159.91 14.6816L159.793 14.5684L159.91 14.4551C161.187 13.2124 162.273 12.1103 163.183 11.165L163.282 11.0625L163.394 11.1494ZM152.151 11.1914C153.555 12.4378 154.663 13.5104 155.492 14.4092L155.592 14.5186L155.49 14.625L154.649 15.501L154.602 15.5498H154.449L154.403 15.5C153.984 15.055 153.505 14.5708 152.975 14.0537L152.428 13.5264C151.747 12.8804 151.304 12.4547 151.107 12.2393L151.004 12.1279L152.039 11.0928L152.151 11.1914Z" fill="white" stroke="white" stroke-width="0.31543"/>
    <path d="M187.834 6.03331V11.2911H199.329V13.0958H189.268C190.49 15.8705 192.01 18.3961 193.827 20.6554C195.693 22.9746 197.944 25.121 200.598 27.0939L200.731 27.1925L200.625 27.3204L199.539 28.6349L199.441 28.753L199.32 28.6583C196.664 26.5822 194.341 24.2244 192.335 21.5851H192.334C190.491 19.1382 188.981 16.4942 187.817 13.6681V25.8888H194.476V27.6583H187.817V33.1261H185.889V27.6583H179.265V25.8888H185.889V13.7696C184.712 16.4948 183.281 18.9844 181.581 21.2511C179.751 23.6972 177.36 26.2462 174.41 28.88L174.292 28.9855L174.188 28.8663L173.136 27.6749L173.029 27.5538L173.152 27.4503C175.915 25.1251 178.185 22.8195 179.982 20.5167V20.5157C181.73 18.2913 183.215 15.8181 184.436 13.0958H174.428V11.2911H185.906V6.03331H187.834Z" fill="white" stroke="white" stroke-width="0.31543"/>
    <path d="M12.7259 8.13668L12.7679 8.2275L24.0892 32.0244L24.1956 32.25H22.0765L22.0335 32.1591L19.7923 27.3964L19.0208 25.8545L19.0199 25.8515L12.223 11.6054L5.4261 25.8515L5.42415 25.8545L4.65364 27.3964L4.65266 27.3955L2.41243 32.1591L2.36946 32.25H0.249344L0.356766 32.0244L11.6771 8.2275L11.72 8.13668H12.7259Z" fill="white" stroke="white" stroke-width="0.31543"/>
    <path d="M70.682 8.46876C73.1951 8.46876 75.0978 9.25166 76.3734 10.4395C77.6479 11.6264 78.2873 13.2103 78.2874 14.7949C78.2874 16.6224 77.4748 18.4171 75.7796 19.625C78.9423 20.5995 80.4603 23.1547 80.4603 25.7129C80.4602 27.3485 79.8224 28.9805 78.5482 30.2031C77.2728 31.4268 75.3692 32.2315 72.8548 32.2315H62.0775V8.46876H70.682ZM64.0404 30.3213H72.8724C74.7494 30.3213 76.1329 29.7449 77.0452 28.8916C77.958 28.0379 78.4104 26.8978 78.4105 25.7481C78.4105 23.465 76.5136 21.2074 72.8695 21.1387H64.0404V30.3213ZM64.0404 19.2285H70.682C72.5421 19.2285 73.9262 18.6698 74.8431 17.8418C75.7603 17.0133 76.22 15.9073 76.22 14.7949C76.2199 13.6829 75.7607 12.5871 74.8441 11.7676C73.9273 10.948 72.5431 10.3965 70.682 10.3965H64.0404V19.2285Z" fill="white" stroke="white" stroke-width="0.31543"/>
    <path d="M104.502 8.46871V10.3623H90.8332V19.4394H102.4V21.2617H90.8332V30.3564H104.87V32.249H88.8703V8.46871H104.502Z" fill="white" stroke="white" stroke-width="0.31543"/>
    <path d="M115.495 8.46876L115.543 8.5254L132.824 28.9092V8.46876H134.786V32.249H133.154L133.107 32.1934L115.861 11.8086V32.249H113.898V8.46876H115.495Z" fill="white" stroke="white" stroke-width="0.31543"/>
    <path d="M97.7431 0.211022L98.5901 1.9046L89.6087 6.39629L88.7617 4.70271L97.7431 0.211022Z" fill="white" stroke="white" stroke-width="0.31543"/>
    <path d="M41.4349 33.4227C34.2326 33.4227 28.3797 27.5697 28.3797 20.3674C28.3797 13.1651 34.2326 7.31211 41.4349 7.31211C48.6373 7.31211 54.4902 13.1651 54.4902 20.3674C54.4902 27.5697 48.6373 33.4227 41.4349 33.4227ZM41.4349 7.4523C34.3203 7.4523 28.5374 13.2352 28.5374 20.3499C28.5374 27.4646 34.3203 33.2474 41.4349 33.2474C48.5496 33.2474 54.3325 27.4646 54.3325 20.3499C54.3325 13.2352 48.5496 7.4523 41.4349 7.4523Z" fill="white"/>
    <path d="M45.4124 28.779C49.4955 28.1657 52.6147 24.6434 52.6147 20.3851C52.6147 16.1268 49.4955 12.622 45.4124 11.9911C48.5667 13.4806 50.7397 16.67 50.7397 20.3851C50.7397 24.1001 48.5667 27.2895 45.4124 28.779Z" fill="white"/>
    <path d="M44.1333 32.3193C37.5443 32.3193 32.2171 26.9745 32.2171 20.403C32.2171 13.8141 37.5618 8.4868 44.1333 8.4868C45.4651 8.4868 46.7619 8.71461 47.9535 9.11766C46.0434 8.01366 43.8354 7.3828 41.4697 7.3828C34.2849 7.3828 28.4494 13.2182 28.4494 20.403C28.4494 27.5878 34.2849 33.4233 41.4697 33.4233C43.8354 33.4233 46.0434 32.7924 47.9535 31.6884C46.7443 32.0915 45.4651 32.3193 44.1333 32.3193Z" fill="white"/>
</svg>
</div>


      <!-- 右侧导航区域 -->
      <div style="margin-top: 9px;">
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

          <span :class="[scrolled ? 'text-gray-700' : 'text-white', 'separator']" style=" margin-top: 5px;">|</span>

          <div class="download-icon-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 40 20" fill="none">
              <rect
                x="0.25"
                y="0.25"
                width="39.5"
                height="19.5"
                rx="9.75"
                :stroke="scrolled ? '#333' : 'white'"
                stroke-width="0.5"
              />
              <path
                d="M20.5031 15.4623V5"
                :stroke="scrolled ? '#333' : 'white'"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25 11L20.5 15.5L16 11"
                :stroke="scrolled ? '#333' : 'white'"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
           <span class="down "   :class="scrolled ? 'brightness-0' : ''">下载APP</span>
               <!-- 下载的二维码 -->
                 <svg xmlns="http://www.w3.org/2000/svg" width="26" height="8" viewBox="0 0 26 8" fill="none" class="code1">
  <path d="M10.9036 0.593369C12.1892 -0.197787 13.8108 -0.197786 15.0964 0.59337L26 7.30328H0L10.9036 0.593369Z" fill="white"/>
</svg>
     <div class="code">
      <div style="height: 110px;width: 110px;background: #FF6C6C;"></div>
   <p style="font-size: 12px;color: #AAA;font-style: normal;
font-weight: 400;
line-height: normal; margin-top: 6px;">扫描二维码下载APP</p>
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
    </div>




  </header>

  <!-- 移动端菜单 -->
  <Teleport to="body">
    <!-- 遮罩层 - 点击关闭菜单 -->
    <transition name="overlay-fade">
      <div v-if="menuOpen" class="mobile-menu-overlay lg:hidden" @click="menuOpen = false"></div>
    </transition>

    <!-- 菜单内容 -->
    <transition name="menu-slide">
      <div v-if="menuOpen" class="mobile-menu lg:hidden">
        <!-- 菜单标题头部 -->
        <div class="mobile-menu-header">
          <div class="mobile-menu-title">
            <img
              src="https://cdn.aoben.yoga/membermini/web/20260121/%E5%8A%A0%E7%B2%97%E7%BB%86@2x.png/low_quality?imageSlim"
              alt="AOBEN奥本"
              class="mobile-logo"
            />
          </div>
          <!-- 关闭按钮 -->
          <button class="mobile-menu-close" @click="menuOpen = false" aria-label="关闭菜单">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- 菜单导航项 -->
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

// 节流函数
let scrollTimer = null
const throttledScroll = () => {
  if (scrollTimer) return
  scrollTimer = setTimeout(() => {
    handleScroll()
    scrollTimer = null
  }, 100)
}

onMounted(() => {
  window.addEventListener('scroll', throttledScroll, { passive: true })
  // 初始化时检查一次
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', throttledScroll)
  if (scrollTimer) clearTimeout(scrollTimer)
})

watch(
  () => route.path,
  () => {
    handleScroll()
  },
)
</script>

<style scoped>
.header-container {
  max-width: 1440px;
  margin: 0 auto;
  /* padding: 0 clamp(1rem, 4vw, 3rem); */
  /* height: clamp(3.5rem, 8vw, 6rem); */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-link {
  margin-top: 5px;
  position: relative;
  text-decoration: none;
  font-size: clamp(0.75rem, 1.2vw, 0.875rem);

  transition: color 0.3s;

  font-size: 16px;

  font-weight: 330;
  line-height: normal;
  display: flex;
  align-items: center;
  height: 100%;
}

.nav-link.router-link-exact-active {
  color: #EF1B1B;
  font-weight: 450;
}

.separator {
  width: 1px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
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
  display: flex;
  align-items: center;
  height: 2rem;
}

.download-icon-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 4px;
  border-radius: 12px;
}

.download-icon-btn:hover {
  transform: translateY(-2px);
  /* opacity: 0.8; */
}

.download-icon-btn:active {
  transform: translateY(0);
}

.download-icon-btn svg {
  display: block;
  transition: all 0.3s ease;
}



.nav-link:hover::after,
.nav-link.router-link-exact-active::after {
  width: 20px;
}

.logo-custom {
  width: clamp(120px, 15vw, 200px);
  height: auto;
}


</style>

<!-- 移动端菜单样式需要非 scoped，因为使用了 Teleport -->
<style>
/* ==================== 移动端遮罩层 ==================== */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9998;
  backdrop-filter: blur(2px);
}

/* 遮罩层淡入淡出动画 */
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}

.overlay-fade-enter-to,
.overlay-fade-leave-from {
  opacity: 1;
}

/* ==================== 移动端菜单 ==================== */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  overflow: hidden;
}

/* 菜单标题头部 */
.mobile-menu-header {
  position: relative;
  background: #000000;
  padding: 16px 24px;
  border-bottom: 1px solid #333333;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-menu-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.mobile-logo {
  height: 50px;
  width: auto;
  object-fit: contain;
  transform: scale(0.5);
}

/* 关闭按钮 */
.mobile-menu-close {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 50%;
}

.mobile-menu-close:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.mobile-menu-close:active {
  transform: translateY(-50%) scale(0.95);
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 16px;
  gap: 12px;
}

.mobile-nav-link {
  font-size: 15px;
  color: #333;
  text-decoration: none;
  padding: 10px 16px;
  transition: color 0.3s;
  font-weight: 500;
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

.down{
  color: #FFF;
/* font-family: "PingFang SC"; */
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 10px;
  margin-top: 8px;
}



.code{
  height: 165px;
  width:142px;
  position: absolute;
  top:147%;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background: #FFF;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: none;
}

.code1{
  position: absolute;
  top:130%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.download-icon-btn:hover .code,
.download-icon-btn:hover .code1 {
  opacity: 1;
  visibility: visible;
}

</style>
