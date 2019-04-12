<template>
  <div class='pre' style="height:calc(100% - 44px)">
    <!-- 顶部 -->
    <nav-header title='资产'></nav-header> 
    <!-- 内容 -->
 	<div class="content home" style="height:calc(100% - 44px)">
		<div class='car'>
			<p class="sum_price">总资产</p>
			<p class="has_count"><span>{{totalPrice.price}}</span><span> USDT≈ {{totalPrice.BTC}} CNY</span></p>
			<p class="price_name"><span>资产折合 USDT</span>
				<!-- <span> BTC = 0 CNY</span> -->
			</p>
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
	
		<ul class="data_box" style='height:calc(100% - 303px)' v-if='list.length>0 && isLoad'>
			
				<div @click="goDetail(i)" v-for='(i,index) in list ' :key='index' > 
					<!-- <keep-alive>  -->
						<p class="clearfix li-title"><span v-if='i.detail' class="float_left">{{i.detail.coinName}}</span>	<span class="float_right">></span></p>
						<li>
							<div class='flex'><p>可用</p><p>{{i.usableBalance}}</p></div>
							<div class='flex'><p >冻结</p><p>{{i.freezeBalance}}</p></div>
							<div class='flex'><p>折合(CNY)</p><p class="hb_p_num">≈{{i.price}}</p></div>
						</li>
					<!-- </keep-alive>	 -->
				</div>
			
		</ul>
		<div class="loading" v-if='list.length==0 && !isLoad'>
			加载中...
		</div>
    </div> 
	<toast v-model="show_err" position='middle' type="text" :text="error"></toast>
    <!-- 底部 -->
    <tab class="tab_footer" :active='0'></tab>

  </div>
</template>

<script>
import { Group, Cell,Toast } from 'vux'
import { Actionsheet } from 'vux'
import api from '../until/help/api'
import { mapState,mapMutations } from "vuex";
export default {
  components: {
    Group,
    Cell,
    Actionsheet,Toast,
    tab:()=>import('@/components/tab'),
    navHeader:()=>import('@/components/navHeader')
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      	msg: 'Hello World!',
	  	val:'ww',
	  	error:'',
		show_err:false,
		list:[],
		isLoad:false,
    }
  },
  computed: {
	  ...mapState(["userInfo","totalPrice"])
  },
  created() {
  },
  mounted() {
	  if(this.list.length==0){
		  this.getPriceDetail()
	  }
  },
  activated() {
	  if(this.list.length>0){
		  this.asyncPrice();
	  }
  },
  
  methods: {
	  ...mapMutations(['setTotalPrice']),
    goDetail(i){
      this.$router.push({name:'Detail',params:{hb:i}})
	},
	setDb(type){
		this.$router.push({name:'Findb',query:{type:type}})
	},
	//获取价格详情
	 async getPriceDetail(){
		this.isLoad = false;//findAssetByUserAndCoinTypeId {userId :this.userInfo.id,coinTypeId:i.coinTypeId,status:1}
		let res = await api.APIPOSTMAN('POST','/market/findAllMarket');
	
		let hb = await api.APIPOSTMAN('POST','/asset/findAssetByUserId',{userId:this.userInfo.id,status:'1'})
			if(hb.data.code==200){
				this.list = hb.data.result.list;
				this.asyncPrice()
			}else{
				this.error = res.data.message;
				this.show_err = true;
				this.isLoad = false;
			}
	},
	async asyncPrice(){
		let res = await api.APIPOSTMAN('POST','/market/findAllMarket');
		let totalPrice={
			price: 0,
			BTC:0,
			btc_price:0,
		}	
		if(res.data.code == 200){
			this.list.map( (i)=>{
				let hb_price = res.data.result.filter(item =>{
					if(item.coinId == i.coinTypeId){
						return item
					}
				})[0];
				let pr = i.usableBalance * hb_price.sell;
				i.price = pr.toFixed(2)
				i.detail = hb_price || {};
				totalPrice.price +=(i.price-0);
				if(i.detail.coinName=='BTC'){
					totalPrice.btc_price = Number(i.price).toFixed(2);
				}
			})
		}else{

		}
				
		totalPrice.BTC = (totalPrice.price/totalPrice.btc_price).toFixed(2);
		this.isLoad = true;
		this.setTotalPrice(totalPrice)
	}
  },
}
</script>

<style lang="less">
	.home{
		padding: 13px 15px;
		overflow: hidden;
		.loading{
			text-align: center;
			height: 200px;
			line-height: 200px;
			color:#909090;
		}
		.car{
			height: 155px;
			border-radius: 4px;
			background:linear-gradient(45deg,rgba(117,7,248,1) 0%,rgba(51,199,250,1) 100%);
			padding: 17px 15px;
			box-sizing: border-box;
			color:#fff;
			margin-bottom: 20px;
			.sum_price{
				font-size: 14px;
				line-height: 14px;
				font-weight: 300;
				color:#33C7FA;
			}
			.has_count{
				font-size: 24px;
				line-height: 24px;
				margin-top: 14px;
				span{
					display: inline-block;
					&:first-child{
						width: 40%;
					}
					&:last-child{
						width: 60%;
						font-size: 18px;
						line-height: 18px;
					}
				}
			}
			.price_name{
					font-size: 12px;
					font-weight: 300;
					color:#fff;
					line-height: 12px;
					margin-top: 5px;
					span{
						display: inline-block;
						width: 50%;
					
					}
				}
			
			.caozuo{
				margin-top: 21px;
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

			// background-size: cover;
			margin-bottom: 24px;
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
		.data_box{
			overflow-y: scroll;
			box-sizing: border-box;
			div:nth-child(n + 2) .li-title{
				margin-top:24px;
			}
			.li-title{
				.float_left{
					color:#333;
					font-size: 16px;
					line-height: 16px;
				}
				.float_right{color:#999999;line-height: 16px;margin-right: 8px;}
			}
			
			li{
				display: flex;
				height: 60px;
				padding: 13px 0;
				border-bottom: 1px solid #E6E6E6;
				box-sizing: border-box;
				.flex	{
					flex:1;text-align: center;
					p:first-child{
						font-size: 12px;
						line-height: 12px;
						color:#999999;
					}
					p:last-child{
						font-size: 14px;
						line-height: 14px;
						color:#999;
						margin-top: 6px;
						color:#333;
					}
					p.hb_p_num{
						height:14px;
						font-size:14px;
						// font-weight:bold;
						color:#FF5F56;
						line-height:14px;
					}
					.hb_btn_j{
						background:rgba(19,209,166,1);
					}
					&:first-child{
						text-align: left;
					}
					&:last-child{
						text-align: right;
						margin-right: 8px;
					}
				}
				.change_height{
					line-height: 33px;
				}
			}
		}
	}
</style>
