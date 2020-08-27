<template>
  <div class="cart-list">
    <Scroll class="content" ref="scroll">
       <CartListItem v-for="(item,index) in cartList" :key="index" :itemInfo="item"></CartListItem>
    </Scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll.vue'
  import CartListItem from './CartListItem.vue'
  import { mapGetters } from 'vuex'
  export default {
    name:'CartList',
    components:{
      CartListItem,
      Scroll
    },
    computed:{
      ...mapGetters(['cartList'])
    },
    activated() {
      this.$refs.scroll.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart-list{
    height: 100vh;
  }
  .content{
    height: calc(100% - 44px - 49px - 49px);
    overflow: hidden;
  }
</style>
