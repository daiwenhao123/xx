<template>
  <div class="shopInfo">
    <div class="shopInfo-top">
      <img :src="shop.logo" />
      <span class="shopInfo-top-name">{{shop.name}}</span>
    </div>
    <div class="shopInfo-middle">
      <div class="shopInfo-middle-item shopInfo-middle-left">
        <div class="left1">
          <div class="sell">{{shop.sells}}</div>
          <div>总销量</div>
        </div>
        <div class="left2">
          <div class="goodsCount">{{shop.goodsCount}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="shopInfo-middle-item shopInfo-middle-right">
        <table class="shopInfo-middle-right-table">
          <tr v-for="(item,index) in shop.score" >
            <td class="shopInfo-middle-right-name" >{{item.name}}</td>
            <td class="shopInfo-middle-right-score"  :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="shopInfo-middle-right-better" :class="{'better-more':item.isBetter}">{{item.isBetter?'高':'低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailShopInfo',
    props:{
      shop:{
        type:Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .shopInfo{
    padding: 25px 0 0 8px;

  }
  .shopInfo-top{
    display: flex;
    align-items: center;
  }
  .shopInfo-top img{
    width: 50px;
    height: 50px;
  }
  .shopInfo-top-name{
    padding-left: 10px;
    font-size: 20px;
  }
  .shopInfo-middle{
    display: flex;
    margin-top: 30px;
    align-items: center;
  }
  .shopInfo-middle-item{
    flex: 1;
  }
  .shopInfo-middle-left{
    display: flex;
    justify-content: space-around;
    text-align: center;
    color: #161616;
    border-right: 1px solid #6a6a6a;
    padding-left: 30px;
  }
  .goodsCount{
    font-size: 20px;
    padding-bottom: 8px;
    font-weight: bold;
  }
  .sell{
    font-size: 20px;
    padding-bottom: 8px;
    font-weight: bold;
  }
  .shopInfo-middle-right{
    width: 120px;
    margin-left: 40px;
  }
  .shopInfo-middle-right-table{
    font-size: 16px;
  }

  .shopInfo-middle-right-name, .shopInfo-middle-right-score, .shopInfo-middle-right-better{
    line-height: 35px;
    height: 35px;
  }
  .shopInfo-middle-right-name{
    color: #000000;
  }
  .shopInfo-middle-right-score{
    padding-left: 15px;
    color: green;

  }
  .shopInfo-middle-right-better{
    padding-left: 15px;
    color: #006600;

  }
  .score-better{
    color: #ff0000;

  }
  .better-more{
    color: #ff0000;

  }
  .shop-bottom {

    text-align: center;
    margin-top: 15px;

  }
  .enter-shop{
      display: inline-block;
      font-size: 16px;
      background-color: #f2f5f8;
      width: 40%;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border-radius: 10px;
  }
</style>
