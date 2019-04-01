<template>
  <div class='pre'>
    <!-- 顶部 -->
    <!-- <nav-header title='我的'></nav-header>  -->
    <!-- 内容 -->
    <div class="content mine " style="height:calc(100% - 44px)">
      <div class="top-car">
          <ul class="clearfix">
            <li class="bg_img" @click="show=true"></li>
            <li><p>苏镇</p><p>ID:2874348</p></li>
          </ul>
          <div class="bottom-bg">
          </div>
      </div>
      <group>
        <cell :title="item.title" is-link v-for='(item,index) in list' :key='index' :link='item.link'>
          <!-- <img slot="icon" width="20" style="display:block;margin-right:5px;" :src="item.url"> -->
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/img/shi.png" v-if='index==0'>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/img/change_pass.png" v-if='index==1'>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/img/change_zijin.png" v-if='index==2'>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/img/kefu.png" v-if='index==3'>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/img/help.png" v-if='index==4'>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/img/kefu.png" v-if='index==5'>
        </cell>
      </group>
    </div> 
    <!-- 底部 -->
    <tab class="tab_footer" :active='3'></tab>
    <actionsheet v-model="show" :menus="menus" @on-click-menu="goOut" show-cancel></actionsheet>
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
        {title:'修改资金密码',img:'',link:'changeFund',url:'src/assets/img/change_zijin.png'},
        {title:'修改手机号',img:'',link:'/custom',url:'src/assets/img/kefu.png'},
        {title:'帮助中心',img:'',link:'/help',url:'src/assets/img/help.png'},
        {title:'反馈',img:'',link:'/feedback',url:'src/assets/img/kefu.png'},
      ],
      menus:{
        menu1:'退出登陆',
	  },
	  show:false,
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
    background:url(../assets/img/top_car_bg.png) center  no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;
    font-size: 0;
    ul{
      height: 70px;
      margin-top: 78px;
      .bg_img{
        background-image:url('../assets/img/Bitmap.png')
      }
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
        color:#fff;
        p{font-size: 26px;line-height: 26px;margin-top: 10px;}
        p:last-child{
          font-size: 12px;
          margin-top: 10px;
          min-width: 84px;
          height: 18px;
          line-height: 21px;
          text-align: center;
          background: linear-gradient(270deg,rgba(59,185,255,1) 0%,rgba(168,83,255,1) 100%);
          border-radius: 10px;
        }
      }
    }
    .bottom-bg{
      height: 11px;
      width: 100%;
      background-color: #fff;
      border-radius:8px 8px 0 0;
      position: absolute;
      left:0;
      bottom:-1px;
    }
  }
}

</style>
