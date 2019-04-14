<template>
	<div class="pre">
		<!-- 顶部 -->
		<nav-header title='修改手机号' back='true'></nav-header> 
		<div class='content custom' style="height:calc(100% - 44px)">
		<div>
			<group title="旧手机号">
				<x-input type='text'   v-model="query.old_phone" disabled></x-input>
			</group>
			<group title="验证码">
				<x-input  v-model = "query.old_code" :max='11' name="mobile" type='tel' placeholder="请输入验证码" keyboard="number" is-type="china-mobile"><x-button slot="right" mini @click.native='getCode("old_time")'>{{old_time!=60 ? old_time+'s重新获取':'发送验证码'}}</x-button></x-input>
			</group>
			</div>
			<div class='gap-box'></div>
			<div>
				<group title="国家">
					<x-input type='text'  v-model="query.guo"></x-input>
				</group>
				<group title="新手机号">
					<x-input type='tel' placeholder="请输入新的手机号码" :max='11'   v-model="query.new_phone"></x-input>
				</group>
				<group title="验证码">
					<x-input  v-model = "query.new_code" :max='11' name="mobile" type='tel' placeholder="请输入验证码" keyboard="number" is-type="china-mobile"><x-button slot="right" mini @click.native='getCode("new_time")'>{{new_time!=60 ? new_time+'s重新获取':'发送验证码'}}</x-button></x-input>
				</group>
			</div>
			<div class="box btns gap_b">
				<x-button  type="primary" @click.native='confrm()'>提交</x-button>
			</div>

		<div v-transfer-dom class="hb_popup_custom">
				
				<popup v-model="safe" height="220px" is-transparent>
						
					<div class="hb_popup_box">
						<div class="popup_title" @click="safe = false"><cell title="安全认证" value="关闭" ></cell></div>
						<group>
							<group title="绑定手机号为 18736472563">
								<x-input  v-model = "query.code" :max='11' name="mobile" type='tel' placeholder="请输入验证码" keyboard="number" is-type="china-mobile"><x-button slot="right" mini>发送验证码</x-button></x-input>
							</group>
						</group>
						<div style="padding:0px 15px;" class="btns">
							<x-button type="primary">确定</x-button>
						</div>
					</div>
				</popup>
			</div>

		</div> 
		<toast v-model="show_err" position='middle' type="text" :text="error"></toast>
	</div>
</template>

<script>
import { Group,XInput,XButton,Cell, Popup,Toast,TransferDom} from 'vux'
import api from '../../until/help/api'
import { mapState } from "vuex";
export default {
	name: 'help',
	directives: {
        TransferDom
    },
	data () {
		return {
			query:{
				old_phone:'',
				new_phone:'',
				guo:'中国',
				new_code:'',
				old_code:''
			},
			safe:false,
			old_time:60,
			new_time:60,

			error:'',
			show_err:false,
		}

	},
	
	computed: {
		...mapState(["userInfo"])
	},
	mounted() {
		this.query.old_phone = this.userInfo.phone;
	},
	components: {
		Group,XInput,XButton,Cell, Popup,Toast,
		navHeader:()=>import('@/components/navHeader')
	},
	methods: {
		confrm(){
			// this.safe = true 
			let err = [];
			if(this.query.new_phone) err.push('请输入新手机号')
			if(this.query.new_old) err.push('请输入新手机号验证码')
			if(this.query.old_phone) err.push('请输入旧手机号验证码')
			if(err.length>0){
				this.error=err[0];
				this.show_err = true;
			}
			api.APIPOSTMAN('POST','/mine/updateUserNewPhoneById',{"phone":obj.phone}).then(res=>{
				if(res.data.code!=200){
					this.error=res.data.message;
					this.show_err = true;
				}else {
					this.error='修改手机号成功';
					this.show_err = true;
					history.back()
				}
			})
		},
		getCode(type){
			if(type=='old_time'){
				// if(!this.query.old_phone){
				// 	this.error='请输入手机号'
				// 	this.show_err = true;
				// 	return false;
				// }
			}else{
				if(!this.query.new_phone){
					this.error='请输入新手机号'
					this.show_err = true;
					return false;
				}
			}
			
			if(this[type]<60){
				return false;
			}
			this[type+'_Interval'] = null;
			this[type] -=1
			try {
				this[type+'_Interval'] = setInterval(() => {
					this[type] -=1;
					if(this[type]== -1){
						clearInterval(this[type + '_Interval']);
						this[type + '_Interval'] = null;
						this[type] = 60;
					}
				}, 1000);
				let obj={}
				if(type=='old_time'){
					obj.url = '/mine/sendCodeByOldPhone',
					obj.phone = this.query.old_phone
				}else{
					obj.url = '/mine/sendCodeByNewPhone',
					obj.phone = this.query.new_phone
				}
				api.APIPOSTMAN('POST',obj.url,{"phone":obj.phone}).then(res=>{
					if(res.data.code!=200){
						this.error=res.data.message;
						this.show_err = true;
					}
				})
			} catch (error) {
				console.log(error)
			}
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
.gap{
  margin-top: 160px;
}
.custom {

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
      border-radius: 0;
      border-left:1px solid #ccc;
		}
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
	.vux-popup-show div:nth-child(1){
		padding-top: 3px !important;
		.weui-cell{
			padding: 3px 10px !important;
		}
	}
	.hb_popup_custom {
		.hb_popup_box {
			width: 95%;background-color:#fff;height:200px;margin:0 auto;border-radius:5px;padding-top:10px;
		}
		.weui-cells__title{
			color:#666;
			font-size: 12px;
			margin-top: 0;
		}
	}
  //自己的样式
  .gap-box{
    width: 100%;
    height: 10px;
    background-color:rgba(243,243,243,1);
  }
  .popup_title{border-bottom: 1px solid #ccc}
}
</style>
