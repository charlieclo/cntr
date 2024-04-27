import { createRouter, createWebHistory } from 'vue-router'

// Layout
import MainLayout from '@/layout/MainLayout.vue'

// Views
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Product from '@/views/Product.vue'
import Partners from '@/views/Partners.vue'
import ContactUs from '@/views/ContactUs.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/product',
        component: Product
      },
      {
        path: '/partners',
        component: Partners
      },
      {
        path: 'contact-us',
        component: ContactUs
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
