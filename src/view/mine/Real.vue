<template>
  <div class="pre" >
       <!-- 顶部 -->
      <nav-header title='实名认证' back='true'></nav-header> 
      <div class='content real' style="height:calc(100% - 44px)">
        <group title="姓名">
          <x-input type='text' placeholder='请输入您的姓名'   v-model="query.name"></x-input>
        </group>
        <group title="国家/地区">
          <x-input type='text' placeholder='请输入您的姓名'   v-model="query.name"></x-input>
        </group>
        <group title="证件类型">
          <x-input type='text' placeholder='身份证'   v-model="query.name"></x-input>
        </group>
        <group title="证件号码">
          <x-input type='text' placeholder='请输入证件号码'   v-model="query.name"></x-input>
        </group>
      </div>
  </div>
</template>

<script>
import { Group,XInput } from 'vux'
import api from '../../until/help/api'
export default {
  name: 'help',
  data () {
    return {
      query:{
        name:'',

      }
    }
  },
  components: {
    Group,XInput,
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
.real {
  .weui-cells__title{
    font-size: 12px;
    color:#666;
    margin-bottom: 0px;
    margin-top: 1.77em;
  }
  .weui-cells::before{
    border-top:0px;
  }
  .weui-cells:after{
    left:10px;
    border-bottom: 1px solid #D9D9D9
  }
  .vux-x-input-zclwt{
    &::-webkit-input-placeholder{
      color:#d0d0d0;
      font-size: 18px;
      font-weight: 400px;
    }
  }
}
</style>
