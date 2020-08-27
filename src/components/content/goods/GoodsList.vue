<template>
	<div class="goods">
    <GoodsListItem v-for="(item,index) in goods" :goodsItem="item" :key="index"></GoodsListItem>
	</div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue'
  export default {
    name:'GoodsList',
    components:{
      GoodsListItem
    },
    props:{
      goods:{
        type:Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; /* //用于设置弹性盒子在横轴上的对齐方式 */
    padding: 5px;
  }
</style>
