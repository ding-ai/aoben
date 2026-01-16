<template>
  <div class="download-page">
    <div class="download-container">
      <h1 class="download-title">下载奥本APP</h1>
      <p class="download-subtitle">扫描二维码，开启健康美丽之旅</p>

      <div class="qrcode-grid">
        <!-- Android -->
        <div class="qrcode-card">
          <div class="qrcode-icon android">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.523 15.341c-.5 0-.91.41-.91.91s.41.91.91.91.91-.41.91-.91-.41-.91-.91-.91zm-11.046 0c-.5 0-.91.41-.91.91s.41.91.91.91.91-.41.91-.91-.41-.91-.91-.91zm11.405-6.02l1.9-3.29c.11-.18.05-.42-.13-.53-.18-.11-.42-.05-.53.13l-1.93 3.34c-1.47-.67-3.12-1.04-4.89-1.04s-3.42.37-4.89 1.04l-1.93-3.34c-.11-.18-.35-.24-.53-.13-.18.11-.24.35-.13.53l1.9 3.29C3.74 10.97 1.5 14.14 1.5 17.77h21c0-3.63-2.24-6.8-5.62-8.45zM7.477 14.75c-.5 0-.91-.41-.91-.91s.41-.91.91-.91.91.41.91.91-.41.91-.91.91zm9.046 0c-.5 0-.91-.41-.91-.91s.41-.91.91-.91.91.41.91.91-.41.91-.91.91z"
              />
            </svg>
          </div>
          <h3 class="qrcode-label">Android 安卓版</h3>
          <div class="qrcode-img">
            <div class="qrcode-placeholder">
              <span>安卓二维码</span>
            </div>
          </div>
          <p class="qrcode-tip">使用手机扫码下载</p>
        </div>

        <!-- iOS -->
        <div class="qrcode-card">
          <div class="qrcode-icon ios">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
              />
            </svg>
          </div>
          <h3 class="qrcode-label">iOS 苹果版</h3>
          <div class="qrcode-img">
            <div class="qrcode-placeholder">
              <span>苹果二维码</span>
            </div>
          </div>
          <p class="qrcode-tip">使用手机扫码下载</p>
        </div>
      </div>

      <div class="download-footer">
        <p>支持 ---系统版本号---(iOS 12.0+ / Android 8.0+) 系统</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.download-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 24px 60px;
}

.download-container {
  max-width: 800px;
  width: 100%;
  text-align: center;
}

.download-title {
  font-size: 48px;
  font-weight: bold;
  color: white;
  margin-bottom: 16px;
}

.download-subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 64px;
}

.qrcode-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 48px;
}

.qrcode-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px 32px;
  transition: all 0.3s;
}

.qrcode-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-4px);
}

.qrcode-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}

.qrcode-icon.android {
  background: linear-gradient(135deg, #3ddc84 0%, #2ca05a 100%);
  color: white;
}

.qrcode-icon.ios {
  background: linear-gradient(135deg, #555 0%, #333 100%);
  color: white;
}

.qrcode-label {
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 24px;
}

.qrcode-img {
  width: 180px;
  height: 180px;
  margin: 0 auto 16px;
  background: white;
  border-radius: 12px;
  padding: 12px;
}

.qrcode-placeholder {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 14px;
}

.qrcode-tip {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
}

.download-footer {
  color: rgba(255, 255, 255, 0.3);
  font-size: 14px;
}

/* 手机端适配 */
@media (max-width: 640px) {
  .download-page {
    padding: 100px 16px 40px;
  }

  .download-title {
    font-size: 32px;
  }

  .download-subtitle {
    font-size: 16px;
    margin-bottom: 40px;
  }

  .qrcode-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .qrcode-card {
    padding: 32px 24px;
  }

  .qrcode-img {
    width: 160px;
    height: 160px;
  }
}
</style>
