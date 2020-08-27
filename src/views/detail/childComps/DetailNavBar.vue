<template>
  <div>
    <NavBar>
      <div slot="left" class="back" @click="backclick">
        <img src="~assets/img/common/back.png" />
      </div>
      <div slot="center" class="titles">
        <div v-for="(item,index) in titles" class="titles-item"
         @click="TitlesitemClick(index)" :class="{active:currentIndex===index}">
          {{item}}
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  export default {
    name:'DetailNavBar',
    components:{
      NavBar
    },
   data() {
     return {
       titles:['商品','参数','评论','推荐'],
       currentIndex:0
     }
   },
   methods:{
     TitlesitemClick(index) {
       this.currentIndex = index;
       this.$emit('titleClick', index)
     },
     backclick() {
       this.$router.back()
     }
   }
  }
</script>

<style scoped>
  .titles{
    display: flex;
    font-size: 13px;
  }
  .titles-item{
    flex: 1;
  }
  .active{
    color: red;
  }
  .back img{
    width: 20px;
    height: 20px;
    margin-top: 12px;
  }
</style>
