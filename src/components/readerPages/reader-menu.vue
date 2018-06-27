<template>
	<div class="reader-menu-container">

		<div v-show="isMenuShow" class="reader-menu-top">
      <mu-icon value="arrow_back_ios" @click="back()" style="vertical-align: middle;padding-left: 20px"></mu-icon>
				<!--<i class="iconfont icon-fanhui2 icon-reader-back" ></i>-->
		</div>
		<div  v-show="isMenuShow" class="reader-menu-bottom fix">
			<a @click="showcatlog"  class="reader-menu-tabs reader-menu-toc" href="javascript:"><mu-icon  class="reader-icon-tabs"value="book">目录</mu-icon></a>
			<a @click="fontmenu" class="reader-menu-tabs reader-menu-font" href="javascript:"><mu-icon class="reader-icon-tabs" value="settings">设置</mu-icon></a>
			<a @click="showsources" class="reader-menu-tabs reader-menu-source" href="javascript:"><mu-icon class="reader-icon-tabs" value="language">换源</mu-icon></a>
			<a @click="nightmode" class="reader-menu-tabs reader-menu-night" href="javascript:"><mu-icon class="reader-icon-tabs " :value="isnighticon">日/夜</mu-icon></a>
			<div v-show="isFontMenuShow" class="reader-font-set">
        <div class="reader-font-size">
          <mt-range
            v-model="fontsize"
            :min="14"
            :max="24"
            :step="2"
            :bar-height="1">
            <div slot="start">1&nbsp</div>
            <div slot="end">&nbsp6</div>
          </mt-range>
        </div>
        <ul class="reader-font-box">
        <li v-for="(Font,index) in font"  class="fontbtn" :class="[{buttonfocus:isactivefont[index]}]" @click="fontchange(Font.fontvalue,index)"  :style="{fontFamily:Font.fontvalue}">{{Font.name}}</li>
        </ul>
        <ul class="reader-font-bg">
          <li :class="{readerFontBgActive:isactive[index]}" @click="bgchange(color,index)" :style="{backgroundColor:color}" v-for="(color,index) in colors">
          </li>
        </ul>
			</div>
      <ul class="reader-chapter-go">
        <li  @click="chapterup" ></li>
        <li> {{Now}}/{{Total}}</li>
        <li  @click="chapterdown" ></li>
      </ul>
		</div>
	</div>
</template>
<script type="text/javascript">
import { Toast } from 'mint-ui'
export default{

	created(){
		let num = localStorage.getItem('mybgnum');
		let i=0 ;
		for( i in this.isactive){
			this.$set(this.isactive,i,false);
		}
		this.$set(this.isactive,num,true);
    let num2 = localStorage.getItem('myfontnum');
    let j=0 ;
    for( j in this.isactivefont){
      this.$set(this.isactivefont,j,false);
    }
    this.$set(this.isactivefont,num2,true);
    let num3 = localStorage.getItem('myfontsize');
    this.fontsize=num3;
  },

	props:['isMenuShow','Now','Total'],
	data(){
		return{
		  fontsize:14,
			isnight:false,
      isnighticon:'wb_sunny',
			beforecolor:'',
			isFontMenuShow:false,
			colors:['#f7eee5','#e9dfc7','#0f1410','#cdefce','#283548','#a4a4a4'],
			isactive:[true,false,false,false,false,false],
      isactivefont:[true,false,false,false],
      font:[
        {
		    name:'系统字体',
        fontvalue:''
      },
      {
        name:'仿宋字体',
        fontvalue:'fangsong'
      },
      {
        name:'毛笔字体',
        fontvalue:'ygy',
      },
      {
        name:'楷书字体',
        fontvalue:'kaishu',
      }
      ]
		}
	},
	watch:{
		'$route.params':function(){
			if(this.$route.name=='reader'){
				this.isMenuShow=false;
			}
		},
    'fontsize':(val, oldVal)=>{//普通的watch监听
      localStorage.setItem('myfontsize',val);
      document.getElementById('reader-page-view').style.fontSize=val+'px';
    },
	},
	methods:{
		showcatlog(){
			this.$store.commit('ChangeDetail','catlog')
			this.$nextTick(function(){
				let top = (this.Now - 1) * 45
				document.getElementById('test').scrollTop=top;
			})

		},
		showsources(){
			this.$store.commit('ChangeDetail','source')
		},
		bgchange(color,num){
			localStorage.setItem('mybgcolor',color);
			localStorage.setItem('mybgnum',num);
			//  循环无法让class更新
			let i=0 ;
			for( i in this.isactive){
				this.$set(this.isactive,i,false);
			}
			this.$set(this.isactive,num,true);
			document.getElementById('reader-page-view').style.background=color;
		},

    fontchange(font,num){
      localStorage.setItem('myfont',font);
      localStorage.setItem('myfontnum',num);
      let i=0 ;
      for( i in this.isactivefont){
        this.$set(this.isactivefont,i,false);
      }
      this.$set(this.isactivefont,num,true);
      document.getElementById('reader-page-view').style.fontFamily=font;
    },
		nightmode(){
			if(!this.isnight){
			this.beforecolor = localStorage.getItem('mybgcolor')?localStorage.getItem('mybgcolor'):'#f7eee5';
			localStorage.setItem('mybgcolor','#0f1410');
			this.isnight=true;
			this.isnighticon='cloud';
			document.getElementById('reader-page-view').style.background='#0f1410';
			}else{
			localStorage.setItem('mybgcolor',this.beforecolor);
			document.getElementById('reader-page-view').style.background=this.beforecolor;
        this.isnight=false;
        this.isnighticon='wb_sunny';
			}

		},
		menuswich(){
			this.isMenuShow=!this.isMenuShow;
			this.isFontMenuShow=false;
		},
		fontmenu(){
			this.isFontMenuShow=!this.isFontMenuShow
		},
		back(){
			this.$router.go(-1);
		},
		chapterup(){
			this.$emit('prev')
		},
		chapterdown(){
			this.$emit('next')
		}
	}
}
</script>
<style type="text/css">
	.reader-menu-top{
		width: 100%;
		height: 50px;
		color: #d5d5d6;
		position: fixed;
		line-height: 50px;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.9);
		z-index: 90;
	}
	.icon-reader-back{
		height: 100%;
		position: absolute;
		left: 10px;
		top:0;
		font-size: 32px;
	}
	.reader-tap-area{
		width: 50%;
		height: 20%;
		position:fixed;
		left: 25%;
		top:40%;
		z-index: 0;
	}
	.reader-menu-bottom{
		width: 100%;
		background-color: rgba(0, 0, 0, 0.9);
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 90;
	}
	.reader-menu-tabs,.reader-menu-tabs:visited,.reader-menu-tabs:hover{
		float: left;
		width: 25%;
		text-align: center;
		line-height: 18px;
		color: #fff;
		height: 60px;
		font-size: 12px;
	}
	.reader-icon-tabs{
		font-size: 20px;
		display: block;
		height: 35px;
		line-height: 40px;
	}
	.reader-menu-toc::after{
		content:'\76ee\5f55';
	}
	.reader-menu-font::after{
		content:'\8bbe\7f6e\000d\000a';
	}
	.reader-menu-source::after{
		content:'\6362\6e90\000d\000a';
	}
	.reader-menu-night::after{
		content:'\65e5\002f\591c';
	}
	.reader-font-set{
		width: 100%;
		height: 150px;
		position: absolute;
		bottom: 110px;
		background-color: rgba(0,0,0,0.9);
		border-bottom: 1px solid #ddd;
		z-index: 90;
	}
	.reader-font-bg{
		width: 100%;
		margin: 12px 2%;
		height: 40px;
		padding: 9px 12px;
	}
	.reader-font-bg>span{
		font-size: 13px;
		color: #fff;
		line-height: 20px;
		vertical-align: middle;
		margin:0 10px 0 5px;
	}
	.reader-font-bg>li{
		vertical-align: middle;
		display: inline-block;
    margin: auto 2%;
		width: 12%;
    height: 26px;
		background-color: #fff;

	}
  .fontbtn{
    width: 18%;
    height: 35px;
    text-align: center;
    background: rgba(0,0,0,0);
    border:1px solid #fff;
    font-size: 12px;
    line-height: 35px;
    color: #fff;
    float: left;
    margin: auto 3%;
    border-radius: 5px;

  }
  .buttonfocus{
    border:1px solid #ff7800;
    color: #ff7800;
  }
  .reader-font-box{
    width: 100%;
    height: 20px;
    margin:20px 7px;
  }
  .reader-font-size{
    width: 100%;
    height: 25px;
    padding:13px 30px 26px 30px;
  }
	.readerFontBgActive{
		border:1px solid #ff7800;
	}
	.reader-chapter-go{
		width: 100%;
		height: 50px;
		position:absolute;
		bottom: 60px;
		background-color: rgba(0,0,0,0.9);
		font-size: 0;
		z-index: 80;
		border-bottom:1px solid #ddd;
	}
	.reader-chapter-go>li{
    color: white;
		display: inline-block;
		width: 33%;
    height: 50px;
		font-size: 15px;
		line-height: 50px;
		text-align:center;
	}
	.reader-chapter-go>li:first-child::before{
		content:'\4e0a\4e00\7ae0';
	}
	.reader-chapter-go>li:last-child::before{
		content:'\4e0b\4e00\7ae0';
	}

</style>
