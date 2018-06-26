<template>
	<div class="index-newbook">
		<div  class="title">
			<h3>本周推荐</h3>
		</div>
		<ul class="index-newbook-rank">
			<li class="fix" v-for="(books,index) in newslist" v-if="index==0" :key="books._id">
				<router-link :to="'/bookinfo/'+books._id">
					<div class="book-cover-box">
						<div class="book-number">{{index+1}}</div>
						<img class="book-cover" :src="books.cover">
					</div>
					<div class="book-info">
						<p class="book-title">
							{{books.title}}
						</p>
						<p class="book-author">{{books.author}}</p>
						<p class="book-content">
							{{books.shortIntro}}
						</p>
						<ul class="book-tags fix">
							<li>{{books.majorCate}}</li>
							<li v-show="(books.minorCate!='')">{{books.minorCate}}</li>
						</ul>
					</div>
				</router-link>
			</li>
			<router-link :to="'/bookinfo/'+books._id" tag='li' class="index-newbook-next"  v-for="(books,index) in newslist" v-if="index>0" :key="books._id">
				<span>{{index+1}}</span>
				<span>{{books.title}}</span>
				<span>{{books.author}}</span>
			</router-link>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{

			}
		},
		props:['newslist']
	}
</script>
<style type="text/css">
	.index-newbook{
		margin-bottom: 10px;
	}
	.index-newbook-rank{
		width: 100%;
	}
	.index-newbook-rank>li{
		padding: 10px 14px;
		border-bottom: 1px solid #DCDFE6;
	}
	.index-newbook-next>span+span{
		margin-left: 10px;
	}
	.index-newbook-next span:nth-child(1){
		color: #E6A23C;
		font-size: 14px;
	}
	.index-newbook-next span:nth-child(2){
		font-size: 16px;
		color:#555;
	}
	.index-newbook-next span:nth-child(3){
		font-size: 14px;
		color: rgba(0, 0, 0, 0.4);
	}
</style>
