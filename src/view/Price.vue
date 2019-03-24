<template>
  <div class = 'pre ' style="height:calc(100% - 44px)">
    <!-- 顶部 -->
    <nav-header title='行情'></nav-header> 
    <!-- 内容 -->
    <div class="content price" style="height:calc(100% - 44px)">
		<div class='car'>
			<p>总资产</p>
			<p><span>0.000000</span><span> BTC = 0 CNY</span></p>
			<p><span>充币</span><span>提币</span></p>
		</div>
		<div class="safe">
			<div class='nei'>
				<ul class="clearfix">
					<li class="float_left">
						图
					</li>
					<li class="float_left">
						<p>白起去中心化交易所 </p>
						<p>给您资金提供安全保</p>
					</li>
				</ul>
			</div>
		</div>
		<p>USDT交易对</p>
		<div class="title">
			<span>币种</span>
			<span>最新价</span>
			<span>涨幅</span>
		</div>
		<ul class="data_box">
			<li>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</li>
			<li>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</li>
			<li>
				<div>1</div>
				<div>2</div>
				<div>3</div>
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
		.car{
			height: 140px;
			border-radius: 4px;
			background:linear-gradient(45deg,rgba(117,7,248,1) 0%,rgba(51,199,250,1) 100%);
			padding: 18px 15px;
			color:#fff;

		}
		.safe{
			height: 70px;
			background:linear-gradient(228deg,rgba(59,211,255,1) 0%,rgba(38,79,255,1) 100%);
			border-radius: 4px;
			margin-top: 15px;
			padding: 6px;
			box-sizing: border-box;
			.nei{
				border:1px solid #fff;
				border-radius: 4px;
				height: 56px;
				color:#fff;
				ul{
					padding: 5px 28px;
					height: 56px;
					box-sizing: border-box;
					li{
						height: 50px;
						
					}
					li:first-child{
						width: 42px;
					}
					li:last-child{
						margin-left: 20px;
						p{
							font-size: 16px;
						}
					}
					
				}
			}
		}
		.title{
			background: #f5f5f5;
			height: 30px;
			display: flex;
			span{flex: 1;text-align: center}
		}
		.data_box{
			li{
				display: flex;
				div	{flex:1;text-align: center;}
			}
		}
	}
</style>