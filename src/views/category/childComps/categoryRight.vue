<template>
  <div class="category-right">
    <Scroll class="content" :prototype="3">
      <div class="category-right-top" v-for="(item,index) in info">
       <a :href="item.link">
         <img :src="item.image" @load="imgLoad"/>
         <div class="category-title">{{item.title}}</div>
       </a>
      </div>
    </Scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll.vue'
  export default {
    name:'categoryRight',
    components:{
      Scroll
    },
    data() {
      return{
        count:0
      }
    },
    props:{
      info:{
        type:Array
      }
    },
    methods:{
      imgLoad() {
          this.$emit('imageLoad')
      }
    }
  }
</script>

<style scoped>
  .category-right{
    width: 100%;
    height: 100vh;
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
 */

  }
 .category-right-top{
   display: inline-block;
   width: 33%;
   text-align: center;
   padding: 10px;
   justify-content: space-around;

 }
 .category-right img{
   width: 80px;
   height: 80px;
 }
 .category-title{
   padding: 5px;
 }
 .content{
   height: 100%;

 }

</style>
