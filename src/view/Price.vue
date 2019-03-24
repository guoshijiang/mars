<template>
  <div class = 'pre ' style="height:calc(100% - 44px)">
    <!-- 顶部 -->
    <nav-header title='行情'></nav-header> 
    <!-- 内容 -->
    <div class="content " style="height:calc(100% - 44px)">
        行情
    </div> 
    <!-- 底部 -->
    <tab class="tab_footer" :active='1'></tab>   
  </div>
</template>

<script>
import { TransferDom, Actionsheet, Group, XSwitch, Toast } from 'vux'

export default {
  components: {
    Actionsheet,
    Group,
    XSwitch,
    Toast,
    tab:()=>import('@/components/tab'),
    navHeader:()=>import('@/components/navHeader')
  },
  directives: {
    TransferDom
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>

</style>