<template>
  <div id="app">
    <!-- 顶部 -->
    <!-- <nav-header class="header"></nav-header> -->
    <!-- 视口 -->
    <router-view/>
    <!-- 底部 -->
    <!-- <tab class="tab_footer"></tab> -->
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {

    }
  },
  components:{
    tab:()=>import('@/components/tab'),
    navHeader:()=>import('@/components/navHeader')
  }

}
</script>

<style lang="less" >
@import '~vux/src/styles/reset.less';
//全局配置
html,body {
  background-color: #fff;
  height: 100%;
  overflow: hidden;
  li{
    list-style: none;
  }
  input,textarea{
    border: 0;
   &:focus{
     outline-offset: 0px;
      outline: -webkit-focus-ring-color auto 0px;
      border: 0px solid #ededed;
   }
  }
}
#app{
    width: 100%;
    height: 100%;
   overflow-y: scroll;
}
.tab_footer{
  position: fixed;
  bottom:0px;
}
.header{
   position: fixed;
   top:0px;
   width: 100%;
   z-index: 999;
}
.pre{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.has_footer{
}
.content{
  height: 100%;
  overflow-y: scroll;
}
.has-header{

}
.gap_b{
  margin-bottom: 30px;
}
.clearfix:after,.clearfix:before {
    display: block;
    content: ".";
    height: 0;
    line-height: 0;
    overflow: hidden;
    visibility: none;
    clear: both;
}
.float_left{
    float: left;
}
.float_right{
    float: right;
}
.clearfix {
    zoom:1; /*兼容ie7一下*/
}
//覆盖全局样式
.weui-cell__bd input::-webkit-input-placeholder,.weui-cell__bd textarea::-webkit-input-placeholder{
  color:#d0d0d0;
  font-size: 16px;
}


</style>
