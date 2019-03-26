<template>
  <div class = 'pre ' style="height:calc(100% - 44px)">
    <!-- 顶部 -->
    <nav-header title='行情'></nav-header> 
    <!-- 内容 -->
    <div class="content price" style="height:calc(100% - 44px)">
		<div class='car'>
			<p class="sum_price">总资产</p>
			<p class="has_count"><span>0.000000</span><span> BTC = 0 CNY</span></p>
			<p class="caozuo clearfix"><span>充币</span><span>提币</span></p>
		</div>
		<div class="safe">
			<!-- <div class='nei'>
				<ul class="clearfix">
					<li class="float_left">
						图
					</li>
					<li class="float_left">
						<p>白起去中心化交易所 </p>
						<p>给您资金提供安全保</p>
					</li>
				</ul>
			</div> -->
		</div>
		<p class="hb_new_title">USDT交易对</p>
		<div class="title">
			<span>币种</span>
			<span>最新价</span>
			<span>涨幅</span>
		</div>
		<ul class="data_box" style='height:calc(100% - 340px)'>
			<li>
				<div><p>BTC/usdt</p><p>24h量 1000</p></div>
				<div><p class="new_price">12834.5</p><p>12834.5</p></div>
				<div class="change_height"><a class="hb_btn_a" href='javascript:;'>+0.34%</a></div>
			</li>
			<li>
				<div><p>BTC/usdt</p><p>24h量 1000</p></div>
				<div><p class="new_price">12834.5</p><p>12834.5</p></div>
				<div class="change_height"><a class="hb_btn_a hb_btn_j" href='javascript:;'>-0.44%</a></div>
			</li>
			<li>
				<div><p>BTC/usdt</p><p>24h量 1000</p></div>
				<div><p class="new_price">12834.5</p><p>12834.5</p></div>
				<div class="change_height"><a class="hb_btn_a" href='javascript:;'>+0.34%</a></div>
			</li>
			<li>
				<div><p>BTC/usdt</p><p>24h量 1000</p></div>
				<div><p class="new_price">12834.5</p><p>12834.5</p></div>
				<div class="change_height"><a class="hb_btn_a" href='javascript:;'>+0.34%</a></div>
			</li>
			<li>
				<div><p>BTC/usdt</p><p>24h量 1000</p></div>
				<div><p class="new_price">12834.5</p><p>12834.5</p></div>
				<div class="change_height"><a class="hb_btn_a" href='javascript:;'>+0.34%</a></div>
			</li>
			<li>
				<div><p>BTC/usdt</p><p>24h量 1000</p></div>
				<div><p class="new_price">12834.5</p><p>12834.5</p></div>
				<div class="change_height"><a class="hb_btn_a" href='javascript:;'>+1.34%</a></div>
			</li>
		</ul>
     


    </div> 



    <!-- 底部 -->
    <tab class="tab_footer" :active='1'></tab>   
  </div>
</template>

<script>
import { TransferDom, Actionsheet, Group, XSwitch, Toast } from 'vux'

export default {
  components: {
    Actionsheet,
    Group,
    XSwitch,
    Toast,
    tab:()=>import('@/components/tab'),
    navHeader:()=>import('@/components/navHeader')
  },
  directives: {
    TransferDom
  },
  data () {
    return {
    }
  },
  methods: {
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
				font-size: 24px;
				line-height: 24px;
				margin-top: 10px;
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
			background-image: url('./../assets/img/safe_bg.png');

			background-size: cover;
			// .nei{
			// 	border:1px solid #fff;
			// 	border-radius: 4px;
			// 	height: 56px;
			// 	color:#fff;
			// 	ul{
			// 		padding: 5px 28px;
			// 		height: 56px;
			// 		box-sizing: border-box;
			// 		li{
			// 			height: 50px;
						
			// 		}
			// 		li:first-child{
			// 			width: 42px;
			// 		}
			// 		li:last-child{
			// 			margin-left: 20px;
			// 			p{
			// 				font-size: 16px;
			// 			}
			// 		}
					
			// 	}
			// }
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