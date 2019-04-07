import Vue from 'vue'
import App from './App'
import router from 'router'
//mpvue-router-patch mpvue 路由插件 
import MpvueRouterPatch from 'mpvue-router-patch'
Vue.use(MpvueRouterPatch)


// // 字符串
// router.push('/pages/news/detail')
// // 对象
// router.push({ path: '/pages/news/detail' })
// // 带查询参数，变成 /pages/news/detail?id=1
// router.push({ path: '/pages/news/detail', query: { id: 1 } })
// // 切换至 tabBar 页面
// router.push({ path: '/pages/news/list', isTab: true })
// // 重启至某页面，无需指定是否为 tabBar 页面，但 tabBar 页面无法携带参数
// router.push({ path: '/pages/news/list', reLaunch: true })


Vue.config.productionTip = false
App.mpType = 'app'


let app = new Vue({
    ...App
})

app.$mount()

