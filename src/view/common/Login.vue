<template>
  <div class="pre" >
      <top-bar title='登录'></top-bar> 
      <div class='content' style="height:calc(100% - 44px)">
        <div class='hb-login gap'>
            <ul class="hb-login-tab clearfix">
              <li :class="{'active':login_type ==i.type}" v-for='(i,index) in login_list' :key='index' @click='tabChange(i)'>{{i.txt}}</li>
              <!-- <li :class="{'active':login_type =='emal'}" @click='tabChange("emal")'></li>
              <li :class="{'active':login_type =='tel'}" @click='tabChange("tel")'></li> -->
            </ul>
          <div class='hb-input' v-if="login_type =='phone'">
            <li><span>+86</span> <input type="tel" v-model='query.phone' maxlength="11" style="width:calce(100% - 77px)" placeholder="输入您的手机号"></li>
			
			<li><x-input  v-model = "query.code" type="number" placeholder="请填写6位数验证码" ><x-button slot="right" mini @click.native="getCode()">{{time!=60 ? time+'s重新获取':'发送验证码'}}</x-button></x-input></li>
            <li class="li-input"><input type="password" minlength="6" v-model='query.loginPwd' placeholder="请输入您的密码"></li>
          </div>
          <!-- <div class='hb-input' v-if="login_type =='emal'">
            <li><input type='email'  style="width:100%" placeholder="请输入您的邮箱"></li>
            <li class="li-input"><input type="password" maxlength="6" placeholder="请输入您的密码"></li>
          </div> -->
          <div class='hb-input' v-if="login_type =='tel'">
            <li><span>+86</span> <input type="tel" maxlength="11" style="width:calce(100% - 77px)" placeholder="输入您的手机号"></li>
			<li class="li-input"><input type="num" maxlength="6" placeholder="请输入您的验证码"></li>
          </div>
        </div>

        <div class="box btns">
          <x-button  type="primary" @click.native='goLogin()'>{{login_btn}}</x-button>
        </div>
         
          <toast v-model="show_err" position='middle' type="text" :text="error"></toast>
          <p class="hb-login-text" @click='goZhuce()'>还没有账号，免费注册</p>
      </div>
  </div>
</template>

<script>
import api from '../../until/help/api'
import factory from '../../until/factory/index'
import { XInput, XButton,Group,Toast } from 'vux'
import { mapState, mapMutations } from "vuex"; 
export default {
  name: 'Login',
	data () {
		return {
		query:{
			phone:"",
			code:'',
			loginPwd:''
		},
		login_list:[
			{type:'phone',btn:'登陆交易所',txt:'手机号'},
			// {type:'emal',btn:'登陆交易所',txt:'邮箱'},
			{type:'tel',btn:'手机号一键登录',txt:'手机号快捷'},
			
		],
		login_type:'phone',
		login_btn:'登陆交易所',
		
		error:'',
		show_err:false,
			time_Interval:null,
			time:60,
		}
	},
  components: {
    XInput,
    XButton,
    Toast,Group,
    topBar:()=>import('@/components/topbar')
  },
  methods: {
	  	...mapMutations(["setUser"]),
		tabChange(item){
			this.login_type = item.type;
			this.login_btn = item.btn;
		},
    	async goLogin(){
		
			if(!/^(1\d{10})$/.test(this.query.phone)){
				this.error ='手机号格式不对'
				this.show_err = true
				return false;
			}
			if(!this.query.code){
				this.error ='请填写验证码'
				this.show_err = true
				return false;
			}
			api.APIPOSTMAN('POST','/user/loginByPhone',this.query).then(res=>{
				if(res.data.code==200){
					factory.Storage.set('userInfo',res.data.result)
					this.setUser(res.data.result)
					this.$router.push({name:'Home'})
				}else{
					this.error = res.data.message;
					this.show_err = true;
				}
			})
	},
	getCode(){
		if(!this.query.phone){
			this.error='请输入手机号'
			this.show_err = true;
			return false;
		}
		if(this.time<60){
			return false;
		}
		this.time_Interval = null;
		this.time -=1
		try {
			this.time_Interval = setInterval(() => {
			this.time -=1;
			if(this.time== -1){
					clearInterval(this.time_Interval);
					this.time_Interval = null;
					this.time = 60;
				}
			}, 1000);
			api.APIPOSTMAN('POST','/user/sendLoginCode',{"phone":this.query.phone}).then(res=>{
				if(res.data.code!=200){
					this.error=res.data.message;
					this.show_err = true;
				}
			})
		} catch (error) {
			console.log(error)
		}
	},
    goZhuce(){
      this.$router.push('/zhuce')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
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
.hb-login{
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
  .hb-input{
    margin-top: 25px;
    li{
      border-top: 1px solid #d4d4d4;
      height: 48px;
      box-sizing: border-box;
      line-height: 48px;

      input{
        font-size: 16px;
        text-indent: 14px;
        &::-webkit-input-placeholder {
          color: #d4d4d4;
          text-indent: 14px;
          text-align: left;
          font-weight: 400px;
          font-size: 14px;
        }
      }
      &:first-child{
        
        span{
          width: 74px;
          display: inline-block;
          text-align: center;
          color:#333;
          border-right: 1px solid #d4d4d4;
          // border-radius: 5px;
        }
        input{overflow: hidden;}
      }
      &:last-child{
        height: 48px;
        line-height: 48px;
        border-bottom: 1px solid #d4d4d4;
        
	  }
	  .weui-cell{
		  padding: 0;
		  .weui-cell__ft .weui-btn{
			background-color:#fff;//获取验证码
			color:#33C7FA;
			border:0;
			&::after{
				border:0;
			}
		}
	  }
      
    }
    .li-input input{
          width: 100%;
          text-indent: 14px;
      }
  }
  

}
</style>
