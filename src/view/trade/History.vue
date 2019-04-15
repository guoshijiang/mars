<template>
  <div class = 'pre ' >
    <!-- 顶部 -->
    <nav-header title='历史记录' back='true'></nav-header> 
    <!-- 内容 -->
    <div class="content history"  style="height:calc(100% - 44px)">

        <ul class="data_box" v-for='(p,index) in list' :key='index'>
			<div @click='goDetail(p)'> 
				<p class="clearfix li-title"><span class="float_left"> 买卖 {{p.dui_name}} </span><span class="float_right">{{p.transStatus | transStatus}}></span></p>
				<li>
					<div class='flex'><p>{{p.coinTransType == 1 ? '卖出':'买入'}}</p><p>{{p.modifyTime}}</p></div>
					<div class='flex'><p >委托价(USDT)</p><p>{{p.coinEntrustPrice}}</p></div>
					<div class='flex'><p>委托量(USDT)</p><p>{{p.coinEntrustNum}}</p></div>
				</li>
                <li class='has_border'>
                    <div class='flex'><p>成交总额(USDT)</p><p>{{p.totalTransNum}}</p></div>
					<div class='flex'><p >成交均价(USDT)</p><p>{{p.coinTransPrice}}</p></div>
					<div class='flex'><p>成交量(XRP)</p><p>{{p.coinTransNum}}</p></div>
                </li>
			</div>
		</ul>
		<div class="no-data" v-if='list.length==0'>
			<div class="bg"></div>
			<p>暂无记录</p>
		</div>
    </div>    
  </div>
</template>

<script>
import {Group, XSwitch, Toast } from 'vux'
import api from '../../until/help/api'
import { mapState,mapMutations } from "vuex";
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
	computed: {
		...mapState(["userInfo","totalPrice"])
	},
	data () {
		return {
			menus:{
				menu1:'充币',
				menu2:'提币',
				menu3:'交易'
			},
			show:false,
			list:[]
		}

	},
	mounted() {
		this.init()
	},
	methods: {
		goDetail(data){
			this.$router.push({name:'History_Da',params:data})
		},
		async init(){
			try {
				let res = await api.APIPOSTMAN('POST','/coinTransRecord/findCoinTransRecordByUserId',{"userId":this.userInfo.id,"status":1});
				let res_dui = await api.APIPOSTMAN('POST','/cointype/findAll',{userId:this.userInfo.id})//交易对列表
				
				if(res.data.code==200){
					this.list = Object.assign([],res.data.result.list) ;

					if(res_dui.data.code==200){
					
						this.list.map(i=>{
							let dui = res_dui.data.result.filter(k => {
								if(i.coinTransId == k.id) return k;
							})[0];
							
							i.dui_name = dui.coinTypeItem;
						})
					}
					
					// console.log(this.list)
				}else{
					this.error = res.data.message;
					this.show_err = true;
					this.isLoad = false;
				}
			} catch (error) {
				
			}
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
		//无数据展示
		.no-data{
			width: 130px;
			height: 130px;
			margin: 150px auto;
			div{
				height: 98px;
				background: url('../../assets/img/no_data.png') center center no-repeat;
				background-size: cover;
			}
			P{
				text-align: center;
				margin-top: 14px;
				height: 16px;
				line-height: 16px;
				font-size: 14px;
				color:#D5D5D5;
			}
		}
	}
</style>