<template>
  <div class = 'pre ' >
    <!-- 顶部 -->
    <nav-header title='详情' back='true'></nav-header> 
    <!-- 内容 -->
    <div class="content home_detail"  style="height:calc(100% - 44px)">
		
        <ul class="data_box" >
			<div> 
				<p class=" li-title"><span v-if='hb.detail'>{{hb.detail.coinName}}</span></p>
				<li>
					<div class='flex'><p>可用</p><p>{{hb.usableBalance}}</p></div>
					<div class='flex'><p >冻结</p><p>{{hb.freezeBalance}}</p></div>
					<div class='flex'><p>折合(CNY)</p><p class="hb_p_num">≈{{hb.price}}</p></div>
				</li>
			</div>
		</ul>
		<div class="price_list" style='height:calc(100% - 136px)'>
			<p class="clearfix title"><span class="float_left">财务记录</span><span class="float_right" @click="show=true"></span></p>
				
			<div class="box-list">
				<div class='box-item' v-for='(i,index) in [{},{},{},{}]' :key='index'>
					<p class='item_p'>普通充币</p>
					<div class="list_name">
						<span>类型/数量</span>
						<span>状态</span>
						<span>时间</span>
					</div>
					<div class="item">
						<span>0.342234</span>
						<span>已完成</span>
						<span>2018/09/12 23:22</span>
					</div>
				</div>
				
				<!-- 无数据展示 -->
				<div class="no-data">
					<div class="bg"></div>
					<p>暂无记录</p>
				</div>
			</div>
				
		</div>

		<actionsheet v-model="show" :menus="menus" @on-click-menu="getSelect" show-cancel></actionsheet>
    </div>    
  </div>
</template>

<script>
import { Actionsheet, Group, XSwitch, Toast } from 'vux'
import api from '../../until/help/api'
import { mapState,mapMutations } from "vuex";
export default {
  components: {
    Group,
    XSwitch,
	Toast,
	Actionsheet,
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
		hb:{}
    }
  },
  computed: {
	  ...mapState(["userInfo","totalPrice"])
  },
  mounted() {
	  this.init()
  },
  methods: {
	  getSelect(data){
		  console.log('点击了',data)
	  },
	  async init(){
		//   let res = await api.APIPOSTMAN('POST','/asset/findAssetByUserAndCoinTypeId',{userId :this.userInfo.id,coinTypeId:this.$route.params.type,status:1})
		  console.log(this.$route.params.hb)
		  this.hb = Object.assign({},this.$route.params.hb)
	  }
  }
}
</script>

<style lang="less">
.home_detail{
	background-color: #F6F7F8;
	overflow: hidden;
		.data_box{
			
			box-sizing: border-box;
			padding: 15px;
			background-color: #fff;
			div:nth-child(n + 2) .li-title{
				margin-top:24px;
			}
			.li-title{
				span{
					color:#999;
					font-size: 28px;
					line-height: 28px;
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
		.price_list{
			
			margin-top: 15px;
			background-color: #fff;
			padding: 15px;
			box-sizing: border-box;
			.box-list{
				overflow-y: scroll;
				height: 100%;
			}
			.title{
				margin-bottom: 10px;
				span{
					color:#333;
					font-size: 18px;
					line-height: 18px;
					font-weight: 500;
				}
				.float_right{
					background-image: url('../../assets/img/shaixuan.png');
					background-size:cover;
					background-repeat: no-repeat;
					background-position: center center;
					width: 18px;
					height: 18px;
					display: inline-block;
					margin-right: 10px;

				}
			}
			.list_name{
				display: flex;
				margin-top: 5px;
				line-height: 12px;
				font-size:12px;
				span{
					flex: 1;text-align: left;color:#666666;
				}
				span:last-child{
					flex:1.5;
					text-align: center;
				}

			}
			.box-item{
				width: 100%;
				p{
					width: 33.33%;
					text-align: left;
					margin-top: 8px;
				}
			}
			.item{
				height: 30px;
				display: flex;
				margin-top: 13px;
				line-height: 30px;
				margin-top: 0px;
				font-size: 14px;
				border-bottom: 1px solid #E6E6E6;
				span{
					flex: 1;text-align: left;color:#666666;
					
				}
				span:first{
					text-indent: 0px;
				}
				span:last-child{
					margin-right: 0;
					flex: 1.5
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
}
</style>