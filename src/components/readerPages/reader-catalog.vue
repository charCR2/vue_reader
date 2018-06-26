 <template>
	<transition name="catalogslide">
	<div v-show="menu" class="reader-catalog">
		<div class="reader-menu-top">
				<!--<i  class="iconfont icon-fanhui2 icon-reader-back"></i>-->
      <mu-icon value="arrow_back_ios" @click='hidelist' style="vertical-align: middle;padding-left: 20px"></mu-icon>
				<p v-show="this.$store.state.isShowCatlog" class="catlog-reverse" @click="toChapter">章节跳跃</p>
		</div>
		<ul id="test" v-show="this.$store.state.isShowCatlog" class="book-catalog">
			<a @click="changeChapter(index)" href="javascript:"  v-for='(list,index) in catlog'><li class="catalog-lists">{{list.title}}</li></a>
		</ul>
		<ul v-show="this.$store.state.isShowSource" class="book-catalog">
			<a @click="changeSource(list._id)" href="javascript:"  v-for='(list,index) in sources'>
				<li class="catalog-lists"><p>{{list.name}}</p>最后更新：{{list.lastChapter}}</li>
			</a>
		</ul>
	</div>
	</transition>
</template>
<script type="text/javascript">
import util from '../../api/util'
import {MessageBox,Toast} from 'mint-ui'
	export default{
		props:['catlog','sources','Total'],
		methods:{
			hidelist(){
				this.$store.commit('ChangeDetail')
			},
			changeChapter(index){
				this.$emit('ChangeChapter',index);
			},
			changeSource(id){
				let localShelf = util.getLocalData('myfollowbook')?util.getLocalData('myfollowbook'):{};
			if(!localShelf[this.$route.params.bookid]){
					this.$store.commit('SetSourceId',id);
					util.setLocalData('myfollowbook',localShelf);
					this.$emit('ChangeSource')
					this.$store.commit('ChangeDetail');
				}else{
					localShelf[this.$route.params.bookid].source=id;
					this.$store.commit('SetSourceId',id);
					util.setLocalData('myfollowbook',localShelf);
					this.$emit('ChangeSource')
					this.$store.commit('ChangeDetail');
				}
			},
			toChapter(){
				MessageBox.prompt('请输入想去的章节').then(data=>{
					if(data.value<=this.Total&&data.value>0){
						this.$emit('ChangeChapter',parseInt(data.value-1))
					}
				}).catch(()=>{})
			}
		},
		computed:{
			menu(){
				return this.$store.state.isShowCatlog || this.$store.state.isShowSource
			}
		}
	}
</script>
<style type="text/css">
	.catalogslide-enter-active{
		transition-duration: 0.4s;
	}
	.catalogslide-enter{
		transform:translate3d(100vw,0,0);
	}
	.reader-catalog{
		height: 100%;
		width: 100%;
		background-color:#FFF;
		position: fixed;
		left: 0;
		top:0;
		z-index: 100;
	}
	.book-catalog{
		margin-top: 50px;
		padding-bottom: 50px;
		width: 100%;
		height: 100%;
		overflow-y: auto;
	}
	.catalog-lists{
		overflow-x:hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding:10px 14px;
		color: #555;
		border-bottom: 1px solid #ddd;
	}
	.catlog-reverse{
		position: absolute;
		right: 10px;
		top: 0;
	}
</style>
