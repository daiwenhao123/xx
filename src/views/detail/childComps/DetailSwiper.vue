<template>
<div>
  <swiper class="swipers">
    <swiper-item v-for="(item,index) in topImages" :key="index">
      <img :src="item" />
    </swiper-item>
  </swiper>
</div>
</template>

<script>
  import Swiper from 'components/common/swiper/Swiper.vue'
  import SwiperItem from 'components/common/swiper/SwiperItem.vue'
  export default {
    name:'DetailSwiper',
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      topImages:{
        type:Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .swipers{
    height: 450px;
    overflow: hidden;
  }
</style>
