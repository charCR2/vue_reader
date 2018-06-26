<template>
		<div class="book-about">
			<h3>相关推荐</h3>
			<ul class="book-about-box">
				<li v-for="(book,key) in recommend" v-if="key<3">
					<router-link :to="'/bookinfo/'+book._id">
						<img v-lazy="book.cover">
						<p>{{book.title}}</p>
					</router-link>
				</li>
			</ul>
		</div>
</template>
<script type="text/javascript">
import { Indicator } from 'mint-ui'
import {getRecommend,getBookSources} from '../../api/api'
import util from '../../api/util'

	export default{
		data(){
			return {
				recommend:[]
			}
		},
		created(){
			this.getrecommend()
		},
		methods:{
			getrecommend(){
				Indicator.open()
				this.recommend=[];
				getRecommend(this.$route.params.bookid).then(res=>{
					let books=res.data.books;
					books.forEach((book)=>{
						book.cover= util.staticPath+book.cover;
						this.recommend.push(book);
					})
					Indicator.close();
				})
			}
		},
		watch:{
			'$route.params':'getrecommend'
		}
	}
</script>
<style type="text/css">
	.book-about{
		background-color: #F2F6FC;
	}
	.book-about>h3{
		padding:5px 10px;
		font-weight: 400;
		font-size: 18px;
		border-bottom: 1px solid #ddd;
	}
	.book-about-box{
		font-size: 0;
		padding:10px 14px 0;
	}
	.book-about-box>li{
		display: inline-block;
		width:33.3%;
	}
	.book-about-box>li a{
		display: inline-block;
		color: #555;
		font-size: 14px;
		height: 117px;
		width: 86px;
		border-radius: 4px;
		box-shadow: 0 5px 10px #555;
	}
	.book-about-box>li p{
		text-align: left;
		line-height: 2.4;
		overflow:hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.book-about-box>li:nth-child(3n+1){
		text-align:left;
	}
	.book-about-box>li:nth-child(3n+2){
		text-align:center;
	}
	.book-about-box>li:nth-child(3n+3){
		text-align:right;
	}
	.book-about-box>li img{
		height: 100%;
		width: 100%;
	}
</style>
