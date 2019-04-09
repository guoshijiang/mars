<template>
  <div class="pre" style="height:calc(100% - 44px)">
		  <top-bar title='注册'></top-bar> 
      <div class='content Zhuce'>
				<div class='hb-register gap'>
            <ul class="hb-register-tab clearfix">
              <li :class="{'active':register_type ==i.type}" v-for='(i,index) in register_list' :key='index' @click='tabChange(i)'>{{i.txt}}</li>
              <!-- <li :class="{'active':login_type =='emal'}" @click='tabChange("emal")'></li>
              <li :class="{'active':login_type =='tel'}" @click='tabChange("tel")'></li> -->
            </ul>
          	<group class='register-input' v-if='register_type=="phone"'>
              	<x-input  v-model = "query.phone" :max='11' name="mobile" type='tel' placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"><x-button slot="right" mini @click.native="getCode()">{{time? time+'s重新获取':'发送验证码'}}</x-button></x-input>
             	<x-input  v-model = "query.code" type="number" placeholder="请填写6位数验证码" ></x-input>
              	<x-input  v-model = "query.loginPwd" type='password' placeholder="至少6位任意字符" :min="6" ></x-input>
          	</group>
			<group class='register-input' v-if='register_type=="emal"'>
                <x-input  v-model = "query.email" type="email" name="email" placeholder="请输入邮箱地址" is-type="email"></x-input>
              	<x-input  v-model = "query.loginPwd"  placeholder="至少6位任意字符" :min="6" ></x-input>
          	</group>
				</div>
			<div class="box btns">
				<x-button  type="primary" @click.native='register()'>下一步</x-button>
			</div>
          <p class="hb-login-text" @click='goLogin()'>已有账号？去登录</p>
		  <toast v-model="show_err" position='middle' type="text" :text="err_txt"></toast>
      </div>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell,Toast } from 'vux'
import api from '../../until/help/api'

export default {
  name: 'Zhuce',
  components: {
    XInput,
    XButton,
    Group,Cell,Toast,
	topBar:()=>import('@/components/topbar')
  },
	data () {
		return {
			query:{
				// email:'',
				phone:'',
				loginPwd:'',
				code:'',
			},
			//祖册选择
			register_list:[
				{type:'phone',btn:'注册',txt:'手机号'},
			// {type:'emal',btn:'注册',txt:'邮箱'},
			],
			register_type:'phone',
			register_btn:'手机号',

			show_err:false,
			err_txt:'',
			time_Interval:null,
			time:0,
		}
	},
	methods: {
		tabChange(item){
			this.register_type = item.type;
			this.register_btn = item.btn;
		},
		goLogin(){
			this.$router.push({name:'Login'})
		},
		//获取验证码
		getCode(){
			if(!this.query.phone){
				this.err_txt='请输入手机号'
				this.show_err = true;
				return false;
			}
			if(this.time>0){
				return false;
			}
			this.time_Interval = null;
			this.time +=1
			this.time_Interval = setInterval(() => {
				this.time +=1;
				if(this.time>60){
					clearInterval(this.time_Interval);
					this.time_Interval = null;
					this.time = 0;
				}
			}, 1000);
			api.getCode('',{phone:this.query.phone}).then((res)=>{
				console.log(res)
				if(res.data.code==200){

				}else {
					this.err_txt=res.data.message;
					this.show_err = true;
				}
			})
		},
		//注册
		register(){
			
			console.log(this.query)
			let err = [];
			if(!this.query.phone) err.push('请输入手机号')
			if(!this.query.code) err.push('请输入验证码')
			if(!this.query.loginPwd) err.push('请设置密码')
			if(err.lenght>0){
				this.err_txt = err[0];
				this.show_err = true;
				return false;
			}
			this.$router.push({name:'setPassword',params:this.query})
			
		}
	},
	destroyed(){
		this.time_Interval=null;
		this.time = 0
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
.Zhuce{
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
		background-color:#fff;//获取验证码
		color:#33C7FA;
		border:0;
		&::after{
			border:0;
		}
	}
	.weui-btn_default:not(.weui-btn_disabled):active{
		background-color:#fff;
		color:#33C7FA;
	}
	.hb-login-text{
		width:100%;
		height:14px;
		font-size:14px;
		font-family:PingFang-SC-Medium;
		font-weight:400;
		color:rgba(0,122,255,1);
		line-height:14px;
		text-align: center;
		position: fixed;
		bottom: 30px;
		}
	}
	.gap{
		margin-top: 127px;
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

	.hb-register{
		padding: 0 27px;
		ul li{
			list-style: none;
			float: left;
			font-size: 16px;
			color:#666;
			&:nth-child(n + 2){
				margin-left: 16px;
			}
			&.active{
			color:rgba(0,122,255,1);
		}
	}
}
</style>
