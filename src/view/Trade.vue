<template>
  <div class = 'pre' style="height:calc(100% - 44px)">
    <!-- 顶部 -->
    <!-- <nav-header title='币币交易' right= '历史记录'></nav-header>  -->
    <!-- 内容 -->
    <div class="content trade" >
       <ul class="clearfix nav-li">
         <li class='float_left'>币币交易</li>
         <li class='float_right' @click='goHistory()'>历史记录</li>
       </ul>
      <div class="trade-box clearfix">
		  <!-- 左边 -->
		  <div class="trade-left float_left">
			<span class='code' @click="trade_select=true">{{this.dui[select_id]}}</span>
			<ul class="clearfix btn-ul">
				<li class='float_left' :class='{"active":tab=="ru"}' @click="cao('ru')">买入</li>
				<li class='float_left' :class='{"active":tab=="chu"}' @click="cao('chu')">买出</li>
			</ul>	
			<x-input type='number' v-model="value" placeholder="请输入个数" style="margin-top:14px;"></x-input>
			<span class="sum">= 100 cny</span>
			<x-input type='number' class="sale-num" placeholder='数量' v-model="num"></x-input>
			<ul class="trade-num">
				<li>可买：<span> 0.000000000BQB</span></li>
				<li>可卖：<span> 0.000000000BQB</span></li>
			</ul>
			<x-progress class="trade-pro" :percent="percent" :show-cancel="false"></x-progress>
			<div class="box btns">
				<x-button  type="primary" @click.native='login()'>{{tab=="ru"?'买入':'卖出'}} {{coin_name}}</x-button>
			</div>
		  </div>
		  <!-- 右边 -->
		  <div class="trade-right float_right">
			  	<!-- <ul class="clearfix norm">
					<li class='float_right btn-nun'>0.34%</li>
					<li class='float_right norm-num'>
						<p>0.004912</p>
						<p>-$0.0.1</p>
					</li>
				</ul> -->
				<p class="right_box gap-p clearfix"><span class="float_left">价格</span> <span class="float_right"> 数量</span> </p>	
				<div class="right_box clearfix bg-num1">
					<p class='clearfix'><span class="float_left">{{price}}</span> <span class="float_right">0.002</span> </p>
					<p class='clearfix'><span class="float_left">{{parseInt((price + 0.01)*100)/100}}</span> <span class="float_right">0.002</span> </p>
					<p class='clearfix'><span class="float_left">{{parseInt((price + 0.02)*100)/100}}</span> <span class="float_right">0.002</span> </p>
					<p class='clearfix'><span class="float_left">{{parseInt((price + 0.03)*100)/100}}</span> <span class="float_right">0.002</span> </p>
					<p class='clearfix'><span class="float_left">{{parseInt((price + 0.04)*100)/100}}</span> <span class="float_right">0.002</span> </p>
				</div>
				<p class="right_box p_num">0.004912</p>
				<p class="right_box p_sum">≈27118.50 CNY</p>
				<div class="right_box clearfix bg-num1 bg-num2">
					<p class='clearfix'><span class="float_left">{{price}}</span> <span class="float_right">0.002</span> </p>
					<p class='clearfix'><span class="float_left">{{parseInt((price - 0.01)*100)/100}}</span> <span class="float_right">0.002</span> </p>
					<p class='clearfix'><span class="float_left">{{parseInt((price - 0.02)*100)/100}}</span> <span class="float_right">0.002</span> </p>
					<p class='clearfix'><span class="float_left">{{parseInt((price - 0.03)*100)/100}}</span> <span class="float_right">0.002</span> </p>
					<p class='clearfix'><span class="float_left">{{parseInt((price - 0.04)*100)/100}}</span> <span class="float_right">0.002</span> </p>
					
				</div>

		  </div>
      </div>
	  <actionsheet
      v-model="trade_select"
      :menus="dui"
      theme="android"
      @on-click-menu="selected">
    </actionsheet>

    </div> 
    <!-- 底部 -->
    <tab class="tab_footer" :active='2'></tab>
  </div>
</template>

<script>
import { Toast,XInput,XProgress,XButton,Actionsheet } from 'vux'
import { mapState,mapMutations } from "vuex";
import api from './../until/help/api'
export default {
  components: {
  
    Toast,XInput,XProgress,XButton,Actionsheet,
    tab:()=>import('@/components/tab'),
    navHeader:()=>import('@/components/navHeader')
  },
  // directives: {
  //   TransferDom
  // },
  computed: {
		...mapState(["userInfo","totalPrice"])
	},
  data () {
    return {
		value:0,
		num:'',
		percent:28,
		tab:'ru',
		trade_select:false,
		dui:{},
		price:0,
		select_id:1,
		coin_name:'',
		setTimeOut:''
    }
  },
	mounted() {
		this.init()
	},
	activated(){
		if(this.coin_name){
			clearInterval(this.setTimeOut);
			this.setTimeOut = null;
			this.initTime()
		}
		
	},
	methods: {
		goHistory(){
			this.$router.push({name:'History'})
		},
		cao(type){
			this.tab = type;
		},
		async init(){
			try {
				let res_dui = await api.APIPOSTMAN('POST','/cointype/findAll',{userId:this.userInfo.id})//交易对列表
				if(res_dui.data.code==200){
					
					res_dui.data.result.forEach(i => {
						this.dui[i.id] = i.coinTypeItem;
					});
					this.dui = Object.assign({},this.dui)
					this.selected(1)
				}
			} catch (error) {
				
			}
			
		},
		selected(key){
			clearInterval(this.setTimeOut);
			this.setTimeOut = null;
			this.select_id = key;
			this.coin_name = this.dui[key].split('/')[0];
			this.initPrice(this.coin_name);
			this.initTime()
			console.log(key,this.coin_name)
			
		},
		initTime(){
				this.setTimeOut = setInterval(()=>{
					this.initPrice(this.coin_name);
				},6000)
			},
		async initPrice(name){
			try {
				let data = await api.APIPOSTMAN('POST','/market/coinMarket',{coinName:name});
				console.log('价额',name,data)
				if(data.data.code == 200){
					this.price = data.data.result.filter(i=>{
						if(Object.keys(i)[0]==name){
							return i;
						}
					})[0][name];
					this.price = parseInt(this.price * 100) /100; 
				}
			} catch (error) {
				
			}
			
		}
		
	},
	deactivated() {
		clearInterval(this.setTimeOut);
		this.setTimeOut = null;
		console.log('销毁',this.setTimeOut)
	},
}
</script>

<style lang='less'>
.trade{
	padding: 0 15px;
	width: 100%;
	box-sizing: border-box;
	.weui-cell{
		border:1px solid #B7B7B7;
		padding: 4px 10px;
		&:before{
			left:0px;
		}
	}
  	.nav-li{
		padding: 17px 0px;
		li{
			color:#333;
			line-height: 20px;
			&:first-child{
				font-size: 20px;
				}
			&:last-child{
				font-size: 17px;
				}
			}
	}
	.trade-left{
		width: 50%;
		.code{
			display: inline-block;
			position: relative;
			&::after{
				content: ' ';
				position: absolute;
				width: 13px;
				height: 8px;
				background:url('../assets/img/Chevron.png');
				top:8px;
				right:-18px;
				
			}

		}
		.weui-progress__inner-bar{
			background-color: #007AFF;
		}
		.btns{
			padding: 0 23px;
			margin-top: 42px;
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
		.sum{
			color:#666;
			font-size: 15px;
			margin-top: 5px;
		}
		.sale-num{
			margin-top: 15px;
		}
		
		.btn-ul{
			height: 100%;
			border:1px solid #007AFF;
			color:#1C7BFF;
			width: 120px;
			font-size: 14px;
			margin-top: 14px;
			li{
				
				width: 60px;
				// height: 28px;
				text-align: center;
				cursor: pointer;
			}
		}
		.active{
			background:linear-gradient(45deg,rgba(28,123,255,1) 0%,rgba(51,199,250,1) 100%);
			color:#fff;
		}
	}
  	.trade-right{
		width: 48%;
		margin-left: 2%;
		.right_box{
			width: 149px;
			float:right;
			// padding: 9px 8px;
		}
		.bg-num1{
			background-color: #fef6f5;
			margin-top: 8px;
			p{
				padding: 0 8px;
				span:first-child{
					color:#FF5F56;
				}
				span:last-child{
					color:#C3C3C3;
				}
			}
		}
		.bg-num2{
			background-color: #f1faf8;
		}
		.p_num{
			margin-top: 15px;
			line-height: 15px;
			color:#10A684;
		}
		.p_sum{
			color:#C6C6C6;
			font-size: 12px;
			line-height: 12px;
		}
	  	.norm{
			li{
				height: 30px;
				p{
					font-size: 14px;
					height: 18px;
					line-height: 15px;
					text-align: right;
				}
				p:last-child{font-size: 12px;height: 12px;line-height: 12px;}
			}
			.btn-nun{
				width: 65px;
				background-color: #FF5F56;
				text-align: center;
				line-height: 30px;
				color:#FFF;
				font-weight: 400;
			}
			.norm-num{
				margin-right: 5px;
				p{color:#FF5F56}
			}
			
			
		  }
		  .gap-p{margin-top: 25px;}
		  p.right_box{
			  span{
				  color:#666666;
				  font-size: 12px;
			  }
		  }
  	}
	.trade-num{
		font-size: 12px;
		margin-top: 7px;
		li{color:#999}
		span{color:#333}
	}
	.trade-pro{
		margin-top: 22px;
	}
}
</style>