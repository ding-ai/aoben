<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- 顶部特性栏 -->
      <div class="feature-bar">
        <!-- Logo -->
        <div class="logo-wrap">
          <img src="@/assets/images/首页_slices/加粗细(1).png" alt="AOBEN" class="logo-img" />
        </div>

        <!-- 特性项 -->
        <div class="feature-item">
          <div class="feature-icon">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <span class="feature-text">门店随心选</span>
        </div>

        <div class="feature-item">
          <div class="feature-icon">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <span class="feature-text">教练无忧换</span>
        </div>

        <div class="feature-item">
          <div class="feature-icon">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span class="feature-text">课程自由约</span>
        </div>
      </div>

      <!-- 信息区域 -->
      <div class="info-grid">
        <!-- 左侧联系信息 -->
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">
              <img
                src="https://cdn.aoben.yoga/membermini/web/20260119/Frame(1).webp/low_quality?imageSlim"
                alt=""
                class="w-5 h-5"
              />
            </div>
            <div>
              <h4 class="contact-title">联系我们：</h4>
              <p class="contact-value">400-8699-626</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <img
                src="https://cdn.aoben.yoga/membermini/web/20260119/Frame(2).webp/low_quality?imageSlim"
                alt=""
                class="w-5 h-5"
              />
            </div>
            <div>
              <h4 class="contact-title">总部地址：</h4>
              <p class="contact-desc">江苏省苏州市昆山市玉山镇萧林路2024号B座1304</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <img
                src="https://cdn.aoben.yoga/membermini/web/20260119/Frame(3).webp/low_quality?imageSlim"
                alt=""
                class="w-5 h-5"
              />
            </div>
            <div>
              <h4 class="contact-title">邮箱 / 邮编：</h4>
              <p class="contact-desc">info@aoben.com / 215300</p>
            </div>
          </div>
        </div>

        <!-- 右侧二维码 -->
        <div class="qrcode-wrap">
          <h4 class="qrcode-title">关注我们</h4>
          <div class="qrcode-list">
            <div class="qrcode-item">
              <div class="qrcode-img-wrap">
                <img
                  src="https://cdn.aoben.yoga/membermini/web/20260119/Group1000011063.webp/low_quality?imageSlim"
                  alt="奥本运动小程序"
                />
              </div>
              <p class="qrcode-label">奥本运动小程序</p>
            </div>
            <div class="qrcode-item">
              <div class="qrcode-img-wrap">
                <img
                  src="https://cdn.aoben.yoga/membermini/web/20260119/Group1000011067.webp/low_quality?imageSlim"
                  alt="奥本公众号"
                />
              </div>
              <p class="qrcode-label">奥本公众号</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部版权 -->
      <div class="copyright">
        <p class="copyright-text">© 2024 奥本运动科技(苏州)有限公司 版权所有 苏ICP备xxxxxxxx号</p>
        <div class="copyright-links">
          <a href="#">隐私政策</a>
          <a href="#">服务协议</a>
          <a href="#">法律声明</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  background-color: #1a1a1a;
  color: white;
  padding-top: 80px;
  padding-bottom: 40px;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

/* 顶部特性栏 */
.feature-bar {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  padding-bottom: 64px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 64px;
}

@media (min-width: 768px) {
  .feature-bar {
    grid-template-columns: repeat(4, 1fr);
  }
}

.logo-wrap {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 32px;
  width: auto;
  filter: brightness(0) invert(1);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: color 0.3s;
}

.feature-item:hover {
  color: white;
}

.feature-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-text {
  font-size: 14px;
  font-weight: 500;
}

/* 信息区域 */
.info-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
}

@media (min-width: 768px) {
  .info-grid {
    grid-template-columns: 2fr 1fr;
  }
}

/* 联系信息 */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.contact-icon {
  margin-top: 4px;
  color: #ff3b30;
  flex-shrink: 0;
}

.contact-title {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 4px;
}

.contact-value {
  color: rgba(255, 255, 255, 0.6);
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.contact-desc {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 1.6;
}

/* 二维码区域 */
.qrcode-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 768px) {
  .qrcode-wrap {
    align-items: flex-end;
  }
}

.qrcode-title {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 24px;
}

.qrcode-list {
  display: flex;
  gap: 48px;
}

.qrcode-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.qrcode-img-wrap {
  width: 96px;
  height: 96px;
  background: white;
  padding: 4px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
}

.qrcode-img-wrap:hover {
  transform: scale(1.1);
}

.qrcode-img-wrap img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: contain;
}

.qrcode-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
}

/* 底部版权 */
.copyright {
  margin-top: 80px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: rgba(255, 255, 255, 0.3);
  font-size: 12px;
}

@media (min-width: 768px) {
  .copyright {
    flex-direction: row;
    justify-content: space-between;
  }
}

.copyright-links {
  display: flex;
  gap: 24px;
}

.copyright-links a {
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
  transition: color 0.3s;
}

.copyright-links a:hover {
  color: white;
}

/* 手机端适配 */
@media (max-width: 640px) {
  .footer {
    padding-top: 48px;
    padding-bottom: 32px;
  }

  .feature-bar {
    padding-bottom: 32px;
    margin-bottom: 32px;
    gap: 24px;
  }

  .feature-icon {
    width: 36px;
    height: 36px;
  }

  .feature-text {
    font-size: 13px;
  }

  .contact-title {
    font-size: 16px;
  }

  .contact-value {
    font-size: 18px;
  }

  .qrcode-list {
    gap: 32px;
  }

  .qrcode-img-wrap {
    width: 80px;
    height: 80px;
  }

  .copyright {
    margin-top: 48px;
  }
}
</style>
