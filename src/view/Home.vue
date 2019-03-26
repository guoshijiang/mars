<template>
  <div class='pre' style="height:calc(100% - 44px)">
    <!-- 顶部 -->
    <nav-header title='资产'></nav-header> 
    <!-- 内容 -->
 	<div class="content home" style="height:calc(100% - 44px)">
		<div class='car'>
			<p class="sum_price">总资产</p>
			<p class="has_count"><span>0.00000000</span><span> BTC = 0 CNY</span></p>
			<p class="price_name"><span>资产折合 USDT</span><span> BTC = 0 CNY</span></p>
			<p class="caozuo clearfix"><span>充币</span><span>提币</span></p>
		</div>
		<div class="safe">
		</div>
	
		<ul class="data_box" style='height:calc(100% - 290px)'>
			<div>
				<p class="clearfix li-title"><span class="float_left">BTC</span>	<span class="float_right">></span></p>
				<li>
					<div class='flex'><p>可用</p><p>24h量 1000</p></div>
					<div class='flex'><p >冻结</p><p>12834.5</p></div>
					<div class='flex'><p>折合(CNY)</p><p class="hb_p_num">12834.5</p></div>
				</li>
			</div>
			<div>
				<p class="clearfix li-title"><span class="float_left">BTC</span>	<span class="float_right">></span></p>
				<li>
					<div class='flex'><p>可用</p><p>24h量 1000</p></div>
					<div class='flex'><p >冻结</p><p>12834.5</p></div>
					<div class='flex'><p>折合(CNY)</p><p class="hb_p_num">12834.5</p></div>
				</li>
			</div>
			<div>
				<p class="clearfix li-title"><span class="float_left">BTC</span>	<span class="float_right">></span></p>
				<li>
					<div class='flex'><p>可用</p><p>24h量 1000</p></div>
					<div class='flex'><p >冻结</p><p>12834.5</p></div>
					<div class='flex'><p>折合(CNY)</p><p class="hb_p_num">12834.5</p></div>
				</li>
			</div>
			<div>
				<p class="clearfix li-title"><span class="float_left">BTC</span>	<span class="float_right">></span></p>
				<li>
					<div class='flex'><p>可用</p><p>24h量 1000</p></div>
					<div class='flex'><p >冻结</p><p>12834.5</p></div>
					<div class='flex'><p>折合(CNY)</p><p class="hb_p_num">12834.5</p></div>
				</li>
			</div>
			<div>
				<p class="clearfix li-title"><span class="float_left">BTC</span>	<span class="float_right">></span></p>
				<li>
					<div class='flex'><p>可用</p><p>24h量 1000</p></div>
					<div class='flex'><p >冻结</p><p>12834.5</p></div>
					<div class='flex'><p>折合(CNY)</p><p class="hb_p_num">12834.5</p></div>
				</li>
			</div>
		</ul>
    </div> 

    <!-- 底部 -->
    <tab class="tab_footer" :active='0'></tab>

  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import { Actionsheet } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Actionsheet,
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
      val:'ww'
    }
  },
  methods: {
    go(a){
      this.$router.push({name:'Detail'})
    }
  },
}
</script>

<style lang="less">
	.home{
		padding: 13px 15px;
		overflow: hidden;
		.car{
			height: 155px;
			border-radius: 4px;
			background:linear-gradient(45deg,rgba(117,7,248,1) 0%,rgba(51,199,250,1) 100%);
			padding: 17px 15px;
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
				margin-top: 14px;
				span{
					display: inline-block;
					width: 50%;
					&:last-child{
						// margin-left: 50px;
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
			background-image: url('./../assets/img/safe_bg.png');

			background-size: cover;
			margin-bottom: 24px;
		}
		// .hb_new_title{
		// 	font-size: 16px;
		// 	line-height: 16px;
		// 	margin-top: 24px;
		// 	color:#333;
		// }
		// .title{
		// 	background: #f5f5f5;
		// 	height: 30px;
		// 	display: flex;
		// 	margin-top: 13px;
		// 	line-height: 30px;
		// 	span{flex: 1;text-align: center;color:#666666}
		// }
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
