<template>
 <div id="Home">
   <NavBar class="home-nav">
     <div slot="center">购物街</div>
   </NavBar>
   <TabControl :titles="['流行','新款','精选']"
     @tabclick="tabclick"
     ref="TabControl1" class="TabControl" v-show="isTabFixed">
    </TabControl>
   <Scroll class="content" ref="scroll" :prototype="3"
    @scroll="getPosition" :pullUpLoad="true" @pullingUp="loadMore">
     <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
     <recommend-view :recommends="recommends"></recommend-view>
     <Feature></Feature>
     <TabControl :titles="['流行','新款','精选']"
       @tabclick="tabclick"
       ref="TabControl" >
      </TabControl>
     <GoodsList :goods="goods[currentType].list"></GoodsList>
   </Scroll>
   <backtop @click.native="backclick" v-show="isShowbacktop"></backtop> <!-- 监听组件的原生事件必须加修饰符 -->
 </div>

</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper.vue';
  import RecommendView from './childComps/RecommendView.vue';
  import Feature from './childComps/Feature.vue';

  import NavBar from 'components/common/navbar/NavBar.vue';
  import TabControl from 'components/content/tabcontrol/TabControl.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'
  import backtop from 'components/content/backtop/backtop.vue'
  import {getHomeMultidata, getHomeGoods} from 'network/Home.js';

  export default {
    name:'Home',
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      Feature,
      TabControl,
      GoodsList,
      Scroll,
      backtop
    },
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0, list:[]},
          'new':{page:0, list:[]},
          'sell':{page:0, list:[]}
        },
        currentType:'pop',
        isShowbacktop:false,
        topoffsetTop:0,
        isTabFixed:false,
        saveY:0
      }
    },
    activated() {
      this.$refs.scroll.scroll.scrollTo(0, this.saveY, 10)
      this.$refs.scroll.scroll.refresh()
      console.log(this.saveY)
    },
    deactivated() {
      this.saveY= this.$refs.scroll.scroll.y
      console.log(this.saveY)
    },
    created() {
      //1.请求多个数据
     this.getHomeMultidata()
	  //2.请求商品数据
	   this.getHomeGoods('pop')
     this.getHomeGoods('new')
     this.getHomeGoods('sell')
    },
    mounted() {
      // const refresh = this.debounce(this.$refs.scroll && this.$refs.scroll.scroll.refresh)
      //1.监听item中图片加载完成
      this.$bus.$on('itemimageLoad', ()=>{
        // console.log('ee')
        this.$refs.scroll && this.$refs.scroll.scroll.refresh()
      })
      //2.吸顶效果   获取tabControl的offsetTop
      //  所有的组件都有一个属性$el:用于获取组件中的元素
      // console.log(this.$refs.TabControl.$el.offsetTop)

      //
    },
    methods:{
      /*
      **事件监听相关方法
      */
     // debounce(func, delay) {
     //   let timer = null
     //   return function(...args) {
     //    if (timer) clearTimeout(timer)
     //    timer = setTimeout(()=>{
     //      func.apply(this, args)
     //    },delay)
     //   }
     // },
     tabclick(index) {
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.TabControl1.currentIndex = index;
      this.$refs.TabControl.currentIndex = index;
     },
     backclick() {
       this.$refs.scroll.scroll.scrollTo(0, 0, 500)
     },
     getPosition(position) {
      //1.判断BackTop是否显示
      this.isShowbacktop = (-position.y) > 1000
      //决定tabControl是否吸顶(position)
      this.isTabFixed = (-position.y) > this.tabOffsetTop
     },
     loadMore() {
       this.getHomeGoods(this.currentType)
     },
     swiperImageLoad() {
       console.log(this.$refs.TabControl.$el.offsetTop)
       this.tabOffsetTop = this.$refs.TabControl.$el.offsetTop
     },

      /*
      **网络请求相关方法
      * */
      getHomeMultidata() {
        getHomeMultidata().then(res=>{
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1//一开始的page是加给刚定义的要发送给后端的page，并不是加给goods里的page
        getHomeGoods(type, page).then(res=>{
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.scroll.finishPullUp()


        })
      }
    }
  }
</script>

<style scoped>
  #Home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .TabControl{
    position: relative;
    z-index: 9;
    background-color: white;
  }
</style>
