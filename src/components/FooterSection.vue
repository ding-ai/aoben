<template>
  <footer class="bg-[#111111] text-white pt-12 mb-8 font-[MiSans]">
    <div class="container-main mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h">
      <!-- 顶部: Logo 与 特性 Slogan -->
      <div class="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-12 mb-12 gap-8">
        <!-- Logo -->
        <div class="w-40 sm:w-48">
          <img src="@/assets/images/首页_slices/加粗细(1).png" alt="AOBEN" class="w-full brightness-0 invert" />
        </div>

        <!-- Slogans -->
        <div
          class="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 md:gap-16 text-sm sm:text-base text-gray-300 top">
          <div class="flex items-center gap-2">
            <img src="D:\aoben\aoben_web\aoben\src\assets\images\首页_slices\Vector.png" alt="" />
            <span>门店随心选</span>
          </div>
          <div class="flex items-center gap-2">
            <img src="D:\aoben\aoben_web\aoben\src\assets\images\首页_slices\Vector.png" alt="" />
            <span>教练无忧换</span>
          </div>
          <div class="flex items-center gap-2">
            <img src="D:\aoben\aoben_web\aoben\src\assets\images\首页_slices\Vector.png" alt="" />
            <span>课程自由约</span>
          </div>
        </div>
      </div>

      <!-- 中间: 联系信息 与 二维码 -->
      <div class="flex flex-col lg:flex-row justify-between gap-12 mb-16" style="margin-top: 20px">
        <!-- 左侧: 联系信息 -->
        <div class="space-y-8 flex-1">
          <!-- 电话 -->
          <div class="group">
            <h4 class="text-base font-medium mb-1 flex items-center gap-2 text-gray-200" style="margin-bottom: 10px">
              <img src="D:\aoben\aoben_web\aoben\src\assets\images\首页_slices\Frame@2x(1).png" alt=""
                style="width: 20px" />
              联系我们:
            </h4>
            <p class="pl-6 text-gray-400 text-sm">400-8699-626</p>
          </div>
          <br />
          <!-- 地址 -->
          <div class="group">
            <h4 class="text-base font-medium mb-1 flex items-center gap-2 text-gray-200" style="margin-bottom: 10px">
              <img src="D:\aoben\aoben_web\aoben\src\assets\images\首页_slices\Frame@2x(1).png" alt=""
                style="width: 20px" />
              总部地址:
            </h4>
            <p class="pl-6 text-gray-400 text-sm leading-relaxed">
              江苏省苏州市昆山市玉山镇萧林路2024号B座1304
            </p>
          </div>
          <br />
          <!-- 邮编 -->
          <div class="group">
            <h4 class="text-base font-medium mb-1 flex items-center gap-2 text-gray-200" style="margin-bottom: 10px">
              <img src="D:\aoben\aoben_web\aoben\src\assets\images\首页_slices\Frame@2x(1).png" alt=""
                style="width: 20px" />
              邮编:
            </h4>
            <p class="pl-6 text-gray-400 text-sm">215300</p>
          </div>
        </div>

        <!-- 右侧: 关注我们 (二维码) -->
        <div class="flex flex-col items-start lg:items-start" style="margin-top: 40px">
          <h4 class="text-base font-medium mb-4 text-gray-200" style="margin-bottom: 15px; font-family: MiSans">
            关注我们
          </h4>
          <div class="flex gap-6">
            <div class="text-center group">
              <div
                class="bg-white p-1.5 w-24 h-24 mb-2 rounded-sm flex items-center justify-center overflow-hidden transition-transform transform group-hover:scale-105">
                <img src="@/assets/images/首页_slices/Group 1000011063.png" alt="奥本运动小程序"
                  class="w-full h-full object-contain" />
              </div>
              <p class="text-xs text-gray-400">奥本运动小程序</p>
            </div>
            <div class="text-center group">
              <div
                class="bg-white p-1.5 w-24 h-24 mb-2 rounded-sm flex items-center justify-center overflow-hidden transition-transform transform group-hover:scale-105">
                <img src="@/assets/images/首页_slices/Group 1000011063.png" alt="奥本公众号"
                  class="w-full h-full object-contain" />
              </div>
              <p class="text-xs text-gray-400">奥本公众号</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部版权 -->
    <div class="border-t border-white/10">
      <div class="container-main py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-gray-500 text-small text-center sm:text-left">
          © 2024 奥本集团 AOBEN Group. All rights reserved.
        </p>
        <div class="flex gap-4 sm:gap-6 text-small text-gray-500">
          <a href="#" class="hover:text-white transition-colors">隐私政策</a>
          <a href="#" class="hover:text-white transition-colors">使用条款</a>
          <a href="#" class="hover:text-white transition-colors">苏ICP备XXXXXXXX号</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.h {
  height: 400px;
}

.top {
  padding: 30px;
}
</style>
