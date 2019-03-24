<template>
  <div class='pre'>
    <!-- 顶部 -->
    <!-- <nav-header title='我的'></nav-header>  -->
    <!-- 内容 -->
    <div class="content mine " style="height:calc(100% - 44px)">
      <div class="top-car">
          <ul class="clearfix">
            <li style="background-image:url('src/assets/img/Bitmap.png')"></li>
            <li><p>苏镇</p><p>ID:2874348</p></li>
          </ul>
          <div class="bottom-bg">
          </div>
      </div>
      <group>
        <cell :title="item.title" is-link v-for='(item,index) in list' :key='index' :link='item.link'>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" :src="item.url">
        </cell>
        <router-view/>
      </group>
    </div> 
    <!-- 底部 -->
    <tab class="tab_footer" :active='3'></tab>

  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import { Actionsheet } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Actionsheet,
    tab:()=>import('@/components/tab'),
    navHeader:()=>import('@/components/navHeader')
  },
  data () {
    return {
      list:[
        {title:'实名认证',img:'',link:'/real',url:'src/assets/img/shi.png'},
        {title:'修改登录密码',img:'',link:'/ChangePassword',url:'src/assets/img/change_pass.png'},
        {title:'修改资金密码',img:'',link:'',url:'src/assets/img/change_zijin.png'},
        {title:'修改手机号',img:'',link:'/custom',url:'src/assets/img/kefu.png'},
        {title:'帮助中心',img:'',link:'/help',url:'src/assets/img/help.png'},
        {title:'反馈',img:'',link:'/feedback',url:'src/assets/img/kefu.png'},
      ],
      msg: 'Hello World!',
      val:'ww'
    }
  },
  methods: {
    goOut(){
      this.$router.push({name:'Login'})
    }
  },
}
</script>

<style lang="less">
// 覆盖vux的组件样式
.mine{
  .weui-cells::before{
    border-top:0px !important;
  }
  .vux-no-group-title{
    margin-top: 0px !important;
  }  
  .weui-cells{
    &::after{
      border-bottom:0px !important;
    }
    margin-top: 0px;
    .vux-label{
      font-size: 16px;
      font-weight: 400;
      line-height: 16px;
      color:#333;
      text-indent: 13px;
    }
    .weui-cell::before{
      border-top:0px;
    }
    .weui-cell::after{
      border-top:0px;
    }
    
  }
  .top-car{
    width: 100%;
    height: 238px;
    background:linear-gradient(225deg,rgba(255,115,184,1) 0%,rgba(39,58,255,0.27) 100%);
    position: relative;
    overflow: hidden;
    ul{
      height: 70px;
      margin-top: 78px;
      li{
        height: 70px;
        width: 70px;
        float: left;
      }
      li:first-child{
        margin-left: 20px;
        // border:1px solid #000;
        background-size: cover;
      }
      li:last-child{
        padding-left: 18px;
        p{font-size: 26px;line-height: 26px;margin-top: 10px;}
        p:last-child{
          font-size: 12px;line-height: 12px;margin-top: 10px;
          width: 84px;
          height: 18px;
          line-height: 18px;
          text-align: center;
          background: linear-gradient(270deg,rgba(59,185,255,1) 0%,rgba(168,83,255,1) 100%);
          border-radius: 10px;
        }
      }
    }
    .bottom-bg{
      height: 10px;
      width: 100%;
      background-color: #fff;
      border-radius:8px 8px 0 0;
      position: absolute;
      left:0;
      bottom:0;
    }
  }
}

</style>
