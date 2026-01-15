<template>
  <header>
    <div class="banner" style="font-family: MiSans">
      <div class="container-main" style="margin-top: 100px">
        <h1 class="banner-title animate-fade-in-up banner-content">联系我们</h1>
        <p class="banner-subtitle animate-fade-in-up banner-content"
          style="animation-delay: 0.2s; color: #333333; margin-top: 20px">
          加盟入驻让前沿理念与技术支持成为您的竞争壁垒
        </p>
        <div style="
            color: black;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 100px;
          " class="gap-4">
          <div style="
              display: flex;
              border-radius: 5px;
              box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
              height: 200px;
              width: 400px;
              padding-top: 20px;
              padding-left: 20px;
            " class="gap-4">
            <div>
              <img src="@/assets/images/联系我们_slices/Frame 1000011581.png" alt="" />
            </div>
            <div>
              <p style="font-size: 1.25rem; font-weight: 500">联系我们</p>
              <p style="color: #aaaaaa; font-size: 0.9rem; letter-spacing: -1px">奥本官方电话</p>
              <br />
              <p style="font-size: 0.9rem; color: red">400-869-9626</p>
            </div>
          </div>
          <div style="
              display: flex;
              border-radius: 5px;
              box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
              height: 200px;
              width: 400px;
              padding-top: 20px;
              padding-left: 20px;
            " class="gap-4">
            <div><img src="@/assets/images/联系我们_slices/Frame 1000011581.png" alt="" /></div>
            <div>
              <p style="font-size: 1.25rem; font-weight: 500">联系我们</p>
              <p style="color: #aaaaaa; font-size: 0.9rem; letter-spacing: -1px">奥本官方邮箱</p>
              <br />
              <p style="font-size: 0.9rem; color: red">bclmm@aoben.yoga</p>
            </div>
          </div>
          <div style="
              display: flex;
              border-radius: 5px;
              box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
              height: 200px;
              width: 400px;
              padding-top: 20px;
              padding-left: 20px;
            " class="gap-4">
            <div><img src="@/assets/images/联系我们_slices/Frame 1000011581.png" alt="" /></div>
            <div>
              <p style="font-size: 1.25rem; font-weight: 500">添加微信</p>
              <p style="color: #aaaaaa; font-size: 0.9rem; letter-spacing: -1px">奥本官方微信</p>
              <br />
              <p style="font-size: 0.9rem; color: red">13390855887</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <section>
    <div class="banner1" style="font-family: MiSans; padding: 100px">
      <div class="container-main" style="color: black">
        <div style="text-align: center">
          <p style="font-size: 2rem; font-weight: 500">办公地址</p>
          <p style="font-size: 1rem; color: #333333">(苏州昆山总部)</p>
        </div>
        <div></div>
      </div>
      <div class="container-main" style="color: black; display: flex; margin-top: 50px">
        <div style="width: 50%">
          <img src="@/assets/images/联系我们_slices/Frame 1000011589.png" alt="" />
        </div>
        <div class="flex flex-col justify-center items-start gap-2" style="
            color: #888888;
            background-color: white;
            width: 50%;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
          ">
          <p style="font-size: 1.25rem; font-weight: 500; color: black; margin-left: 20px">
            苏州总部
          </p>
          <div style="font-size: 0.9rem; margin-left: 20px">
            <p>地址:江苏省苏州市昆山市玉山镇萧林中路2024号B座1304</p>
            <p>电话:400-869-9626</p>
            <p>邮箱:bclmm@aoben.yoga</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style scoped>
.banner {
  overflow: hidden;
  min-height: clamp(400px, 42vw, 800px);
  display: flex;
  align-items: center;
  color: white;
  background: url('../../assets/images/联系我们_slices/Group 1000011080.png') no-repeat center center;
  background-size: cover;
}

.banner1 {
  overflow: hidden;
  min-height: clamp(400px, 42vw, 600px);
  /* display: flex; */
  align-items: center;
  color: white;
  background: url('../../assets/images/联系我们_slices/Frame 1000011588.png') no-repeat center center;
  background-size: cover;
}

.banner-title {
  color: black;
  font-family: 'MiSans';
  font-size: clamp(2rem, 6vw, 3.75rem);
  font-weight: 500;
  line-height: 1.2;
}

.banner-subtitle {
  color: black;
  font-family: 'MiSans';
  font-size: clamp(0.875rem, 2vw, 1.125rem);
  font-weight: 300;
  margin-top: clamp(0.5rem, 1vw, 0.75rem);
  letter-spacing: 0.5px;
  opacity: 0.8;
}

.banner-content {
  text-align: center;
  margin: 0 auto;
}
</style>
