<template>
  <div class = 'pre ' >
    <!-- 顶部 -->
    <nav-header title='成交明细' back='true'></nav-header> 
    <!-- 内容 -->
    <div class="content history_de"  style="height:calc(100% - 44px)">

        <ul class="data_box">
			<div > 
				<p class="clearfix li-title"><span class="float_left"> 卖出 {{detail.dui_name}} </span></p>
				<li>
					<div class='flex'><p>成交总额(USDT)</p><p>{{detail.totalTransNum}}</p></div>
					<div class='flex'><p >成交均价(USDT)</p><p>{{detail.coinTransPrice}}</p></div>
					<div class='flex'><p>成交量(XRP)</p><p>{{detail.coinTransNum}}</p></div>
				</li>
                <li class='has_border'>
                    <div class='flex'><p>手续费(USDT)</p><p>{{detail.coinTransFee}}</p></div>
					<div class='flex'><p >委托量</p><p>{{detail.coinEntrustNum}}</p></div>
					<div class='flex'></div>
                </li>
			</div>
		</ul>
        <group>
            <cell :title="item.title" v-for='(item,index) in list' :value="item.img" :key='index' >
            </cell>
        </group>
    </div>    
  </div>
</template>

<script>
import {Group,Cell, XSwitch, Toast } from 'vux'

export default {
  components: {
    Group,
    XSwitch,
    Toast,
     Group,
    Cell,
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
        detail:{},
        show:false,
         list:[
            {title:'时间',img:'2012-03-23 12:20',link:'/real',url:'src/assets/img/shi.png'},
            {title:'成交价',img:'15.00 XRP',link:'/ChangePassword',url:'src/assets/img/change_pass.png'},
            // {title:'成交量',img:'15.00 XRP',link:'',url:'src/assets/img/change_zijin.png'},
            // {title:'手续费',img:'0.00942300 USDT',link:'/custom',url:'src/assets/img/kefu.png'},
            {title:'点卡消耗',img:'0.00000000 pts',link:'/help',url:'src/assets/img/help.png'},
        ],
    }
  },
  mounted() {
      this.detail = Object.assign({},this.$route.params)
     console.log('点击了',this.detail,this.$route.params)
  },
  methods: {
	  
  }
}
</script>

<style lang="less">
.history_de{
    overflow-y: scroll;
        .weui-cells::before{
            border-top:0px !important;
        }
        .vux-no-group-title{
            margin-top: 0px !important;
        }  
        .weui-cells{
            &::after{
                // border-bottom:0px !important;
                left: 15px !important;
            }
            margin-top: 0px;
            .vux-label{
                font-size: 16px;
                font-weight: 400;
                line-height: 16px;
                color:#999;
            }
            .weui-cell{
                font-size: 14px;
                line-height: 22px;
            }
            .weui-cell__ft{
                color:#333;
            }
            
        }
		.data_box{
			box-sizing: border-box;
			padding: 15px;
			background-color: #fff;
			div:nth-child(n + 2) .li-title{
				margin-top:24px;
			}
			.li-title{
				span{
					color:#10A684;
					font-size: 16px;
					line-height: 16px;
				}
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