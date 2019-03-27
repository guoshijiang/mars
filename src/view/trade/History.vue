<template>
  <div class = 'pre ' >
    <!-- 顶部 -->
    <nav-header title='历史记录' back='true'></nav-header> 
    <!-- 内容 -->
    <div class="content history"  style="height:calc(100% - 44px)">

        <ul class="data_box" v-for='(p,index) in [{},{},{},{},{},{}]' :key='index'>
			<div @click='goDetail()'> 
				<p class="clearfix li-title"><span class="float_left"> 卖出 XRP/USDT </span><span class="float_right">已成交></span></p>
				<li>
					<div class='flex'><p>买入</p><p>2018-09-12 22：22</p></div>
					<div class='flex'><p >委托价(USDT)</p><p>0.3167</p></div>
					<div class='flex'><p>0.3167</p><p>54.27</p></div>
				</li>
                <li class='has_border'>
                    <div class='flex'><p>成交总额(USDT)</p><p>17.18730900</p></div>
					<div class='flex'><p >成交均价(USDT)</p><p>0.3176</p></div>
					<div class='flex'><p>成交量(XRP)</p><p>54.27</p></div>
                </li>
			</div>
		</ul>
    </div>    
  </div>
</template>

<script>
import {Group, XSwitch, Toast } from 'vux'

export default {
  components: {
    Group,
    XSwitch,
	Toast,
    navHeader:()=>import('@/components/navHeader')
  },
//   directives: {
//     TransferDom
//   },
  data () {
    return {
		menus:{
			menu1:'充币',
			menu2:'提币',
			menu3:'交易'
		},
		show:false,
    }
  },
  methods: {
	  goDetail(data){
          this.$router.push({name:'History_Da'})
	  }
  }
}
</script>

<style lang="less">
.history{
    overflow-y: scroll;
		.data_box{
			
			box-sizing: border-box;
			padding: 15px;
			background-color: #fff;
			div:nth-child(n + 2) .li-title{
				margin-top:24px;
			}
			.li-title{
				span{
					color:#FF5F56;
					font-size: 16px;
					line-height: 16px;
				}
				.float_right{color:#999999;line-height: 16px;margin-right: 8px;}
			}
			
			li{
				display: flex;
				height: 60px;
				padding: 13px 0;
				
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
            .has_border{
                border-bottom: 1px solid #E6E6E6;
            }
		}
}
</style>