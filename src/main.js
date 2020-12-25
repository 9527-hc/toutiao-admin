/**
 * 项目的启动入口
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less'

Vue.config.productionTip = false

// 创建vue根实例
// 把router配置到根实例中
new Vue({
  router,
  // 通过render方法把APP渲染到#app入口节点。
  render: h => h(App)
  // el:"#app" 等价于$mount('#app')
}).$mount('#app')
