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
              	<x-input  v-model = "query.tel" :max='11' name="mobile" type='tel' placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"><x-button slot="right" mini>发送验证码</x-button></x-input>
             		<x-input  v-model = "query.code" type="number" placeholder="请填写4位数验证码" ></x-input>
              	<x-input  v-model = "query.password" placeholder="至少6位任意字符" :min="6" ></x-input>
          	</group>
						<group class='register-input' v-if='register_type=="emal"'>
                <x-input  v-model = "query.email" type="email" name="email" placeholder="请输入邮箱地址" is-type="email"></x-input>
              	<x-input  v-model = "query.password"  placeholder="至少6位任意字符" :min="6" ></x-input>
          	</group>
				</div>
			<div class="box btns">
				<x-button  type="primary" @click.native='register()'>注册</x-button>
			</div>
          <p class="hb-login-text" @click='goLogin()'>已有账号？去登录</p>
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
		topBar:()=>import('@/components/topbar')
  },
  data () {
    return {
		query:{
			email:'',
			phone:'',
			password:'',
			// code:'',
		},
		register_list:[
        {type:'phone',btn:'注册',txt:'手机号'},
        {type:'emal',btn:'注册',txt:'邮箱'},
        
			],
			register_type:'phone',
			register_btn:'手机号'
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
	  register(){
			console.log(this.query)
			this.$router.push({name:'setPassword'})
	  }
  },
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
		background-color:#fff;
		color:#33C7FA;
		border:0;
		&::after{
			border:0;
		}
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
