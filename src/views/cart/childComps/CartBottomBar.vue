<template>
  <div class="bottom-bar">
    <div class="check-content">
      <CheckButton class="check-button"
       :isChecked="isSelectAll" @click.native="changeButton"></CheckButton>
      <span>全选</span>
      <div class="bottom-price">
        合计：{{totalPrice}}
      </div>
      <div class="calulate" @click="calcClick">
        结算：({{checkLength}})
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton.vue'
  export default {
    name:'CartBottomBar',
    methods:{
      changeButton() {
        if(this.isSelectAll) {
          //1.forEach函数
          // this.$store.getters.cartList.forEach(item=>item.checked = false)
          //2.循环遍历
          for(let i=0;i<this.$store.getters.cartList.length;i++) {
            this.$store.getters.cartList[i].checked = false
          }
        } else {
          // this.$store.getters.cartList.forEach(item=>item.checked = true)
          for(let i=0;i<this.$store.getters.cartList.length;i++) {
            this.$store.getters.cartList[i].checked = true
          }
        }
      },
      calcClick() {
        if(!this.isSelectAll){
          this.$toast.show('请选择购买的商品',2000)
        }  	
      }
    },

    components:{
      CheckButton
    },
    computed:{
      totalPrice() {
        // return this.$store.state.cartList.filter(item => {
        //   return item.checked
        // }).reduce((preValue, item) => {
        //   return preValue + item.price * item.count
        // }, 0)
        let result = 0;
        for(let i=0;i<this.$store.getters.cartList.length;i++) {
          if(this.$store.getters.cartList[i].checked){
            result +=  (this.$store.getters.cartList[i].price * this.$store.getters.cartList[i].count)
          }
        }
        return '￥'+ result.toFixed(2);
      },
      checkLength() {
        // return this.$store.getters.cartList.filter(item =>
        //   item.checked
        // ).length
        let result = 0;
        for(let i=0;i<this.$store.getters.cartList.length;i++) {
          if(this.$store.getters.cartList[i].checked){
            result += this.$store.getters.cartList[i].count
          }
        }
        return result;
      },
      isSelectAll() {
        if(!this.$store.state.cartList.length){
          return false
        }
        // 1.使用filter
        // return !(this.$store.state.cartList.filter(item => !item.checked).length)
        //2.使用find
        // return !this.$store.state.cartList.find(item => !item.checked)
        //3.普通遍历
        for(let i=0;i<this.$store.state.cartList.length;i++){
          if(!this.$store.state.cartList[i].checked){
            return false
          }
        }
        return true
      }
    },
  }
</script>

<style scoped>
  .bottom-bar{
    width: 100%;
    height: 49px;
    background-color: #fafafa;
    position: fixed;
    bottom: 49px;
    display: flex;
    align-items: center;

  }
  .check-content{
    display: flex;
    align-items: center;
    padding-left: 7px;
    width: 100%;
  }
  .check-button{
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }
  .bottom-price{
    font-size: 18px;
    margin-left: 15px;
    flex: 1;
  }
  .calulate{
    width: 90px;
    line-height: 38px;
    text-align: center;
    border-radius: 18px;
    background-color: #ff2f06;
    color: #fff;
  }
</style>
