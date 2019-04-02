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
				<x-input  v-model = "query.code" :max='11' name="mobile" type='tel' placeholder="请输入验证码" keyboard="number" is-type="china-mobile"><x-button slot="right" mini>发送验证码</x-button></x-input>
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
				<x-input  v-model = "query.code" :max='11' name="mobile" type='tel' placeholder="请输入验证码" keyboard="number" is-type="china-mobile"><x-button slot="right" mini>发送验证码</x-button></x-input>
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
  </div>
</template>

<script>
import { Group,XInput,XButton,Cell, Popup,} from 'vux'
import api from '../../until/help/api'
export default {
  name: 'help',
  data () {
    return {
      query:{
        old_phone:13647837622,
        guo:'中国'
      },
      safe:false
    }
  },
  components: {
    Group,XInput,XButton,Cell, Popup,
    navHeader:()=>import('@/components/navHeader')
  },
  methods: {
    confrm(){
      this.safe = true 
    }
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
