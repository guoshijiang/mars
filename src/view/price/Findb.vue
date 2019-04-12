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
                <flexbox-item v-for='(i,index) in db_list ' :key='index' v-if='index<5'><div class="flex-demo" @click="selectDB(i)" >{{i.coinTypeItem}}</div></flexbox-item>
                <!-- <flexbox-item ><div class="flex-demo">BTC</div></flexbox-item>
                <flexbox-item ><div class="flex-demo">ETH</div></flexbox-item>
                <flexbox-item ><div class="flex-demo">RLP</div></flexbox-item>
                <flexbox-item ><div class="flex-demo">BQB</div></flexbox-item> -->
            </flexbox>

        </div>
        <!-- 充币逻辑 -->
        <div class='put' v-if='query.type=="put" && this.select_db!="请选择"'>
               <qrcode :value="address" type="img"></qrcode>
                <p class="qrcode_p">充币地址：<span>{{address}}</span> </p>
                <div class="box btns" v-if='this.select_db !="请选择"'>
                    <x-button  type="primary" @click.native='confirm()'>{{query.btn}}</x-button>
                </div>
        </div>

         <!-- 提币逻辑 -->
        <div class='pick' v-if='query.type=="pick" && this.select_db!="请选择"'>
            <div class="msg">
                <group title="提币地址">
                    <x-input type='text' placeholder='区块链地址'   v-model="reslove.depositAddress">
                        <img slot="right-full-height" src="./../../assets/img/saoma.png">
                    </x-input>
                </group>
                <x-input title="地址备注" placeholder='填写备注' v-model='reslove.depositTag' class="weui-vcode"></x-input>
                <x-input title="提币数量" type='number' v-model='reslove.depositCoinNum' placeholder='最低提币0.01个' class="weui-vcode"></x-input>
            </div>

            <div class="msg num_msg">
                <!-- <x-input title="网络手续费" placeholder='0.22' class="weui-vcode"></x-input> -->
                <x-input title="提币手续费" disabled=true class="weui-vcode" v-model="reslove.depositFee"></x-input>
                <x-input title="到账数量" placeholder='0.34' class="weui-vcode"></x-input>
            </div>
            <div class="box btns" v-if='this.select_db !="请选择"'>
                <x-button  type="primary" @click.native='confirm()'>{{query.btn}}</x-button>
            </div>
        </div>
        
        <!-- 选择币种的popup的模态框 -->
         <div v-transfer-dom class='db'>
            <popup v-model="showDB" position="bottom" should-scroll-top-on-show>
                <div class="popup-content">
                    <flexbox class='flex-box' wrap="wrap">
                        <flexbox-item v-for='(i,index) in db_list ' :key='index' v-if='index<5'><div class="flex-demo" @click="selectDB(i)">{{i.coinTypeItem}}</div></flexbox-item>
                        
                    </flexbox>
                    <flexbox class='flex-box' wrap="wrap">
                        <flexbox-item v-for='(i,index) in db_list ' :key='index' v-if='index>4 && index<9'><div class="flex-demo" @click="selectDB(i)">{{i.coinTypeItem}}</div></flexbox-item>
                        <flexbox-item ><div class="flex-demo"></div></flexbox-item>
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
import api from '../../until/help/api'
import { mapState,mapMutations } from "vuex";
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
    computed: {
        ...mapState(["userInfo"])
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
            reslove:{//提币条件
                depositFee:'',
                coinTypeId:'',
                depositAddress:'',
                depositCoinNum:'',
                depositStatus:0,
                depositTag:'',
                status:0,
                userId:'',
                coinName:''
            },
            db_list:[],
            address:'',
        }
    },
    mounted() {
        this.select_db = '请选择';
        this.address = '';
        this.query = Object.assign({},this.model[this.$route.query.type])
        this.findBD()
    },
  methods: {
        async selectDB(i){
            this.select_db = i.coinTypeItem;
            try {
                let res = await api.APIPOSTMAN('POST','/asset/findAssetByUserAndCoinTypeId',{userId :this.userInfo.id,coinTypeId:i.id,status:1})
                if(res.data.code==200){
                    this.address = res.data.result.coinAddress;
                    this.showDB = false;
                }
                if(this.query.type=="pick"){
                    let detail = await api.APIPOSTMAN('POST','/deposit/findCoinFee',{coinName:this.select_db});
                    if(detail.data.code==200){
                        this.reslove.depositFee = detail.data.result.highFee;
                        this.reslove.coinTypeId = res.data.result.coinTypeId;
                        this.reslove.userId = this.userInfo.id;
                        this.reslove.coinName = this.select_db;
                    }else{
                        this.select_db = '请选择';
                        this.showToast = true;
                        this.toastText = detail.data.message;
                    }   
                    console.log('res 提币',detail)
                }
                
            } catch (error) {
                console.log(error)
            }
        },
        async confirm(){
            if(this.query.type=='put'){
                this.toastText = '复制成功',
                this.showToast = true;
                console.log('this.query',this.query)
            }else{
                try {
                    let err = [];
                    if(!this.reslove.depositAddress) err.push('请填写提币地址')
                    if(!this.reslove.depositCoinNum) err.push('请填写提币数量')
                    else if(this.reslove.depositCoinNum<0.01) err.push('提币数量不少于0.01个')
                    
                    if(!this.reslove.depositTag) err.push('请填写提币备注')
                    if(err.length>0){
                        this.toastText = err[0]
                        this.showToast = true;
                        return false;
                    }
                    let res = await api.APIPOSTMAN('POST','/deposit/addDeposit',this.reslove)
                    if(res.data.code==200){
                        this.toastText = '提交成功'
                        this.showToast = true;
                    }
                } catch (error) {
                    this.toastText = '提交失败'
                    this.showToast = true;
                }
                
            }
        },
        async findBD(){
            try {
                let res = await api.APIPOSTMAN('POST','/coinitem/findAll',{});
                console.log(res)
                if(res.data.code==200){
                    this.db_list = res.data.result;
                }

            } catch (error) {
                
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
    .vux-x-input-right-full img{
        height: 20px;
        margin-top: 12px;
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