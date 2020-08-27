<template>
  <div class="cart">
    <NavBar class="navbar">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>
    <CartList></CartList>
    <CartBottomBar></CartBottomBar>
  </div>

</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import CartList from './childComps/CartList.vue'
  import CartBottomBar from './childComps/CartBottomBar.vue'
  import { mapGetters } from 'vuex'
  export default {
    name:'cart',
    components:{
      NavBar,
      CartBottomBar,
      CartList
    },
    computed:{
     ...mapGetters(['cartLength','cartList'])
    }
  }
</script>

<style scoped>
  .navbar{
    background-color: var(--color-tint);
    color: white;
    font-weight: 700;
  }
</style>
