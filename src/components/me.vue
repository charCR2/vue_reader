<template>
	<div class="myfollow-book-container">
		<m-head :title="'我的书架'" :center="true"></m-head>
		<div class="myfollow-book-view">
			<div @click="$router.push({path:'/myBooks'})" v-show="nobook" class="myfollow-noitem">
			</div>
			<p class="myfollow-book-msg" v-show="nobook">书架空空如也，点击发现</p>
			<ul class="myfollow-book-list">
				<li class="myfollow-book-item" v-for="(book,key) in followbook">
					<a @click="readbook(key)" @touchstart="ontouchstart(key)" @touchmove="ontouchmove" @touchend="ontouchend"><img v-lazy="book.cover">
						<p>{{book.title}}</p></a>
				</li>
			</ul>
		</div>

	</div>
</template>
<script type="text/javascript">
import header from './footandhead/header'
import {MessageBox} from 'mint-ui'
import util from '../api/util'
import {getBookSources} from '../api/api'
import _ from 'lodash'
	export default{
		data(){
			return{
				nobook:true,
				timer:null,
				followbook:{}
			}
		},
		components:{
			'm-head':header
		},
		created(){
			this.getfollowbook()
		},
    watch:{
      '$route' (to, from) {
        if(to.name === 'me'){
          this.getfollowbook()
        }
      }
    },
		methods:{
			ontouchstart(id){
					this.timer= setTimeout(()=>{
					MessageBox.confirm('确定要这么做？','取消收藏').then(action=>{
						let localShelf = util.getLocalData('myfollowbook') ? util.getLocalData('myfollowbook'):{};
						delete localShelf[id];
						util.setLocalData('myfollowbook',localShelf);
						this.getfollowbook();
					}).catch((err)=>{
						return
					})
				},1000)
			},
			ontouchmove(){
				clearTimeout(this.timer);
			},
			ontouchend(){
				clearTimeout(this.timer);
			},
			getfollowbook(){
				let localShelf = util.getLocalData('myfollowbook') ? util.getLocalData('myfollowbook'):{};
				if(!_.isEmpty(localShelf)){
						for(let id in localShelf ){
						localShelf[id].cover =util.staticPath+localShelf[id].cover;
					}
					this.followbook = localShelf;
					this.nobook=false;
				}else{
					this.nobook=true;
					this.followbook={};
				}
			},
			readbook(id){
				let localShelf =util.getLocalData('myfollowbook')?util.getLocalData('myfollowbook'):{}
				if(!localShelf[id].source){
					getBookSources({'view':'summary','book':id}).then(res=>{
						this.$store.commit('SetSourceId',res.data[0]._id)
					})
				}else{
					this.$store.commit('SetSourceId',localShelf[id].source)
				}
				this.$store.commit('SetBookInfo',localShelf[id])
				this.$router.push({'name':'reader',params:{bookid:id}})
			}
		}
	}
</script>
<style type="text/css">
  body a{
    margin:0;
    color: #555;
  }
	.myfollow-book-container{
		position: relative;
		height: 91vh;
		overflow: hidden;
    padding-bottom: 25px;
	}
	.myfollow-book-view{

		height: 97.5%;
		overflow-y: scroll;
	}
	.myfollow-book-list{
		font-size: 0;
	}
	.myfollow-book-item{
		display: inline-block;
		width: 33.33%;
		padding: 10px 14px;
	}
	.myfollow-book-item>a img{
		margin:0 auto;
		width: 86px;
		height: 113px;
		border-radius: 4px;
		box-shadow: 0 5px 10px #555;
	}
	.myfollow-book-item>a p{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 16px;
		color: #555;
		text-align: center;
		margin-top: 5px;
	}
	.myfollow-noitem{
		width: 150px;
		height: 150px;
		border-radius: 50%;
		position: absolute;
		margin:auto;
		left: 0;
		top:0;
		right: 0;
		bottom: 0;
		background-color: #555;
		background: url(https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=bc98cacd41fbfbedc8543e2d19999c53/b7003af33a87e950d31da89e1a385343fbf2b43e.jpg)
		no-repeat;
		background-size: 150px 150px;
		background-position: center;
	}
	.myfollow-book-msg{
		text-align: center;
		margin-top: 15vh;
	}
</style>
