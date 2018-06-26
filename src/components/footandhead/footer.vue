<template>
		<!--<ul class="footer-container">-->
			<!--<li><router-link to="/"><i class="iconfont  icon-bottom" :class="{'icon-shouye01':ishome,'icon-shouye02':!ishome}"></i>首页</router-link>-->
			<!--</li>-->
			<!--<li><router-link to="/category"><i class="iconfont icon-bottom" :class="{'icon-classify-red':iscategory,'icon-classify':!iscategory}"></i>分类</router-link>-->
			<!--</li>-->
			<!--<li>-->
				<!--<router-link to="/rank"><i :class="{'icon-shuxingliebiaoxiangqing2':isbookrank,'icon-shuxingliebiaoxiangqing':!isbookrank}" class="iconfont icon-bottom"></i>排名</router-link>-->
			<!--</li>-->
			<!--<li>-->
				<!--<router-link to="/me"><i :class="{'icon-wode1':isme,'icon-wode':!isme}" class="iconfont icon-bottom"></i>我的</router-link>-->
			<!--</li>-->
		<!--</ul>-->

<div>
    <mu-bottom-nav color="pink" :value.sync="shift">
      <mu-bottom-nav-item to='/' title="书架" value="书架" icon="person_outline"></mu-bottom-nav-item>
      <mu-bottom-nav-item to="/myBooks" title="今日推荐" value="今日推荐" icon="restore"></mu-bottom-nav-item>
      <mu-bottom-nav-item to="/category" title="分类" value="分类" icon="sort"></mu-bottom-nav-item>
      <mu-bottom-nav-item to="/rank" title="排行榜" value="排行榜" icon="receipt"></mu-bottom-nav-item>
    </mu-bottom-nav>
</div>


</template>
<script type="text/javascript">
	export default{
		data(){
			return{
        shift: '书架',
			}
		},
		methods:{

		},
		props: {

    }
	}
</script>
<style type="text/css">

</style>
