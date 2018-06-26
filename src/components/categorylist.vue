<template>
	<div class="list-book-container">
		<m-head :backbtn="true" :title="title"></m-head>
		<listItem :Lists="Categorylist"></listItem>
	</div>
</template>
<script type="text/javascript">
import header from './footandhead/header'
import listItem from './listitem/listitem'
import {Indicator} from 'mint-ui'
import {getCategoryInfo} from '../api/api'
import util from '../api/util'
	export default{
		data(){
			return{
				title:'',
				Categorylist:{}
			}
		},
		components:{
			'm-head':header,
			listItem
		},
		created(){
			Indicator.open();
			getCategoryInfo(this.$route.query).then(res=>{
				res.data.books.forEach((book)=>{
					book.cover=util.staticPath+book.cover;
				})
				this.Categorylist=res.data.books;
				this.title=this.$store.state.CategoryList.name;
				Indicator.close()
			})
		}
	}
</script>
<style type="text/css">
	.list-book-container{
		height: 91vh;
		overflow: hidden;
    padding-bottom: 25px;
	}
</style>
