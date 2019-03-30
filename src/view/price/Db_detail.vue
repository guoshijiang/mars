<template>
  <div class = 'pre ' >
    <!-- 顶部 -->
    <nav-header title='明细' back='true'></nav-header>  
    <!-- 内容 -->
    <div class="content db_detail"  style="height:calc(100% - 44px)">
        <p class="num">＋0.01339514</p>
        <cell title='类型' value='普通充值'></cell>
        <cell title='状态' value='已完成'></cell>
        <cell title='区块链交易ID' value='23HJhjJKHJDHFuurye23HJhjJKHJDHFuurye23HJhjJKHJDHFuurye'  ></cell>
        <cell title='时间' value='2018/05/29 08:00'></cell>
    </div>    
  </div>
</template>

<script>
import {TransferDom,Cell,Group, Toast,XButton,} from 'vux'
export default {
    directives: {
        TransferDom
    },
  components: {
    Group,
	Toast,Cell,XButton,
    navHeader:()=>import('@/components/navHeader')
  },
  data () {
    return {
       
    }
  },
  mounted() {
   console.log('ddd',this.$route)
   
  },
  methods: {
     
  }
}
</script>

<style lang="less">

@import '~vux/src/styles/close.less';
.db_detail{
    overflow: scroll;
    box-sizing: border-box;
    padding-top: 10px;
    .weui-cell:before{
        border-top:1px solid #E6E6E6 !important;
    }
    .weui-cell {
        .vux-label{
            color:#999999;
            font-size: 14px;
        }
        .weui-cell__ft{
            font-size: 14px;
            color:#333333;
            max-width: 200px;
            word-wrap: break-word;word-break: break-all;overflow: hidden;
        }
    }
    .num{
        height:28px;
        font-size:28px;
        font-weight:600;
        padding: 12px 15px;
        color:rgba(51,51,51,1);
        line-height:28px;
        font-weight: 400;
    }
   
}
</style>