<template>
  <div class="paramInfo">
    <table v-for="table in paramInfo.sizes" class="paramInfo-table">
      <tr v-for="tr in table" class="paramInfo-tr">
        <td v-for="td in tr">
          {{td}}
        </td>
      </tr>
    </table>
    <table class="paramInfo-infos">
      <tr v-for="tr in paramInfo.infos">
        <td class="paramInfo-key">{{tr.key}}</td>
        <td class="paramInfo-value">{{tr.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name:'DetailParamInfo',
    props:{
      paramInfo:{
        type:Object
      }
    }
  }
</script>

<style scoped>
  .paramInfo {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .paramInfo table {
    width: 100%;
    border-collapse: collapse;
  }
  .paramInfo-table tr{
    height: 42px;
  }
  .paramInfo-table-tr td{
    border-bottom: 1px solid rgba(91, 91, 91, 0.1);
  }
  .paramInfo-infos{
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .paramInfo-infos tr{
    height: 42px;
  }
  .paramInfo-value{


    color: #eb4868
  }
  .paramInfo-key{
    width: 95px;
  }
</style>
