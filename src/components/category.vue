<template>
	<div class="category-container">
		<m-head :title="'分类'" :center="true"></m-head>
		<div class="category-view">
			<male-Category :maleCategory="categorylist.male"></male-Category>
			<female-Category :femaleCategory="categorylist.female"></female-Category>
		</div>
	</div>
</template>
<script type="text/javascript">
import header from './footandhead/header'
import maleCategory from './category/male-category'
import femaleCategory from './category/female-category'
import {getCategories} from '../api/api'

	export default{
		name:'category',
		data(){
			return{
				categorylist:{}
			}
		},
		components:{
			'm-head':header,
			'male-Category':maleCategory,
			'female-Category':femaleCategory,
		},
		created(){
			getCategories().then((res)=>{
				this.categorylist=res.data;
			}).catch((err)=>{
				console.log(err);
			})
		}
	}
</script>
<style type="text/css">
  body a{
    margin:0;
    color: #555;
  }
	.category-container{
		position: relative;
		height: 91vh;
		overflow:hidden;
    padding-bottom: 25px;
	}
	.category-view{
		height: 97.5%;
		overflow-y:scroll;
	}
</style>
