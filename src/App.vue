<template>
  <div id="app">
    <!-- 顶部 -->
    <!-- <nav-header class="header"></nav-header> -->
    <!-- 视口 -->
    <keep-alive>
		<!-- 需要被缓存的 -->
      	<router-view v-if='$route.meta.keepAlive'/>
    </keep-alive>
	<router-view v-if='!$route.meta.keepAlive'/>
    
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
        // tab:()=>import('@/components/tab'),
        // navHeader:()=>import('@/components/navHeader')
    },
    mounted() {
        this.$store.dispatch('initSettings') 
        this.$store.dispatch('initHb') //初始化的一些项目实时请求
    },

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

.content{
  height: 100%;
  overflow-y: scroll;
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
//选币模态框样式
.vux-popup-dialog .popup-content{
  height: 150px;
  padding: 15px;
  .flex-box{
        margin-top: 20px;
        box-sizing: border-box;
    }
    .flex-demo {
        text-align: center;
        color: #666;
        background-color: #F5F6F7;
        border-radius: 4px;
        background-clip: padding-box;
    }
}

</style>
