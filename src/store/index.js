import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建store对象
const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:{
    addCount(state,payload) {
      payload.count++
    },
    addToCart(state,payload) {
      payload.checked = true
      state.cartList.push(payload)
    }
  },
  actions:{
    addCart(context,payload) {
      return new Promise((resolve, reject) => {
        let oldProduct = null
        for(let item of context.state.cartList) {
          if(item.iid === payload.iid) {
            oldProduct = item
          }
        }
        if(oldProduct) {
          // oldProduct.count += 1
          context.commit('addCount',oldProduct)
          resolve('当前数量加一')
        }
        else {
          payload.count = 1
          // state.cartList.push(payload)
          context.commit('addToCart',payload)
          resolve('添加了新的商品')
        }
      })
    }
  },
  getters:{
    cartLength(state) {
      return state.cartList.length
    },
    cartList(state) {
      return state.cartList
    }
  }
})
export default store
