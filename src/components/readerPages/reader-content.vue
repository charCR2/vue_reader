<template>
		<div id="reader-page-view" class="reader-content-box" :style='bkcolor' ref="readerview">
			<h3 class="reader-title">{{ Title }}</h3>
			<p class="reader-content" v-for="text in Content">{{text.trim()}}</p>
		</div>
</template>
<script type="text/javascript">
import {Indicator} from 'mint-ui'
import _ from 'lodash'
	export default{
		created(){
		  //获取背景颜色
			let localColor = localStorage.getItem('mybgcolor')?localStorage.getItem('mybgcolor'):'';
			this.bkcolor.background= localColor;
			//获取字体
      let localfont = localStorage.getItem('myfont')?localStorage.getItem('myfont'):'';
      this.bkcolor.fontFamily= localfont;
      //获取字体大小
      let localfontsize = localStorage.getItem('myfontsize')?localStorage.getItem('myfontsize'):'';
      this.bkcolor.fontSize= localfontsize+'px';
		},
		props:['bookContent','Title'],
		data(){
			return{
				bkcolor:{
					background:'',
          fontFamily:'',
          fontSize:''
				},
				loading:false
			}
		},
		computed:{
			Content(){
				if(!_.isEmpty(this.bookContent)){
				let text = this.bookContent && this.bookContent.cpContent ? 'cpContent' : 'body'
				return this.bookContent[text].split('\n')
				}
			}
		}
	}
</script>
<style type="text/css">
	.reader-content-box{
		padding: 15px 0;
		max-width: 900px;
		margin:0 auto;
		height: 100vh;
		overflow: hidden;
	}
	.reader-content{
    color: #555;
		line-height: 2;
		margin:0 15px;
		text-indent: 2em;
		word-break: break-all;
	}
	.reader-title{
		font-size: 20px;
		margin:0 15px;
		border-bottom:1px solid #736357;
		margin-bottom: 10px;
		line-height: 31px;
	}
</style>
