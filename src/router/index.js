
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/viz2',
  name: 'viz2',
  component: () => import('../components/DataVisualizer2.vue')
}, {
  path: '/viz1',
  name: 'viz1',
  component: () => import('../components/DataVisualizer.vue')
}]

const router = new VueRouter({
  routes
})

export default router