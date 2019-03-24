<template>
  <div class="pre" style="height:calc(100% - 44px)">
		  <!-- <top-bar title='注册'></top-bar>  -->
          <nav-header title='设置资金密码'  back='true'></nav-header>
      <div class='content set_change'>
		   <div class='hb-register gap'>
				<group class='register-input'>
            <x-input  v-model = "query.password"  placeholder="请设置资金密码" :min="6" ></x-input>
        </group>
				</div>
			<div class="box btns">
				<x-button  type="primary" @click.native='login()'>完成注册并登陆</x-button>
			</div>
      </div>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from 'vux'
export default {
  name: 'Zhuce',
  components: {
    XInput,
    XButton,
    Group,
		Cell,
        topBar:()=>import('@/components/topbar'),
        navHeader:()=>import('@/components/navHeader')
  },
  data () {
    return {
		query:{
			password:'',
		}
    }
  },
  methods: {

	  login(){
		  this.$router.push({name:'Home'})
	  },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
.set_change{
	.gap{
		margin-top: 127px;
	}
	.weui-cell:before{
			left:0px;
	}
	.weui-input{
		&::-webkit-input-placeholder {
          color: #d4d4d4;
					font-size: 14px;
					font-weight: 400;
        }
	}

	.weui-cell__ft .weui-btn{
		background-color:#fff;
		color:#33C7FA;
		border:0;
		&::after{
			border:0;
		}
	}

}
// 覆盖原有组件的样式
.btns{
	padding: 0 23px;
	margin-top: 30px;
	box-sizing: border-box;
	.weui-btn_primary{
		background:linear-gradient(45deg,rgba(28,123,255,1) 0%,rgba(51,199,250,1) 100%);
	}
	.weui-btn{
		font-size: 17px;
		line-height: 2.653333;
		font-weight:500;
		border-radius: 4px;
	}
}
.hb-register{
  padding: 0 27px;
}
</style>
