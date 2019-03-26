<template>
  <div class = 'pre' style="height:calc(100% - 44px)">
    <!-- 顶部 -->
    <!-- <nav-header title='币币交易' right= '历史记录'></nav-header>  -->
    <!-- 内容 -->
    <div class="content trade" >
       <ul class="clearfix nav-li">
         <li class='float_left'>币币交易</li>
         <li class='float_right'>历史记录</li>
       </ul>
      <div class="trade-box clearfix">
		  <!-- 左边 -->
		  <div class="trade-left float_left">
			<span class='code'>BQB/USDT</span>
			<ul class="clearfix btn-ul">
				<li class='float_left active' >买入</li>
				<li class='float_left'>买出</li>
			</ul>	
			<x-input type='number' v-model="value" style="margin-top:14px;"></x-input>
			<span class="sum">= 100 cny</span>
			<x-input type='number' class="sale-num" placeholder='数量' v-model="num"></x-input>
			<ul class="trade-num">
				<li>可买：<span> 0.000000000BQB</span></li>
				<li>可卖：<span> 0.000000000BQB</span></li>
			</ul>
			<x-progress class="trade-pro" :percent="percent" :show-cancel="false"></x-progress>
			<div class="box btns">
				<x-button  type="primary" @click.native='login()'>买入 BQB</x-button>
			</div>
		  </div>
		  <!-- 右边 -->
		  <div class="trade-right float_right">
			  	<ul class="clearfix norm">
					<li class='float_right btn-nun'>0.34%</li>
					<li class='float_right norm-num'>
						<p>0.004912</p>
						<p>-$0.0.1</p>
					</li>
				</ul>
				<p class="right_box gap-p clearfix"><span class="float_left">价格</span> <span class="float_right"> 数量</span> </p>	
				<div class="right_box clearfix bg-num1">
					<p class='clearfix'><span class="float_left">3999.19</span> <span class="float_right">0.002</span> </p>
					<p class='clearfix'><span class="float_left">3999.19</span> <span class="float_right">0.002</span> </p>
					<p class='clearfix'><span class="float_left">3999.19</span> <span class="float_right">0.002</span> </p>
					<p class='clearfix'><span class="float_left">3999.19</span> <span class="float_right">0.002</span> </p>
					<p class='clearfix'><span class="float_left">3999.19</span> <span class="float_right">0.002</span> </p>
				</div>
				<p class="right_box p_num">0.004912</p>
				<p class="right_box p_sum">≈27118.50 CNY</p>
				<div class="right_box clearfix bg-num1 bg-num2">
					<p class='clearfix'><span class="float_left">3999.19</span> <span class="float_right">0.002</span> </p>
					<p class='clearfix'><span class="float_left">3999.19</span> <span class="float_right">0.002</span> </p>
					<p class='clearfix'><span class="float_left">3999.19</span> <span class="float_right">0.002</span> </p>
					<p class='clearfix'><span class="float_left">3999.19</span> <span class="float_right">0.002</span> </p>
					<p class='clearfix'><span class="float_left">3999.19</span> <span class="float_right">0.002</span> </p>
				</div>

		  </div>
      </div>
    </div> 
    <!-- 底部 -->
    <tab class="tab_footer" :active='2'></tab>
  </div>
</template>

<script>
import { Toast,XInput,XProgress,XButton } from 'vux'

export default {
  components: {
  
    Toast,XInput,XProgress,XButton,
    tab:()=>import('@/components/tab'),
    navHeader:()=>import('@/components/navHeader')
  },
  // directives: {
  //   TransferDom
  // },
  data () {
    return {
		value:0,
		num:'',
		percent:28

    }
  },
  methods: {
   
  }
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