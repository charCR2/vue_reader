<template>
<transition name="bookinfo" mode="in-out">
	<div class="book-info-main">
		<m-head :backbtn="true" :go="backstep" :title="'书籍详细'"></m-head>
		<div class="book-info-container" id='book-info-view'>
			<info-content></info-content>
			<info-recommend></info-recommend>
		</div>
	</div>
</transition>
</template>
<script type="text/javascript">
import header from '../footandhead/header'
import infocontent from './info-content'
import inforecommend from './info-recommend'
import { Indicator } from 'mint-ui'
	export default{
		data(){
			return{
				backstep:-1
			}
		},
		beforeRouteEnter(to,from,next){
			if(from.name == 'home'){
				next(vm=>{
					vm.backstep = 'home';
				})
			}else{
				next()
			}
	    },
	    beforeRouteUpdate(to,from,next){
	    	document.getElementById('book-info-view').scrollTop=0;
	    	next()
	    },
		components:{
			'm-head':header,
			'info-content':infocontent,
			'info-recommend':inforecommend
		}
}

</script>
<style type="text/css">
	.bookinfo-enter-active,.bookinfo-leave-active{
		transition-duration: 0.3s;
	}
	.bookinfo-leave-to,.bookinfo-enter{
		transform:translate3d(100vw,0px,0px);
	}
	.book-info-main{
		height: 91vh;
		width: 100%;
		overflow:hidden;
    padding-bottom: 25px;

	}
	.book-info-container{
		height: 97.5%;
		overflow-y:scroll;
	}
</style>
