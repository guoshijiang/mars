<template>
  <div class="box">
    <tabbar>
      <!-- <tabbar-item :selected = 'active==index' v-for='(i,index) in list' :key='index' :link='i.link'>
        <img slot="icon" :src="i.img_a" v-if='active == index'>
        <img slot="icon" :src="i.img" v-else>
        <span slot="label">{{i.title}}</span>
      </tabbar-item> -->
      
      <tabbar-item :selected = 'active==0'  link='/home'>
        <img slot="icon" src="../assets/img/tab_1_a.png" v-if='active == 0'>
        <img slot="icon" src="../assets/img/tab_1.png" v-else>
        <span slot="label">资产</span>
      </tabbar-item>
       <tabbar-item :selected = 'active==1' link='/price'>
        <img slot="icon" src="../assets/img/tab_2_a.png" v-if='active == 1'>
        <img slot="icon" src="../assets/img/tab_2.png" v-else>
        <span slot="label">行情</span>
      </tabbar-item>
       <tabbar-item :selected = 'active==2'  link='/trade'>
        <img slot="icon" src="../assets/img/tab_3_a.png" v-if='active == 2'>
        <img slot="icon" src="../assets/img/tab_3.png" v-else>
        <span slot="label">交易</span>
      </tabbar-item>
       <tabbar-item :selected = 'active==3' link='/mine'>
        <img slot="icon" src="../assets/img/tab_4_a.png" v-if='active == 3'>
        <img slot="icon" src="../assets/img/tab_4.png" v-else>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>

  </div>
</template>

<script>
import { Tab, TabItem,Tabbar, TabbarItem} from 'vux'

export default {
  components: {
  Tab, TabItem,Tabbar, TabbarItem
  },
  data () {
    return {
      list:[
        {title:'资产',img:'src/assets/img/tab_1.png',img_a:'src/assets/img/tab_1_a.png',link:'/home'},
        {title:'行情',img:'src/assets/img/tab_2.png',img_a:'src/assets/img/tab_2_a.png',link:'/price'},
        {title:'交易',img:'src/assets/img/tab_3.png',img_a:'src/assets/img/tab_3_a.png',link:'/trade'},
        {title:'我的',img:'src/assets/img/tab_4.png',img_a:'src/assets/img/tab_4_a.png',link:'/mine'},
      ]
    }
  },
  props:{
    active:{
      type:Number,
      required:true,
    }
  },
  created(){

  },
  methods: {
    onItemClick(i){
      switch (i) {
        case 0:
          this.$router.push('/home')
          break;
        case 1:
          this.$router.push('/price')
          break;
        case 2:
          this.$router.push('/trade')
          break;
        case 3:
        this.$router.push({name:'Mine'})
          break;
        default:
          this.$router.push('/')
          break;
      }
    }
  },
}
</script>

<style lang='less'>
 .box{
   width: 100%;
   .vux-tab{
     border-top:1px solid #e3e3e3;
   }
   .weui-bar__item_on .weui-tabbar__label{
     color:#33C7FA !important;
   }
   .weui-tabbar__icon{
     width: 22px;
     height: 22px;
   }
   .weui-tabbar__label{
     line-height: 1.45;
   }
 }
</style>
