<template>
  <div id="detail">
    <DetailNavBar class="detail-navbar" @titleClick="titleClick" ref="nav"></DetailNavBar>
   <Scroll class="content" ref="scroll" :prototype="3" @scroll="contentScroll">
      <DetailSwiper :topImages="TopImages"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
     <DetailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad"></DetailGoodsInfo>
      <DetailParamInfo :paramInfo="paramInfo" ref="params"></DetailParamInfo>
      <DetailCommentInfo :commentInfo="commentInfo" ref="comment"></DetailCommentInfo>
      <!-- <GoodsList :goods="recommends" ref="recommend"></GoodsList> -->
  </Scroll>
  <DetailBottomBar @addCart="addCart"></DetailBottomBar>

  </div>

</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar.vue'
  import DetailSwiper from './childComps/DetailSwiper.vue'
  import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
  import DetailShopInfo from './childComps/DetailShopInfo.vue'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
  import DetailParamInfo from './childComps/DetailParamInfo.vue'
  import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'
  import DetailBottomBar from './childComps/DetailBottomBar.vue'

  import Scroll from 'components/common/scroll/Scroll.vue'


  import {getDetail, Goods, Shop, GoodsParam, getRecommend} from '../../network/detai.js'
  export default {
    name:'Detail',
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      GoodsList,
      Scroll
    },
    data() {
      return{
        iid:null,
        TopImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommends:[],
        themeTopYs:[],
        currentIndex:0
      }
    },
    created() {
      //1.保存传入的iid
      this.iid = this.$route.query.id

      //2.根据iid请求数据
      getDetail(this.iid).then((res)=>{
        //1.获取顶部的图片轮播数据
        console.log(res)
        const data = res.data.result
        this.TopImages= data.itemInfo.topImages

        //2.获取商品数据
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //3.创建店铺信息
        this.shop = new Shop(data.shopInfo)
        //4.保存商品详情数据
        this.detailInfo = data.detailInfo
        //5.获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        //6.取出评论信息
        if(data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }

      })
      getRecommend().then((res)=>{
        this.recommends = res.data.data.list
      })
    },


    mounted() {
      this.$bus.$on('DetailitemimageLoad', ()=>{
        console.log('已刷新')
        this.$refs.scroll && this.$refs.scroll.scroll.refresh()
      })
    },
    methods:{
      imageLoad() {
        console.log('eee')
       this.$refs.scroll && this.$refs.scroll.scroll.refresh()
       this.themeTopYs = []
       this.themeTopYs.push(0)
       this.themeTopYs.push(this.$refs.params.$el.offsetTop)
       this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
       // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
       // console.log(this.themeTopYs)
      },
      titleClick(index) {
        console.log(index)
        this.$refs.scroll.scroll.scrollTo(0,-this.themeTopYs[index],300)
      },
      contentScroll(position) {
        const positionY = -position.y
        let length = this.themeTopYs.length
        for(let i=0;i<length;i++){
          if(this.currentIndex !== i && ((i < length-1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])
          || (i===length-1&&positionY >= this.themeTopYs[i]))){
            this.currentIndex = i;
            console.log(this.currentIndex)
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
      },
      addCart() {
        //1.获取商品展示的信息
        const product = {}
        product.image = this.TopImages[0]
        product.title = this.goods.title
        product.desc  = this.goods.desc
        product.price = this.goods.realPrice
        product.iid   = this.iid
        //2.将商品添加到购物车
        this.$store.dispatch('addCart',product).then(res => {
          this.$toast.show(res, 2000)
        })
      }
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 1;
    background-color: #fff;
    height: 100vh;
  }
  .detail-navbar{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content{
    height: calc(100% - 44px - 49px);
  }

</style>
