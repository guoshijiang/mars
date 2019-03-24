<template>
  <div class = 'pre ' style="height:calc(100% - 44px)">
    <!-- 顶部 -->
    <nav-header title='详细' back='true'></nav-header> 
    <!-- 内容 -->
    <div class="content ">
        情
    </div>    
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