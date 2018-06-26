<template>
	<div class="book-rank-container">
		<m-head :title="'排名'" :center="true"></m-head>
		<div class="book-rank-list">
			<ul class="book-rank-detail">
				<h3>男生</h3>
				<li  class="book-rank-item" v-for="(rank,index) in ranklist.male"v-if="index<7">
					<img :src="rank.cover">
					<a href="javascript:" @click="golist(rank)">{{rank.title}}</a>
				</li>
				<li @click="ShowmaleCollapse" class="book-rank-item book-rank-others"><a href="javascript:">其他排行榜</a></li>
				<li v-show="ismaleCollapse" class="book-rank-item" v-for="(rank,index) in ranklist.male" v-if="index>7">
					<a href="javascript:"  @click="golist(rank)">{{rank.title}}</a>
				</li>
			</ul>
			<ul class="book-rank-detail">
				<h3>女生</h3>
				<li  class="book-rank-item" v-for="(rank,index) in ranklist.female"v-if="index<7">
					<img :src="rank.cover">
					<a  href="javascript:" @click="golist(rank)">{{rank.title}}</a>
				</li>
				<li @click="ShowfemaleCollapse" class="book-rank-item book-rank-others"><a href="javascript:">其他排行榜</a></li>
				<li v-show="isfemaleCollapse" class="book-rank-item" v-for="(rank,index) in ranklist.female" v-if="index>7">
					<a href="javascript:"  @click="golist(rank)">{{rank.title}}</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
import header from './footandhead/header'
import {getRankCategory} from '../api/api'
import util from '../api/util'
import {Indicator} from 'mint-ui'
	export default{
		name:'bookrank',
		data(){
			return{
				ranklist:{},
				ismaleCollapse:false,
				isfemaleCollapse:false
			}
		},
		components:{
			'm-head':header,
		},
		created(){
			Indicator.open()
			getRankCategory().then(res=>{
				res.data.male.forEach(rank=>{
					rank.cover = util.staticPath+rank.cover;
				})
				res.data.female.forEach(rank=>{
					rank.cover = util.staticPath+rank.cover;
				})
				this.ranklist=res.data;
				Indicator.close()
			})
		},
		methods:{
			ShowmaleCollapse(){
				this.ismaleCollapse=!this.ismaleCollapse
			},
			ShowfemaleCollapse(){
				this.isfemaleCollapse=!this.isfemaleCollapse
			},
			golist(list){
				this.$store.commit('SetRankList',list)
				this.$router.push({name:'ranklist',params:{rankid:list._id}})
			}
		}
	}
</script>
<style type="text/css">
  body a{
    margin:0;
    color: #555;
  }
	.book-rank-container{
		height: 91vh;
		overflow: hidden;
    padding-bottom: 25px;
	}
	.book-rank-list{
		overflow-y: scroll;
		height: 97.5%;
	}
	.book-rank-detail{
		padding: 10px;
	}
	.book-rank-detail>h3{
		font-size: 16px;
		padding-bottom: 10px;
		border-bottom: 1px solid #EBEEF5;
	}
	.book-rank-item{
		position: relative;
	}
	.book-rank-item>a{
		padding: 10px 0 10px 50px;
		font-size: 16px;
		line-height: 36px;
		color: #555;
		border-bottom: 1px solid #EBEEF5;
	}
	.book-rank-item>img{
		position: absolute;
		left: 0;
		top: 10px;
		width: 36px;
		height: 36px;
	}
	.book-rank-others>a{
		 padding-left:10px;
	}
</style>
