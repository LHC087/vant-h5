// 按需全局引入 vant组件
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload , Button, List, Cell, Tabbar, TabbarItem, Uploader  } from 'vant'
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Uploader)