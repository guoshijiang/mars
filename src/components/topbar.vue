<template>
  <div class="hb-bar">
   
   <p> <span class="hb-close"> x</span> <span class="hb-title">{{title}}</span> </p>
    <!-- <x-header style="background-color:#fff;">{{title}}</x-header> -->
    
   
  </div>
</template>

<script>
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem
  },
  props:{
    title:{
      type:String,
      required:true,
    },
    back:{
      type:String,
      // required:true,
    }
    
  },
  data () {
    return {
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false
    }
  },
  created() {
      // console.log('33333')
  },
}
</script>

<style lang="less" >
.hb-bar {
  margin-top: 22px;
  p{
      width:100%;
      box-sizing: border-box;
      padding: 0 24px;
      height: 44px;
      font-size: 0;
      span{
            font-size: 20px;
            color:#333;
            display: inline-block;
            height: 44px;
            line-height: 44px;
      }
      .hb-close{width: 16px;}
      .hb-title{margin-left: 34px;}

  }
}
</style>