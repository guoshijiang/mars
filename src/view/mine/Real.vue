<template>
  <div class="pre" >
       <!-- 顶部 -->
      <nav-header title='实名认证' back='true'></nav-header> 
      <div class='content real' style="height:calc(100% - 44px)">
        <group title="姓名">
          <x-input type='text' placeholder='请输入您的姓名' v-model="query.realName"></x-input>
        </group>
        <group title="国家/地区">
          <x-input type='text' disabled placeholder='请输入您国籍' v-model="query.nation"></x-input>
        </group>
        <group title="证件类型">
          <x-input type='text' disabled placeholder='身份证' v-model="query.cardType"></x-input>
        </group>
        <group title="证件号码">
          <x-input type='tel' placeholder='请输入证件号码' v-model="query.cardNumber"></x-input>
        </group>
      	<div class="box btns gap_b" >
          <x-button  type="primary" @click.native='confrm()'>提交</x-button>
        </div>
		<toast v-model="show_err" position='middle' type="text" :text="error"></toast>
      </div>
  </div>
</template>

<script>
import { Group,XInput,XButton,Toast } from 'vux'
import api from '../../until/help/api'
import { mapState,mapMutations } from "vuex";
export default {
	name: 'help',
	data () {
		return {
			query:{
				cardType:'身份证',
				realName:'',
				nation:'中国',
				cardNumber:''
			},
			isReal:false,
			error:'',
			show_err:false,
		}
	},
	mounted() {
		this.init()
	},
	components: {
		Group,XInput,XButton,Toast,
		navHeader:()=>import('@/components/navHeader')
	},
	computed: {
		...mapState(["userInfo","totalPrice"])
	},
	methods: {
		async init(){
			try {
				let res = await api.APIPOSTMAN('POST','/mine/findUserAuthInfo',{userId :this.userInfo.id})
				if(res.data.code == 200){
					console.log(res)
					if(res.data.result){
						this.query = Object.assign({},res.data.result)
						this.isReal = true
					}else this.isReal = false;
				}else{
					this.error = res.data.message;
					this.show_err = true;
				}
				
			} catch (error) {
				
			}
		},
		async confrm(){
			let err = []
			if(!this.query.realName) err.push('请输入姓名')
			if(!this.query.cardNumber) err.push('请输入身份证号码')
			if(err.length>0){
				this.error=err[0];
				this.show_err = true;
				return false;
			}

			try {
				let res = await api.APIPOSTMAN('POST','/mine/saveUserAuthInfo',{userId :this.userInfo.id,...this.query})
				if(res.data.code == 200){
					console.log(res)
					if(res.data.result){
						this.query = Object.assign({},res.data.result)
						this.isReal = true
					}else this.isReal = false;
				}else{
					this.error = res.data.message;
					this.show_err = true;
				}
				
			} catch (error) {
				
			}
		}
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
