<template>
  <div class = 'pre ' >
    <!-- 顶部 -->
    <nav-header title='历史记录' back='true'></nav-header> 
    <!-- 内容 -->
    <div class="content history_db"  style="height:calc(100% - 44px)">
		
		<div class="price_list" v-for="(i,index) in list" :key='index'>
			<p class="clearfix title"><span class="float_left">{{menus[type] ? menus[type].menu :''}}</span></p>
			<div class="list_name">
				<span>数量</span>
				<span>状态</span>
				<span>时间</span>
			</div>
			<div class="item" @click='goDetail()' >
				<span>{{i.coinNumber}}</span>
				<span>{{i.transStatus | transStatus}}</span>
				<span>{{i.modifyTime}}</span>
			</div>
			<!-- 无数据展示 -->
		</div>
		<div class="no-data" v-if='list.length==0'>
			<div class="bg"></div>
			<p>暂无记录</p>
		</div>
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
	data () {
		return {
			menus:{
				'put':{
					menu:'普通充币'
				},
				'pick':{
					menu:'提币'
				}
			},
			show:false,
			type:'',
			list:[]
		}
	},
	mounted() {
		console.log(this.$route)
		this.init()
	},
	computed: {
		...mapState(["userInfo","totalPrice"])
	},
	methods: {
		goDetail(data){
			this.$router.push({name:'Db_detail',query:{type:this.$route.query.type}})
		},
		async init(){
			try {
				let res = await api.APIPOSTMAN('POST','/transRecord/findTransRecordByConditon',
				{userId:this.userInfo.id,coinTypeId:this.$route.query.type,status:'1'})
				if(res.data.code==200){
					this.list = res.data.result.list;
					console.log(this.list)
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
    .history_db{
	    overflow: scroll;
		.price_list{
			background-color: #fff;
			padding: 15px;
			box-sizing: border-box;
			.title{
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
				margin-top: 13px;
				line-height: 12px;
                font-size:12px;
					span{
						flex: 1;text-align: left;color:#666666;
					}
					span:last-child{
						margin-right: 0;
						flex:1.2
					}

				}
				.item{
					background-color: #fff;
					margin-top: 0px;
					font-size: 14px;
					line-height: 43px;
					display: flex;
					border-bottom: 1px solid #E6E6E6;
					span{
						flex: 1;text-align: left;color:#666666;
					}
					span:first-child{
						text-indent: 0px;
                	}
					span:nth-child(2){
						color:#7ACA7D;
					}
					span:last-child{
						margin-right: 0;
						flex:1.2
					}
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