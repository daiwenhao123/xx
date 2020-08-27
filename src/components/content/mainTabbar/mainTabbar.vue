<template>
  <tabbar>
    <tabbaritem path='/home' activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/Home.png"  />
      <img slot="item-icon-active" src="~assets/img/tabbar/Home active.png"  />
      <div slot="item-text">首页</div>
    </tabbaritem>
    <tabbaritem path='/cart' activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.png" />
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart active.png" />
      <div slot="item-text">购物车</div>
    </tabbaritem>
    <tabbaritem path='/category' activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/category.png" />
      <img slot="item-icon-active" src="~assets/img/tabbar/category active.png" />
      <div slot="item-text">分类</div>
    </tabbaritem>
    <tabbaritem path='/profile' activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/profile.png" />
      <img slot="item-icon-active" src="~assets/img/tabbar/profile active.png" />
      <div slot="item-text">我的</div>
    </tabbaritem>
  </tabbar>
</template>

<script>
  import tabbaritem from 'components/common/tabbar/tabbar-item.vue'
  import tabbar from 'components/common/tabbar/tabbar.vue'//import导入可以直接写别名，src属性需要加~
  export default {
    name:'mainTabbar',
    components: {
      tabbar,
      tabbaritem
    }
  }
</script>

<style>
</style>
