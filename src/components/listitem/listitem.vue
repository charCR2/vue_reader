<template>
	<div class="category-book-view" id="list-view">
			<ul class="category-book">
				<li class="category-book-item" v-for="book in Lists">
					<router-link :to="{'name':'bookinfo',params:{bookid:book._id}}" class="fix">
						<div class="category-book-cover">
							<img v-lazy="book.cover" :title="book.title">
						</div>
						<div class="category-book-msg">
							<h3 class="category-book-title">{{book.title}}</h3>
							<p class="category-list-author">{{book.author}}<span class="category-col-line">|</span>{{book.majorCate}}</p>
							<p>{{book.shortIntro}}</p>
							<p class="category-book-star">{{book.latelyFollower}}人在追<span class="category-col-line">|</span>{{book.retentionRatio}}%留存</p>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{

			}
		},
		props:['Lists']
	}
</script>
<style type="text/css">
		.category-book-view{
		overflow-y:scroll;
		height: 100%; 
	}
	.category-book-item>a{
		width: 100%;
		padding:10px 14px 0;
		color: #555;
		margin-bottom: 10px;
	}
	.category-book-cover{
		width: 86px;
		height: 113px;
		background-color: #555;
		float: left;
		border-radius: 4px;
		overflow: hidden;
		box-shadow: 0 5px 10px #555;
	}
	.category-book-cover>img{
		width: inherit;
		height: inherit;
	}
	.category-book-msg{
		margin-left: 100px;
		height: 118px;
		line-height: 28px;
		border-bottom: 1px solid #ddd;
	}
	.category-book-msg>p{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: rgba(0,0,0,0.4);
		font-size: 14px;
	}
	.category-book-title{
		font-size: 16px;
		font-weight: normal;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.category-list-author{
		font-size: 12px;
	}
	.category-col-line{
		margin:0 5px;
		font-size: 14px;
	}
	.category-book-star{
		color: rgba(0,0,0,0.6);
	}
</style>