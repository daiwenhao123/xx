<template>
  <div class="goodsitem" @click="itemClick">
    <img :src="showGoods" @load="imageLoad"/>
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥:{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'GoodsListItem',
    props:{
      goodsItem:{
        type:Object,
        default() {
          return {}
        }
      }
    },
    computed:{
      showGoods() {
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods:{
      imageLoad() {
        if(this.$route.path.indexOf('/home')!==-1) {
          this.$bus.$emit('itemimageLoad')
        } else if (this.$route.path.indexOf('/detail')!==-1) {
          this.$bus.$emit('DetailitemimageLoad')
        }

      },
      itemClick() {
        this.$router.push({
          path:'/detail',
          query:{
            id:this.goodsItem.iid
          }
        })
      }
    }
  }
</script>

<style>
  .goodsitem{
    padding-bottom: 40px;
    position: relative; /* 向下增加四十像素 */
    width: 48%;
  }
  .goodsitem img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect{
    position: relative;
  }
  .goods-info .collect::before {
    content: ''; /* //必加的前置条件 */
    position: absolute;
    width: 14px;
    height: 14px;
    top: -1px;
    left: -17px;
    background: url("~assets/img/common/collect.png") 0 0/14px 14px;
  }


</style>
