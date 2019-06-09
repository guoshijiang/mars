<template>
  <div class = 'pre ' style="height:calc(100% - 44px)">
    <!-- 顶部 -->
    <nav-header title='行情'></nav-header> 
    <!-- 内容 -->
    <div class="content price" style="height:calc(100% - 44px)">
		<div class='car'>
			<p class="sum_price">总资产</p>
			<p class="has_count"><span>{{totalPrice.BTC}}</span><span> BTC ≈ {{totalPrice.price}} CNY</span></p>
			<p class="caozuo clearfix"><span @click="setDb('put')">充币</span><span @click="setDb('pick')">提币</span></p>
		</div>
		<div class="safe">
			<div class='nei'>
				<ul class="clearfix">
					<li class="float_left img_bao">
					</li>
					<li class="float_left">
						<p>去中心化交易所</p>
						<p>给您资金提供安全保障</p>
					</li>
				</ul>
			</div>
		</div>
		<p class="hb_new_title">USDT交易对</p>
		<div class="title">
			<span>币种</span>
			<span>最新价</span>
			<span>涨幅</span>
		</div>
		<ul class="data_box" style='height:calc(100% - 341px)'>
			<li @click="goLine()" v-for="(i,index) in list" :key='index'>
				<div><p>{{i.coinName}}/USDT</p><p>24h量 1000</p></div>
				<div><p class="new_price">{{i.price | toRound(4)}}</p><p>{{i.openPrice}}</p></div>
				<div class="change_height"><a class="hb_btn_a" href='javascript:;'>{{i.gain}}%</a></div>
			</li>
		</ul>
    </div> 
	<toast v-model="show_err" position='middle' type="text" :text="error"></toast>
    <!-- 底部 -->
    <tab class="tab_footer" :active='1'></tab>   
  </div>
</template>

<script>
import { TransferDom, Actionsheet, Group, XSwitch, Toast } from 'vux'
import { mapState,mapMutations } from "vuex";
import api from '../until/help/api'
import { setInterval, clearInterval } from 'timers';
export default {
  components: {
    Actionsheet,
    Group,
    XSwitch,
    Toast,
    tab:()=>import('@/components/tab'),
    navHeader:()=>import('@/components/navHeader')
  },
  computed: {
	  ...mapState(["userInfo","totalPrice"])
  },
  directives: {
    TransferDom
  },
	data () {
		return {
			error:'',
			show_err:false,
			setTimeOut:null,   
			list:[],
		}
	},
	mounted() {
		this.getPriceDetail()
		this.setTimeOut = null;
		// console.log('222')
	},
	activated(){
		this.setTimeOut = null;
		clearInterval(this.setTimeOut);
		// this.getPriceDetail()
		this.initPrice();
		this.initTime()
	},
	methods: {
		setDb(type){
			// this.$router.push({name:'Findb',query:{type:type}})
			if(this.userInfo.id){
				this.$router.push({name:'Findb',query:{type:type}})
			}else{
				this.$router.push({name:'Login'})
			}
		},
		goLine(){
			this.$router.push({name:'Line'})
		},
		getPriceDetail(){
			try {
				api.APIPOSTMAN('POST','/market/coinOpenPrice').then(async (res)=>{

					if(res.data.code==200){
						this.list = Object.assign([],res.data.result)
						let data = await api.APIPOSTMAN('POST','/market/coinMarket',{});
						if(data.data.code == 200){
							this.list.map(i=>{
								let open = data.data.result.filter(d=>{
									if(i.coinName in d) {
										i.price = d[i.coinName];
										i.gain = parseInt(((i.price - i.openPrice) / i.openPrice) * 100 );
										return d;
									}
								})
								// i.price= open;
							})
						}
						this.list = Object.assign([],this.list)
					}else{
						this.error = res.data.message;
						this.show_err = true;
					}
				})
			} catch (error) {
				
			}
			
		},
		initTime(){
			this.setTimeOut = setInterval(()=>{
				this.initPrice();
			},6000)
		},
		async initPrice(){
			try {
				let data = await api.APIPOSTMAN('POST','/market/coinMarket',{});
				if(data.data.code == 200){
					this.list.map(i=>{
						let open = data.data.result.filter(d=>{
							if(i.coinName in d) {
								i.price = d[i.coinName];
								i.gain = parseInt(((i.price - i.openPrice) / i.openPrice) * 100 );
								return d;
							}
						})
					})
					this.list = Object.assign([],this.list)
				}
			} catch (error) {
				
			}
			
		}
	},
	deactivated() {
		
		clearInterval(this.setTimeOut);
		this.setTimeOut = null;
		console.log('销毁',this.setTimeOut)
		// console.log('移除组件时',this.setTimeOut)
	},
	beforeDestroy(){

		// this.setTimeOut = null;
		// clearInterval(this.setTimeOut);
		// console.log('销毁',this.setTimeOut)
	}
}
</script>

<style lang='less'>
	.price{
		padding: 13px 15px;
		overflow: hidden;
		.car{
			height: 140px;
			border-radius: 4px;
			background:linear-gradient(45deg,rgba(117,7,248,1) 0%,rgba(51,199,250,1) 100%);
			padding: 18px 15px;
			box-sizing: border-box;
			color:#fff;
			.sum_price{
				font-size: 14px;
				line-height: 14px;
				font-weight: 300;
				color:#33C7FA;
			}
			.has_count{
				font-size: 16px;
				line-height: 16px;
				margin-top: 10px;
				span:last-child{
					font-size: 16px;
					line-height: 16px;
					margin-left: 20px;
				}
			}
			.caozuo{
				margin-top: 27px;
				span{
					width:70px;
					height:30px;
					border-radius:15px;
					border:1px solid rgba(255,255,255,0.5);
					float: left;
					text-align: center;
					line-height: 30px;
					font-weight: 300;
					&:last-child{
						margin-left: 15px;
						
					}
				}
			}
		}
		.safe{
			height: 79px;
			background:linear-gradient(228deg,rgba(59,211,255,1) 0%,rgba(38,79,255,1) 100%) no-repeat;
			border-radius: 4px;
			margin-top: 15px;
			padding: 6px;
			box-sizing: border-box;
			// background-image: url('./../assets/img/safe_bg.png');

			background-size: cover;
			.nei{
				border:1px solid rgba(255,255,255,0.4);
				border-radius: 4px;
				height: 65px;
				color:rgba(255,255,255,0.9);
				ul{
					padding: 5px 28px;
					height: 56px;
					box-sizing: border-box;
					li{
						height: 50px;
					}
					.img_bao{
						background: url('./../assets/img/security.png') center center no-repeat;
						background-size: cover;
						margin-top: 4px;
					}
					li:first-child{
						width: 42px;
					}
					li:last-child{
						margin-left: 20px;
						p{
							font-size: 16px;
							line-height: 28px;
							font-weight: 300;
							letter-spacing: 3px;
						}
					}
					
				}
			}
		}
		.hb_new_title{
			font-size: 16px;
			line-height: 16px;
			margin-top: 24px;
			color:#333;
		}
		.title{
			background: #f5f5f5;
			height: 30px;
			display: flex;
			margin-top: 13px;
			line-height: 30px;
			span{flex: 1;text-align: center;color:#666666}
		}
		.data_box{
			overflow-y: scroll;
			// height: 300px;
			li{
				display: flex;
				height: 60px;
				padding: 13px 0;
				border-bottom: 1px solid #E6E6E6;
				box-sizing: border-box;
				div	{
					flex:1;text-align: center;
					p:first-child{
						font-size: 15px;
						line-height: 15px;
					}
					p:last-child{
						font-size: 12px;
						line-height: 12px;
						color:#999;
						margin-top: 6px;
					}
					.new_price{
						color:#FF5F56;
					}
					.hb_btn_a{
						height:25px;
						width: 70px;
						text-align: center;
						line-height: 25px;
						display: inline-block;
						background:rgba(255,95,86,1);
						border-radius:2px;
						color:#fff;
					}
					.hb_btn_j{
						background:rgba(19,209,166,1);
					}
				}
				.change_height{
					line-height: 33px;
				}
			}
		}
	}
</style>