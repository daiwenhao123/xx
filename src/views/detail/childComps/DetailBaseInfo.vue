<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1">
        <img :src="goods.services[index-1].icon" />
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailBaseInfo',
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info{
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title{
    color: #222;
    font-size: 20px;
  }
  .info-price{
    margin-top: 10px;
  }
  .info-price .n-price{
    font-size: 24px;
    color: var(--color-high-text);
  }
  .info-price .o-price{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .discount{
    color: white;
    border-radius: 10px;
    background-color: #ff3da5;
    font-size: 17px;
    margin: 1px 1px 1px 1px;
    position: relative;
    top: -1px;

  }
  .info-other{
    margin-top: 15px;
    padding-bottom: 10px;
    display: flex;
    border-bottom: 3px solid #f2f5f8;
    justify-content: space-between;


  }
  .info-service{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #3f3f3f;

  }
  .info-service img{
    width: 13px;
    height: 13px;
  }
</style>
