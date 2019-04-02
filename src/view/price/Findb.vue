<template>
  <div class = 'pre ' >
    <!-- 顶部 -->
    <nav-header :title='query.title' back='true' right= '历史记录' right_link='History_type' :query = "query.type"></nav-header>  
    <!-- 内容 -->
    <div class="content find"  style="height:calc(100% - 44px)">
        <div class="select_start">
            <cell title='选择币种' :value='select_db' is-link @click.native="showDB = true"></cell>
        </div>
        <div class="history_list" v-if='this.select_db =="请选择"'>
            <flexbox class='flex-box' wrap="wrap">
                <flexbox-item ><div class="flex-demo" @click="selectDB('USDT')">点我</div></flexbox-item>
                <flexbox-item ><div class="flex-demo">BTC</div></flexbox-item>
                <flexbox-item ><div class="flex-demo">ETH</div></flexbox-item>
                <flexbox-item ><div class="flex-demo">RLP</div></flexbox-item>
                <flexbox-item ><div class="flex-demo">BQB</div></flexbox-item>
            </flexbox>

        </div>
        <!-- 充币逻辑 -->
        <div class='put' v-if='query.type=="put" && this.select_db!="请选择"'>
               <qrcode value="https://vux.li?x-page=demo_qrcode" type="img"></qrcode>
                <p class="qrcode_p">充币地址：<span>23HJhjJKHJDH76HJFHJFhjhkh34JKJFu urye</span> </p>
                <div class="box btns" v-if='this.select_db !="请选择"'>
                    <x-button  type="primary" @click.native='confirm()'>{{query.btn}}</x-button>
                </div>
        </div>

         <!-- 提币逻辑 -->
        <div class='pick' v-if='query.type=="pick" && this.select_db!="请选择"'>
            <div class="msg">
                <group title="提币地址">
                    <x-input type='text' placeholder='区块链地址'   v-model="reslove.address"></x-input>
                </group>
                <x-input title="地址备注" placeholder='填写备注' class="weui-vcode"></x-input>
                <x-input title="提币数量" placeholder='最低提币0.01个' class="weui-vcode"></x-input>
            </div>

            <div class="msg num_msg">
                <x-input title="网络手续费" placeholder='0.22' class="weui-vcode"></x-input>
                <x-input title="提币手续费" placeholder='0.345' class="weui-vcode"></x-input>
                <x-input title="到账数量" placeholder='0.34' class="weui-vcode"></x-input>
            </div>
            <div class="box btns" v-if='this.select_db !="请选择"'>
                <x-button  type="primary" @click.native='confirm()'>{{query.btn}}</x-button>
            </div>
        </div>
        
        <!-- 选择币种的popup的模态框 -->
         <div v-transfer-dom>
            <popup v-model="showDB" position="bottom" should-scroll-top-on-show>
                <div   class="popup-content">
                     <flexbox class='flex-box' wrap="wrap">
                        <flexbox-item ><div class="flex-demo" @click="selectDB('USDT')">点我</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">BTC</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">ETH</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">RLP</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">BQB</div></flexbox-item>
                    </flexbox>
                    <flexbox class='flex-box'>
                        <flexbox-item ><div class="flex-demo">USDT</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">BTC</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">USDT</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo"></div></flexbox-item>
                        <flexbox-item ><div class="flex-demo"></div></flexbox-item>
                        
                    </flexbox>
                      <flexbox class='flex-box' wrap="wrap">
                        <flexbox-item ><div class="flex-demo">USDT</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">BTC</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">ETH</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">RLP</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">BQB</div></flexbox-item>
                    </flexbox>
                    <flexbox class='flex-box'>
                        <flexbox-item ><div class="flex-demo">USDT</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">BTC</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">USDT</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo"></div></flexbox-item>
                        <flexbox-item ><div class="flex-demo"></div></flexbox-item>
                        
                    </flexbox>
                      <flexbox class='flex-box' wrap="wrap">
                        <flexbox-item ><div class="flex-demo">USDT</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">BTC</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">ETH</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">RLP</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">BQB</div></flexbox-item>
                    </flexbox>
                    <flexbox class='flex-box'>
                        <flexbox-item ><div class="flex-demo">USDT</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">BTC</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">USDT</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo"></div></flexbox-item>
                        <flexbox-item ><div class="flex-demo"></div></flexbox-item>
                        
                    </flexbox>
                      <flexbox class='flex-box' wrap="wrap">
                        <flexbox-item ><div class="flex-demo">USDT</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">BTC</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">ETH</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">RLP</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">BQB</div></flexbox-item>
                    </flexbox>
                    <flexbox class='flex-box'>
                        <flexbox-item ><div class="flex-demo">USDT</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">BTC</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo">USDT</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo"></div></flexbox-item>
                        <flexbox-item ><div class="flex-demo"></div></flexbox-item>
                        
                    </flexbox>
                </div>
                
            </popup>
        </div>
        <!-- 提示 -->
        <toast v-model="showToast" type="text" :text="toastText"></toast>
    </div>    
  </div>
</template>

<script>
import { Actionsheet,Cell,Flexbox,FlexboxItem, Group, Toast,XButton,XInput,TransferDom ,Popup,Qrcode} from 'vux'
export default {
    directives: {
        TransferDom
    },
  components: {
    Group,
	Toast,Popup,Qrcode,
	Actionsheet,Cell,Flexbox,FlexboxItem,XButton,XInput,
    navHeader:()=>import('@/components/navHeader')
  },
  data () {
    return {
        showDB:false,
        select_db:'请选择',
        model:{
            'pick':{title:'提币',type:'pick',btn:'确定提交'},
            'put':{title:'充币',type:'put',btn:'复制地址'}
        },
        showToast:false,
        toastText:'复制成功',
        query:{},
        reslove:{

        }
    }
  },
  mounted() {
   
    this.select_db = '请选择';
    this.query = Object.assign({},this.model[this.$route.query.type])
     console.log('点击了',this.$route,this.query)
  },
  methods: {
      selectDB(name){
          this.select_db = name;
          this.showDB = false;
      },
      confirm(){
          if(this.query.type=='put'){
              this.toastText = '复制成功',
              this.showToast = true;
              console.log('this.query',this.query)
          }else{
              this.toastText = '提交成功'
              this.showToast = true;
          }
          
      }
  }
}
</script>

<style lang="less">

@import '~vux/src/styles/close.less';
.find{
    overflow: scroll;
    box-sizing: border-box;
    background-color: #F0F1F2;
    .select_start{
        background-color: #fff;
    }
    .history_list{
         background-color: #fff;
         padding: 15px;
    }
    .weui-cell:before{
        border-top:0px solid #E6E6E6;
    }
    .weui-cell:after{
        content: " ";
        position: absolute;
        left: 0;
        top: 45px;
        right: 0;
        height: 1px;
        color: #D9D9D9;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        left: 15px;
        border-bottom:1px solid #E6E6E6;
    }
    .flex-box{
        margin-top: 20px;
        box-sizing: border-box;
    }
    .flex-demo {
        text-align: center;
        color: #666;
        background-color: #F5F6F7;
        border-radius: 4px;
        background-clip: padding-box;
    }
    .btns{
        padding: 25px 0;
        box-sizing: border-box;
        background-color: #fff;
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
    .popup-content{
        height: 100px;
    }
    .put{
        margin: 15px;
        padding: 19px;
        text-align: center;
        background-color: #fff;
        .qrcode_p{
            font-size:13px;
            font-weight:300;
            padding-top: 33px;
            color:rgba(51,51,51,1);
            line-height:18px;   
            text-align: left;
        }
    }
    .pick{
        margin-top: 10px;
        .msg{
            background-color: #fff;
            padding: 10px 13px;
            overflow: hidden;
             .weui-cells__title{
                font-size: 15px;
                color:#333;
                margin-bottom: 0px;
                margin-top: 0.77em;
            }
            .weui-cells:before{
                border-top:0px;
            }
            .weui-cell__hd{
                font-size: 15px;
            }
        }
        .num_msg{
            margin-top: 10px;
        }
        .btns{
            padding-left: 15px;
            padding-right: 15px;
        }
    }
    
}
</style>