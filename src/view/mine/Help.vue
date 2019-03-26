<template>
  <div class="pre" >
       <!-- 顶部 -->
      <nav-header title='帮助' back='true'></nav-header> 
      <div class='content help' style="height:calc(100% - 44px)">
        <ul class='clearfix ul-box'>
          <li v-for="(i,index) in list" :key='index' >{{i.text}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
import api from '../../until/help/api'
export default {
  name: 'help',
  data () {
    return {
      list:[
        {text:'交易所使用教程'},
        {text:'货币/提币'},
        {text:'区块链知识'},
        {text:'公告中心'}
      ]
    }
  },
  components: {
    navHeader:()=>import('@/components/navHeader')
  },
  methods: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
.gap{
  margin-top: 160px;
}
.help{
  .ul-box{
    padding: 0 20px;
    li{
      height: 87px;
      text-align: center;
      border:1px solid #ccc;
      border-radius: 10px;
      line-height: 87px;
      margin-top: 20px;
      color:#fff;
      font-size: 26px;
      width: 100%;
      // background:rgba(255,255,255,1);
      background-size: cover;
      background-repeat: no-repeat;
      
    }
    
    li:nth-child(1){
      background-image:url("../../assets/img/help_1.png");
    }
    li:nth-child(2){
      background-image:url("../../assets/img/help_2.png");
    }
    li:nth-child(3){
      background-image:url("../../assets/img/help_3.png");
    }
    li:nth-child(4){
      background-image:url("../../assets/img/help_4.png");
    }
  }
}

</style>
