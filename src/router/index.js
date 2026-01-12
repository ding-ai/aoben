import { createRouter, createWebHistory } from 'vue-router'

// 布局组件也使用懒加载，减少首屏 bundle 大小
const DefaultLayout = () => import('@/layouts/DefaultLayout.vue')

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home/index.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About/index.vue')
      },
      {
        path: 'news',
        name: 'News',
        component: () => import('@/views/News/index.vue')
      },
      {
        path: 'join',
        name: 'Join',
        component: () => import('@/views/Join/index.vue')
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/Contact/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
