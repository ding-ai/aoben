<template>
  <footer class="bg-neutral-900 text-white">
    <!-- 主体内容 -->
    <div class="container-main pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        <!-- 品牌信息 -->
        <div class="lg:col-span-1">
          <img
            src="../assets/images/logo.png"
            alt="AOBEN"
            class="h-10 sm:h-12 mb-6 brightness-0 invert"
          />
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            奥本集团专注于瑜伽、养生、医美领域，融合科技医美、美容养生、运动美学三位一体的理念。
          </p>
          <!-- 社交图标 -->
          <div class="flex gap-3">
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-brand"
            >
              <img src="../assets/images/加粗细.png" alt="" class="w-5 h-5 brightness-0 invert" />
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-brand"
            >
              <img
                src="../assets/images/Frame 33922.png"
                alt=""
                class="w-5 h-5 brightness-0 invert"
              />
            </a>
          </div>
        </div>

        <!-- 快速链接 -->
        <div>
          <h4 class="text-lg font-semibold mb-6">快速链接</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <router-link
                :to="link.path"
                class="text-gray-400 text-sm hover:text-white transition-colors inline-flex items-center gap-2 group"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full bg-brand opacity-0 group-hover:opacity-100 transition-opacity"
                ></span>
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- 联系信息 -->
        <div>
          <h4 class="text-lg font-semibold mb-6">联系我们</h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <div
                class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5"
              >
                <img
                  src="../assets/images/Frame(1).png"
                  alt=""
                  class="w-4 h-4 brightness-0 invert"
                />
              </div>
              <div>
                <p class="text-xs text-gray-500 mb-1">服务热线</p>
                <p class="text-white font-medium">400-8699-626</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5"
              >
                <img
                  src="../assets/images/Frame(2).png"
                  alt=""
                  class="w-4 h-4 brightness-0 invert"
                />
              </div>
              <div>
                <p class="text-xs text-gray-500 mb-1">总部地址</p>
                <p class="text-gray-300 text-sm">江苏省苏州市昆山市玉山镇萧林路2024号B座1304</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div
                class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5"
              >
                <img
                  src="../assets/images/Frame(3).png"
                  alt=""
                  class="w-4 h-4 brightness-0 invert"
                />
              </div>
              <div>
                <p class="text-xs text-gray-500 mb-1">邮编</p>
                <p class="text-gray-300 text-sm">215300</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- 关注我们 -->
        <div>
          <h4 class="text-lg font-semibold mb-6">关注我们</h4>
          <div class="grid grid-cols-2 gap-4">
            <div class="text-center">
              <div class="bg-white rounded-xl p-3 mb-2">
                <img src="../assets/images/Group 1000011063.png" alt="微信公众号" class="w-full" />
              </div>
              <p class="text-xs text-gray-500">微信公众号</p>
            </div>
            <div class="text-center">
              <div class="bg-white rounded-xl p-3 mb-2">
                <img src="../assets/images/Group 1000011067.png" alt="小程序" class="w-full" />
              </div>
              <p class="text-xs text-gray-500">小程序</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部版权 -->
    <div class="border-t border-white/10">
      <div class="container-main py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
          © 2024 奥本集团 AOBEN Group. All rights reserved.
        </p>
        <div class="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
          <a href="#" class="hover:text-white transition-colors">隐私政策</a>
          <a href="#" class="hover:text-white transition-colors">使用条款</a>
          <a href="#" class="hover:text-white transition-colors">苏ICP备XXXXXXXX号</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const quickLinks = [
  { name: '首页', path: '/' },
  { name: '关于我们', path: '/about' },
  { name: '新闻资讯', path: '/news' },
  { name: '加盟奥本', path: '/join' },
  { name: '联系我们', path: '/contact' },
]
</script>
