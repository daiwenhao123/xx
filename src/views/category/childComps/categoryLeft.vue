<template>
    <div class="categoryLeft">
<Scroll class="content">
      <div v-for="(item,index) in list" :key="index"
      class="category-left-title"
      :class="{active:currentIndex===index}"
      @click="titleClick(index,item.maitKey)">
        <p>{{item.title}}</p>
      </div>
</Scroll>
    </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll.vue'
  export default {
    name:'categoryLeft',
    components:{
      Scroll
    },
    data() {
      return{
        currentIndex:0
      }
    },
    methods:{
      titleClick(index) {
        this.currentIndex = index
        this.$emit('categoryright',index)
      }
    },
    props:{
      list:{
        type:Array
      }
    }
  }
</script>

<style scoped>
  .category-left{
    width: 100%;
    height: 100vh;
  }
  .category-left-title{
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #f9f9f9;
  }
  .active{
    background-color: #FFFFFF;
    font-size: 18px;
    font-weight: bold;
    border-left: 3px solid #ff0c69;
  }
  .content{
    width: 100%;
    height: calc(100% - 49px);
  }
</style>
