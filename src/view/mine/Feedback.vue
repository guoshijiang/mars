<template>
  <div class="pre" >
       <!-- 顶部 -->
      <nav-header title='反馈' back='true'></nav-header> 
      <div class='content feedback' style="height:calc(100% - 44px)">
          <group title="您的称呼">
            <x-input type='text' placeholder='填写您的称呼'   v-model="query.backUser"></x-input>
          </group>
          <group title="您的手机（手机必填）">
            <x-input type='tel' placeholder='填写联系的手机号' :max='11'   v-model="query.phone"></x-input>
          </group>
          <group title="您的邮箱（邮箱必填）">
            <x-input type='email' placeholder='填写联系的邮箱'   v-model="query.email"></x-input>
          </group>
          
          <group title="问题类型">
            <x-input type='text' placeholder='请输入类型'   v-model="query.typeId"></x-input>
          </group>
          <group title="您想对我说什么，请在下面告诉我们">
            <x-textarea :max="200" name="description" v-model="query.backContent"  placeholder="填写您想说的"></x-textarea>
          </group>
           <div class="box btns gap_b">
            <x-button  type="primary" @click.native='confrm()'>提交</x-button>
          </div>
          <toast v-model="show_err" position='middle' type="text" :text="error"></toast>
      </div>
  </div>
</template>

<script>
import { Group,XInput,XTextarea,XButton,Toast} from 'vux'
import api from '../../until/help/api'
import { mapState,mapMutations } from "vuex";
export default {
  name: 'help',
  data () {
    return {
      	query:{},
      	error:'',
		show_err:false,
    }
  },
  computed: {
		...mapState(["userInfo","totalPrice"])
	},
  components: {
    Group,XInput,XTextarea,XButton,Toast,
    navHeader:()=>import('@/components/navHeader')
  },
  methods: {
      async confrm(){
        let err = []
        if(!this.query.backUser) err.push('请输入您的称呼')
        if(!this.query.phone) err.push('请输入您的联系手机号')
        if(!this.query.email) err.push('请输入您的联系邮箱')
        if(!this.query.typeId) err.push('请选择您问题的类型')
        if(!this.query.backContent) err.push('请填写您的问题')
        if(err.length>0){
          	this.error=err[0];
          	this.show_err = true;
          	return false;
        }

        try {
          	let res = await api.APIPOSTMAN('POST','/feedBack/saveFeedBack',{userId :this.userInfo.id,...this.query})
          	if(res.data.code == 200){
              	// this.query = Object.assign({},res.data.result)
                // this.isReal = true
                this.error = '提交成功反馈';
            	this.show_err = true;
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

.feedback {
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
    // border-bottom: 1px solid #D9D9D9
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
  .vux-x-input-zclwt{
    &::-webkit-input-placeholder{
      color:#d0d0d0;
      font-size: 15px;
      font-weight: 400px;
    }
  }
}
</style>
