// 把components中的所有组件都全局化注册
// 通过插件的方式
import Sku from './XtxSku/index.vue'
import ImageView from './imageView/index.vue'

export const componentPlugin = {
  install(app) {
    app.component('ImgView', ImageView)
    app.component('Sku', Sku)
  }
}