<template>
	<div class="index-male">
		<div class="index-male-title">
			<h3>男生推荐</h3>
		</div>
		<ul class="index-male-rank">
			<li class="fix" v-for="(book,key) in malelist">
				<router-link :to="'/bookinfo/'+book._id">
					<div class="book-cover-box">
						<img class="book-cover" v-lazy="book.cover" :title="book.title">
						<div class="book-number">{{key+1}}</div>
					</div>
					<div class="book-info">
						<p class="book-title">
							{{book.title}}
						</p>
						<!--<p class="book-author">{{book.author}}</p>-->
						<p class="book-content">
							{{book.shortIntro}}
						</p>
						<ul class="book-tags fix">
							<li>{{book.author}}</li>
							<li style="float: right">{{book.majorCate}}</li>
						</ul>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
import { lazyload } from 'mint-ui'

	export default{
		props:['malelist']
	}
</script>
<style>
	.index-male-title{
    padding: 10px 14px;
		border-bottom: 1px solid #DCDFE6;
	}
	.index-male-title>h3{
		font-size: 14px;
	}
	.index-male-rank{
		border-bottom: 1px solid #DCDFE6;
		margin-bottom: 10px;
	}
	.index-male-rank>li{
		padding: 10px 14px;
	}
	.title{
		font-size: 14px;
		border-left:6px solid #F56C6C;
		padding: 10px 14px;
		border-bottom: 1px solid #DCDFE6;
	}
	.title>h3{
		font-size: 14px;
		font-weight: normal;
	}
	.book-cover-box{
		background-color:#606266;
		border-radius: 4px;
		height: 113px;
		width: 86px;
		float: left;
		position: relative;
		overflow: hidden;
		box-shadow: 0 5px 10px #555;
	}
	.book-cover{
		width: inherit;
		height: inherit;
	}
	.book-number{
		text-align: center;
		position: absolute;
		left: 0;
		top: 0;
		background-color:#E6A23C;
		color: #F2F6FC;
		width: 18px;
		height:18px;
		padding:1px;
		font-size:12px;
		line-height: 14px;
	}
	.book-info{
		margin-left: 100px;
	}
	.book-title{
		font-size: 15px;
		text-overflow: ellipsis;
		overflow:hidden;
		white-space: nowrap;
		margin-bottom: 2px;
		color:#555;
	}
	.book-author{
		font-size: 14px;
		margin-bottom: 2px;
		color: rgba(0, 0, 0, 0.4);
	}
	.book-content{
		color: rgba(0, 0, 0, 0.4);
		font-size: 14px;
		text-overflow: ellipsis;
		overflow:hidden;
		margin-bottom: 5px;
    display: -webkit-box;
    height: 60px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;


	}
	.book-tags{
		overflow:hidden;
	}
	.book-tags>li{
		float: left;
		padding: 2px 8px;
		background-color: #67C23A;
		border-radius: 4px;
		color: #F2F6FC;
		line-height: 1.3;
	}
	.book-tags>li+li{
		margin-left: 10px;
	}
	.book-tags>li:nth-child(3n+1){
		background-color: #53ac7d;
	}
	.book-tags>li:last-child{
		background-color: #E6A23C;
	}
</style>
