import { createRouter, createWebHistory } from 'vue-router'
import SlidesView from './SlidesView.vue'
import SimpleView from './SimpleView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'slides', component: SlidesView },
    { path: '/simple', name: 'simple', component: SimpleView },
  ],
})
