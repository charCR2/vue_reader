<template>
	<div class="list-book-container">
		<m-head :backbtn="true" :title="title"></m-head>
		<listItem :Lists="Categorylist" id="booklist"></listItem>
	</div>
</template>
<script type="text/javascript">
import header from './footandhead/header'
import listItem from './listitem/listitem'
import {Indicator} from 'mint-ui'
import {getCategoryInfo} from '../api/api'
import util from '../api/util'
	export default{

    beforeRouteLeave(to,from,next){
      let myScroll = document.getElementById('booklist').scrollTop;
      if(to.name=='bookinfo'){
        this.$store.commit('SetListScroll',myScroll);
      }else{
        let a=0;
        this.$store.commit('SetListScroll',a);
      }
      next();
    },

    activated(){
      if(this.$store.state.isShowList){
        Indicator.open();
        this.getCategory();
        Indicator.close()
      }
      let scrollH=this.$store.state.listScroll;
      document.getElementById('booklist').scrollTop = scrollH;
    },

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
			this.getCategory()
		},
    methods:{
      getCategory(){
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
	}
</script>
<style type="text/css">
	.list-book-container{
		height: 91.6vh;
		overflow: hidden;
    padding-bottom: 25px;
	}
</style>
