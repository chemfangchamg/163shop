import Vue from 'vue'
import App from './App.vue'
// 第三方ui组件
import { Button } from 'vant';
import { Search } from 'vant'
import { Grid, GridItem } from 'vant'; //格子
import { Tab, Tabs } from 'vant'; // 标签页
import { Collapse, CollapseItem } from 'vant';
import { Swipe, SwipeItem } from 'vant'; // 轮播
import { Lazyload } from 'vant';
import { Image as VanImage } from 'vant';
import { Tabbar, TabbarItem } from 'vant'; //标签栏
import { Sticky } from 'vant'; // 粘连布局
import { NavBar } from 'vant'; // 导航栏




// 引入仓库
import store from './store'

// 引入路由器
import router from './router'
// use第三方ui组件必须在nwe Vue前
Vue.use(Button);
Vue.use(Search);
Vue.use(Grid);
Vue.use(GridItem);
// 标签页
Vue.use(Tab);
Vue.use(Tabs);
// 折叠栏
Vue.use(Collapse);
Vue.use(CollapseItem);
// 轮播
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
// 图片
Vue.use(VanImage);
// 标签栏
Vue.use(Tabbar);
Vue.use(TabbarItem);
// 粘连布局
Vue.use(Sticky);
// 导航栏
Vue.use(NavBar);

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库
  store
}).$mount('#app')
