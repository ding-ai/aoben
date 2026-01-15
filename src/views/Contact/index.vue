<template>
  <header>
    <div class="banner" style="font-family: MiSans">
      <div class="container-main banner-container">
        <h1 class="banner-title animate-fade-in-up banner-content">联系我们</h1>
        <p class="banner-subtitle animate-fade-in-up banner-content">
          加盟入驻让前沿理念与技术支持成为您的竞争壁垒
        </p>
        <div class="contact-cards">
          <div class="contact-card">
            <div class="card-icon">
              <img src="@/assets/images/联系我们_slices/Frame 1000011581.png" alt="" />
            </div>
            <div class="card-content">
              <p class="card-title">联系我们</p>
              <p class="card-desc">奥本官方电话</p>
              <p class="card-value">400-869-9626</p>
            </div>
          </div>
          <div class="contact-card">
            <div class="card-icon">
              <img src="@/assets/images/联系我们_slices/Frame 1000011581.png" alt="" />
            </div>
            <div class="card-content">
              <p class="card-title">联系我们</p>
              <p class="card-desc">奥本官方邮箱</p>
              <p class="card-value">bclmm@aoben.yoga</p>
            </div>
          </div>
          <div class="contact-card">
            <div class="card-icon">
              <img src="@/assets/images/联系我们_slices/Frame 1000011581.png" alt="" />
            </div>
            <div class="card-content">
              <p class="card-title">添加微信</p>
              <p class="card-desc">奥本官方微信</p>
              <p class="card-value">13390855887</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <section>
    <div class="banner1" style="font-family: MiSans">
      <div class="container-main address-header">
        <p class="address-title">办公地址</p>
        <p class="address-subtitle">(苏州昆山总部)</p>
      </div>
      <div class="container-main address-content">
        <div class="address-image">
          <img src="@/assets/images/联系我们_slices/Frame 1000011589.png" alt="" />
        </div>
        <div class="address-info">
          <p class="info-title">苏州总部</p>
          <div class="info-details">
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
  min-height: clamp(500px, 60vw, 800px);
  display: flex;
  align-items: center;
  color: white;
  background: url('../../assets/images/联系我们_slices/Group 1000011080.png') no-repeat center
    center;
  background-size: cover;
}

.banner-container {
  margin-top: 100px;
  padding: 0 20px;
}

.banner1 {
  overflow: hidden;
  min-height: clamp(400px, 42vw, 600px);
  align-items: center;
  color: white;
  background: url('../../assets/images/联系我们_slices/Frame 1000011588.png') no-repeat center
    center;
  background-size: cover;
  padding: 60px 20px;
}

.banner-title {
  color: black;
  font-family: 'MiSans';
  font-size: clamp(2rem, 6vw, 3.75rem);
  font-weight: 500;
  line-height: 1.2;
}

.banner-subtitle {
  color: #333333;
  font-family: 'MiSans';
  font-size: clamp(0.875rem, 2vw, 1.125rem);
  font-weight: 300;
  margin-top: 20px;
  letter-spacing: 0.5px;
  opacity: 0.8;
}

.banner-content {
  text-align: center;
  margin: 0 auto;
}

/* 联系卡片 */
.contact-cards {
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 80px;
  gap: 20px;
}

.contact-card {
  display: flex;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  background: white;
  padding: 20px;
  gap: 16px;
  flex: 1;
  min-width: 0;
}

.card-icon img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 500;
}

.card-desc {
  color: #aaaaaa;
  font-size: 0.9rem;
  letter-spacing: -1px;
  margin-top: 4px;
}

.card-value {
  font-size: 0.9rem;
  color: red;
  margin-top: 16px;
  word-break: break-all;
}

/* 办公地址 */
.address-header {
  text-align: center;
  color: black;
}

.address-title {
  font-size: 2rem;
  font-weight: 500;
}

.address-subtitle {
  font-size: 1rem;
  color: #333333;
}

.address-content {
  color: black;
  display: flex;
  margin-top: 50px;
}

.address-image {
  width: 50%;
}

.address-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.address-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  color: #888888;
  background-color: white;
  width: 50%;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.info-title {
  font-size: 1.25rem;
  font-weight: 500;
  color: black;
}

.info-details {
  font-size: 0.9rem;
}

.info-details p {
  margin: 4px 0;
}

/* 平板适配 */
@media (max-width: 992px) {
  .contact-cards {
    flex-wrap: wrap;
    margin-top: 60px;
  }

  .contact-card {
    flex: 1 1 calc(50% - 10px);
    min-width: 280px;
  }

  .address-content {
    flex-direction: column;
  }

  .address-image,
  .address-info {
    width: 100%;
  }

  .address-image {
    height: 250px;
  }
}

/* 手机适配 */
@media (max-width: 640px) {
  .banner {
    min-height: auto;
    padding: 80px 0 40px;
  }

  .banner-container {
    margin-top: 40px;
  }

  .banner1 {
    padding: 40px 16px;
  }

  .contact-cards {
    flex-direction: column;
    margin-top: 40px;
  }

  .contact-card {
    flex: 1 1 100%;
    min-width: 100%;
  }

  .address-title {
    font-size: 1.5rem;
  }

  .address-content {
    margin-top: 30px;
  }

  .address-image {
    height: 200px;
  }

  .address-info {
    padding: 16px;
  }

  .info-details {
    font-size: 0.8rem;
  }
}
</style>
