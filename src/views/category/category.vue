<template>
  <div class="category">

      <categoryLeft :list="list" @categoryright="getcategoryright"
      class="categoryLeft"></categoryLeft>

        <categoryRight :info="info" class="categoryRight"></categoryRight>


  </div>
</template>

<script>
  import {getcategory,getcategoryInfo} from 'network/category.js';
  import categoryLeft from './childComps/categoryLeft.vue'
  import categoryRight from './childComps/categoryRight.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'
  export default {
    name:'category',
    components:{
      categoryLeft,
      categoryRight,
      Scroll

    },
    data() {
      return{
        list:[],
        maitKey:3627,
        info:[]
      }
    },
    created() {
      this.getcategory();
      getcategoryInfo(this.maitKey).then(res=>{
          console.log(res)
          this.info = res.data.data.list
        })
    },
    methods:{
      getcategory() {
        getcategory().then(res=>{
          console.log(res)
          this.list = res.data.data.category.list
        })
      },
      getcategoryright(index) {
        const maitKey = this.list[index].maitKey
        this.maitKey = maitKey
        getcategoryInfo(this.maitKey).then(res=>{
          console.log(res)
          this.info = res.data.data.list
        })
      },
      // imageLoad() {
      //   this.$refs.scroll.scroll.refresh()
      // }

    }
  }



</script>

<style>
  .category{
    width: 100%;
    display: flex;
    height: 100vh;
  }
  .categoryLeft{
    width: 25%;
  }
  .categoryRight{
    width: 75%;
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center; */
  }
  /* .content{
    width: 100%;
    height: calc(100% - 49px);
  } */


</style>
