<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-if="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

  </div>

</template>

<script>
  export default {
    name:'tabbaritem',
    data(){
      return{
        // isActive:true
      }
    },
    computed:{
      isActive(){
        return this.$route.path.includes(this.path)
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path).catch(err=>err)
      }
    },
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    }
  }
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 3px;
  }
 
</style>
