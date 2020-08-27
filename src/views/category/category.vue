<template>
  <div class="content">
  <ul>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
    <li>分类</li>
  </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name:'category',
   data() {
     return {
       scroll:null
     }
   },
   mounted() {
     this.scroll = new BScroll(document.querySelector('.content'),{
       probeType: 3,
       pullUpLoad:true
     })
     this.scroll.on('scroll', (position) => {
       console.log(position)
     })
     this.scroll.on('pullingUp', () => {
       console.log('sgang')
     })
   }
  }

</script>

<style>
  .content {
    height: 250px;
    background-color: #0074D9;
    /* overflow: hidden; */
   /* overflow-y: scroll; */
  }
</style>
