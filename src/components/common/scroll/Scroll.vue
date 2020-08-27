<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name:'Scroll',
    data() {
      return {
        scroll: null,
      }
    },
    props:{
      prototype:{
        type:Number,
        default:0
      },
       pullUpLoad:{
         type:Boolean,
         default:false
       }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        probeType: this.prototype,
        pullUpLoad:this.pullUpLoad
      })
      this.scroll.on('scroll',(position)=> {
        // console.log(position)
        this.$emit('scroll',position)
      })
      this.scroll.on('pullingUp',()=> {
        this.$emit('pullingUp')
      })
    }
  }
</script>

<style>
</style>
