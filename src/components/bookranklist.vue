<template>
	<div class="rank-list-container" >
		<m-head :backbtn="true" :title="title"></m-head>
		<listItem :Lists="ranklist" id="rankList"></listItem>
	</div>
</template>
<script type="text/javascript">
import header from './footandhead/header'
import listItem from './listitem/listitem'
import {getRank} from '../api/api'
import {Indicator} from 'mint-ui'
import util from '../api/util'

	export default{
		components:{
			'm-head':header,
			listItem
		},

    beforeRouteLeave(to,from,next){
      let myScroll = document.getElementById('rankList').scrollTop;
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
        this.getRanklists();
        Indicator.close()
      }
      let scrollH=this.$store.state.listScroll;
      document.getElementById('rankList').scrollTop = scrollH;

    },

		data(){
			return{
				title:''
			}
		},

		created(){
      this.getRanklists();
		},

    methods:{
		  getRanklists(){
        Indicator.open();
        getRank(this.$route.params.rankid).then(res=>{
          res.data.ranking.books.forEach(list=>{
            list.cover=util.staticPath+list.cover;
          });
          this.ranklist= res.data.ranking.books;
          this.title=this.$store.state.RankList.title;
          Indicator.close()
        })
      }
    }
	}
</script>
<style type="text/css">
	.rank-list-container{
		height: 91.6vh;
		overflow: hidden;
    padding-bottom: 25px;
	}
</style>
