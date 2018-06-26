<template>
	<div class="index-male">
		<div class="index-male-title">
			<h3>女生推荐</h3>
		</div>
		<ul class="index-male-rank">
			<li class="fix" v-for="(books,key) in femalelist">
				<router-link :to="'/bookinfo/'+books._id">
					<div class="book-cover-box">
						<img v-lazy="books.cover" class="book-cover" :title="books.title">
						<div class="book-number">{{key+1}}</div>
					</div>
					<div class="book-info">
						<p class="book-title">
							{{books.title}}
						</p>
						<!--<p class="book-author">{{books.author}}</p>-->
						<p class="book-content">
							{{books.shortIntro}}
						</p>
						<ul class="book-tags fix">
							<li>{{books.author}}</li>
							<li style="float: right">{{books.majorCate}}</li>
						</ul>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
import { lazyload,Indicator } from 'mint-ui'
	export default{
		data(){
			return{

			}
		},

		props:['femalelist']
	}
</script>
