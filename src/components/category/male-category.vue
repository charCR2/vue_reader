<!--suppress ALL -->
<template>
	<div class="male-category">
		<h3 class="category-title">男生</h3>
		<ul class="category-list">
			<li v-for="(list,index) in maleCategory" class="category-list-item">
        <mu-row @click="golist(list)">
        <mu-col span="6" ><div class="imgbox"><img :src="Imageurl(index)"   /></div></mu-col>
        <mu-col span="6">
          <p class="category-list-number" style="font-size: 15px;font-weight: bold;line-height: 40px">{{list.name}}</p>
          <p class="category-list-number">{{list.bookCount}}本</p>
        </mu-col>
        </mu-row>
      </li>
		</ul>
	</div>
</template>
<script type="text/javascript">
  import util from '../../api/util'
	export default{
		props:['maleCategory'],
		methods:{
			golist(list){
				this.$store.commit('SetCategoryList',list);
				this.$router.push({name:'categorylist',query:{gender:'male',type:'hot',major:list.name,start:0,limit:50}})
			},
      Imageurl(index){
			  return util.staticPath+this.maleCategory[index].bookCover[1]
      }
		}
	}
</script>
<style type="text/css">

	.category-title{
		padding:10px;
		border-bottom: 1px solid #EBEEF5;
		font-size: 16px;
	}
	.category-list{
		font-size: 0;
	}
	.category-list-item{
		width: 50%;
    height: 70px;
		display: inline-block;
		vertical-align: middle;
    border-right:1px solid #EBEEF5;
    border-bottom: 1px solid #EBEEF5;
    overflow: hidden;
	}
  .imgbox{
    width: 100%;
    height: 70px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }
  .imgbox img{
    margin: 0 0 0 20%;
    width: 60px;
    height: 70px;

  }
	.category-list-item>p{
    color:#555;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.category-list-number{
    height: 30px;
    line-height: 30px;
		font-size: 12px;
		color:rgba(0,0,0,0.5);
    vertical-align: middle;
	}
</style>
