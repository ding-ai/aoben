/**
 * 图片懒加载指令
 * 使用方式: <img v-lazy="imageUrl" alt="描述" />
 */

export const lazyLoad = {
  mounted(el, binding) {
    // 创建 IntersectionObserver 实例
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 当图片进入视口时加载
            const img = entry.target
            const src = binding.value

            img.src = src

            // 加载成功后添加淡入效果
            img.onload = () => {
              img.style.opacity = '1'
            }

            // 停止观察
            observer.unobserve(img)
          }
        })
      },
      {
        // 提前 100px 开始加载
        rootMargin: '100px',
        threshold: 0.01,
      }
    )

    // 初始化图片样式
    el.style.opacity = '0'
    el.style.transition = 'opacity 0.3s'

    // 开始观察
    observer.observe(el)

    // 保存 observer 实例，用于组件卸载时清理
    el._lazyLoadObserver = observer
  },

  unmounted(el) {
    // 组件卸载时清理观察器
    if (el._lazyLoadObserver) {
      el._lazyLoadObserver.disconnect()
      delete el._lazyLoadObserver
    }
  },
}

export default lazyLoad
