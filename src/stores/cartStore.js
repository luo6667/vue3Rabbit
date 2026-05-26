// 封装购物车模块
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart',() => {
  // 1.定义管理购物车数据的state
  const cartList = ref([])
  // 定义操作这个state的action函数
  const addCart = (goods) => {
    console.log("添加购物车的goods",goods)
    // 添加购物车操作
    // 已添加过的商品，直接count + 1增加数量

    // 未添加过的商品，直接push添加到购物车
    // 通过匹配传递过来的商品对象中的skuId能不能在cartList中找到,找到了就是添加过
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if(item){
      item.count += goods.count
    } else {
      cartList.value.push(goods)
    }
  }

  // 删除购物车
  const delCart = (skuId) => {
    // 1.找到要删除项的下标值 splice
    // 2.使用数组的过滤方法 filter
    // 用findIndex去找到与当前的skuId相同的那个商品也就是item，然后删掉这个元素
    const idx = cartList.value.findIndex((item) => skuId === item.skuId)
    cartList.value.splice(idx,1)
  }

  // 单选功能
  const singleCheck = (skuId,selected) => {
    // 通过skuId找到要修改的那一项，把selected值改为传过来的那个selected值
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }
  // 计算属性
  // 总的数量 所有项的count之和
  // 总价 所有项的price * count之和
  const allCount = computed(() => {
    return cartList.value.reduce((pre,cur) => pre + cur.count,0)
  })
  const allPrice = computed(() => {
    return cartList.value.reduce((pre,cur) => pre + cur.price * cur.count,0)
  })

  // 是否全选
  const isAll = computed(() => {
    return cartList.value.every((item) => item.selected)
  })

  // 全选功能
  const allCheck = (selected) => {
    // 把cartList中每一项的selected都设为当前的全选框状态
    cartList.value.forEach((item) => {
      item.selected = selected
    })
  }

  // 已选择数量
  const selectedCount = computed(() => cartList.value.filter((item) => item.selected).reduce((pre,cur) => pre + cur.count,0))
  // 已选择商品价钱合计
  const selectedPrice = computed(() => cartList.value.filter((item) => item.selected).reduce((pre,cur) => pre + cur.count * cur.price,0))

  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleCheck,
    isAll,
    allCheck,
    selectedCount,
    selectedPrice,
  }
},{
  persist: true,
})
