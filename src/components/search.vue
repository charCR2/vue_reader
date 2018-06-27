<template>
	<div class="search-contaier">
    <mu-appbar style="width: 100%;height:50px"  z-depth="0" color="#fff">
    <div  class="search-input-group">
      <input @keydown="keydownsearch" class="search-input-text" v-model="keyword" type="text" name="searchBook" placeholder="输入书名/作者/关键字">
    </div>
      <mu-button icon  @click="searchbook" slot="right">
        <mu-icon value="search" color="black"></mu-icon>
      </mu-button>
    </mu-appbar>
		<ul class="search-hotwords-container fix" v-show="showHotword">
      <div style="margin: 10px 0px">
        <h4>热门搜索</h4>
      </div>
				<li class="search-hotwords" :style="bgcolor[index]" v-for="(item,index) in hotwords">
					<a @click="tags(item.word)" href="javascript:">{{ item.word}}</a>
				</li>
		</ul>
		<div class="no-result" v-show="noResult">
			<p>搜索结果未找到</p>
		</div>
		<listItem :Lists="lists"></listItem>

	</div>
</template>

<script type="text/javascript">
  import {Toast,Indicator} from 'mint-ui'
import listitem from './listitem/listitem'
import {getSearchHotwords, getSearchResult} from '../api/api'
import util from '../api/util'
	export default{
		components:{
			'listItem':listitem
		},
		data(){
			return{
        keyword:'',
				lists:{},
				hotwords:{},
				bgcolor:[],
				noResult:false,
				showHotword:true
			}
		},
		created(){
			this.getSearchHot()
		},
		beforeRouteLeave(to,from,next){
			this.$store.commit('SetSearchResult',{})
			next();
		},
		watch:{
			'$store.state.SearchResult':function(){
				if(this.$store.state.SearchResult.total==0){
					this.noResult=true;
				}else{
					this.noResult=false;
					document.getElementById('list-view').scrollTop= 0;
					this.lists=this.$store.state.SearchResult.books;
				}
			},

		},
		methods:{
      keydownsearch(el){
        if(el.keyCode == 13){
          this.searchbook()
        }
      },
      searchbook(){
        Indicator.open()
        if(this.keyword == ''){
          Toast({
            message:'请输入关键字',
            duration:2000
          })
          Indicator.close()
          return;
        }
        getSearchResult({query:this.keyword}).then(res=>{
          res.data.books.forEach(book=>{
            book.cover = util.staticPath+book.cover;
          })
          this.$store.commit('SetSearchResult',res.data);
          this.showHotword=false
          Indicator.close()
        })
      },
		  getSearchHot(){
        getSearchHotwords().then(res=>{
          this.hotwords = res.data.searchHotWords.slice(0,10);
          this.randomcolor()
        })
      },
			randomcolor(){
				let colors=['#FF6666','#33CC99','#006699','#FF9966','#0066CC','#339933','#FFCC33','#336699','#FF9900','#99CC33','#0099CC','#FF0033']
				for(let i=0;i<10;i++){
					let num = parseInt(Math.random()*colors.length - 1)
					this.bgcolor[i]={
						'background':colors[num]
					}
				}
			},
			tags(word){
        Indicator.open()
	          getSearchResult({query:word}).then(res=>{
	              res.data.books.forEach(book=>{
	                book.cover = util.staticPath+book.cover;
	              })
                this.showHotword=false
	              this.$store.commit('SetSearchResult',res.data);
              Indicator.close()
	            })
			}
		}
	}
</script>
<style type="text/css">
	.search-contaier{
		height: 91vh;
		overflow: hidden;
		position: relative;
    padding-bottom: 25px;
	}
	.search-input-group{
		position: absolute;
		height: 34px;
		top: 3px;
		left: 0;
		width: 100%;
		padding:0 45px 0 28px;
		font-size: 0;
	}
	.search-input-text{
		height: 32px;
		width: 100%;
		outline: none;
		padding:5px 0 0 10px;
		font-size: 16px;
		background-color:#FFF;
		border-bottom:1px solid #65b1ff;
	}
	.search-input-text::-webkit-input-placeholder{
		color:black;
	}
	.search-input-text:-moz-placeholder{
    color:black;
	}
	.search-input-text::-moz-placeholder{
    color:black;
  }
	.search-input-text:-ms-input-placeholder{
    color:black;
	}

	.no-result{
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size:18px;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		margin:auto;
	}
	.search-hotwords-container{
		padding: 10px 25px;
	}
	.search-hotwords-container>h3{
		font-weight: normal;
		font-size: 16px;
		margin-bottom: 10px;
	}
	.search-hotwords{
		margin:0px 10px 10px 0;

		float: left;
	}
	.search-hotwords>a{
		padding:5px 10px;
		border-radius: 4px;
		color:black;
	}
</style>
