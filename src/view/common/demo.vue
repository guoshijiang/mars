<template>
  <div class = 'pre ' >
    <!-- 顶部 -->
    <nav-header title='demo' back='true'></nav-header> 
    <!-- 内容 -->
    <div class="content demo"  style="height:calc(100% - 44px)">
		
    </div>    
  </div>
</template>

<script>
import { Actionsheet, Group, XSwitch, Toast } from 'vux'

export default {
  components: {
    Group,
    XSwitch,
	Toast,
	Actionsheet,
    navHeader:()=>import('@/components/navHeader')
  },
  data () {
    return {
		menus:{
			menu1:'充币',
			menu2:'提币',
			menu3:'交易'
		},
		show:false,
    }
  },
  mounted() {
    console.log('点击了',111)
  },
  methods: {
  }
}
</script>

<style lang="less">
.demo{
	overflow: scroll;
}
</style>