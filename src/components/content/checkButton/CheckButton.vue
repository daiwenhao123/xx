<template>
  <div class="check-button" :class="{check:isChecked}">
    <img src="~assets/img/cart/tick.png" />
  </div>
</template>

<script>
  export default {
    name:'CheckButton',
    props:{
      isChecked:{
        type:Boolean,
        default() {
          return false
        }
      }
    }
  }
</script>

<style scoped>
  .check-button{
    border-radius: 25px;
    border: 2px solid #aaa;
  }
  .check-button img{
    width: 18px;
    height: 18px;
  }
  .check{
    border-color: red;
    background-color: #eb1c00;
  }
</style>
