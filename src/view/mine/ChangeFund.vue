<template>
  <div class="pre" >
       <!-- 顶部 -->
      <nav-header title='修改资金密码' back='true'></nav-header> 
      <div class='content change' style="height:calc(100% - 44px)">
        <group title="新资金密码">
          <x-input type='password' placeholder='至少六位新密码'   v-model="query.assetPwd"></x-input>
        </group>
        <group title="确认资金密码">
          <x-input type='password' placeholder='请再次确认资金密码'   v-model="query.assetTwoPwd"></x-input>
        </group>

        <div class="box btns">
          <x-button  type="primary" @click.native='confirm()'>确定</x-button>
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
			assetPwd:'',
			assetTwoPwd:'',

		},
	  	error:'',
		show_err:false,
    }
  },
	components: {
		Group,XInput,XButton,Toast,
		navHeader:()=>import('@/components/navHeader')
	},
	computed: {
		...mapState(["userInfo","totalPrice"])
	},
	methods: {
		async confirm(){
			let err = []
			if(!this.query.assetPwd) err.push('请输入资金密码')
			if(this.query.assetPwd !== this.query.assetTwoPwd) err.push('两次密码不一致')
			if(err.length>0){
				this.error = err[0];
				this.show_err = true;
				return false;
			}
			try {
				let res = await api.APIPOSTMAN('POST','/mine/updateUserAssetPwdById',{userId :this.userInfo.id,assetPwd:this.query.assetPwd})
				if(res.data.code == 200){
					this.error = '修改成功';
					history.back()
				}else{
					this.error = res.data.message;
				}
				this.show_err = true;
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
.change {
  
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
  }
  .vux-x-input-zclwt{
    &::-webkit-input-placeholder{
      color:#d0d0d0 !important;
      font-size: 18px;
      font-weight: 400px;
    }
  }
}
</style>
