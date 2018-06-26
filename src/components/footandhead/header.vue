<template>
  <div>
    <!--<div class="head-tab fix">-->
        <!--<a v-show="menubtn" class="iconfont icon-celanliebiaogengduo head-menu-btn" href="javascript:" ></a>-->
        <!--<router-link :to="{name:'search'}" v-show="searchbtn" class="iconfont icon-iconfontsousuo head-search-btn"></router-link>-->
        <!--<a @click="back" v-show="backbtn" class="iconfont icon-fanhui1 head-back-btn"></a>-->
        <!--<a class="head-msg" :class="{'font-center':center}">{{title}}</a>-->

    <!--</div>-->
    <mu-appbar style="width: 100%;height:40px"  z-depth="0" >
      <mu-button icon slot="left" @click="back" v-show="backbtn"><mu-icon value="arrow_back"></mu-icon></mu-button>

      <mu-button icon slot="left"  v-show="btnfalse"></mu-button>

      <mu-button icon slot="right" :to="{ name: 'search', params: { userId: +new Date() }}">
        <mu-icon value="search"></mu-icon>
      </mu-button>

    </mu-appbar>


  </div>
</template>
<script>

  export default {
    data() {
      return {

          btnfalse:true
      }
    },
    watch:{
      '$route':function(){
          this.keyword='';
      }
    },
    created(){
      if ( this.backbtn===true)
      {
        this.btnfalse=false
      }else {
        this.btnfalse=true
      }
    },
    methods:{
        back(){
          if(this.go == -1){
             this.$router.go(-1);
           }else{
            this.$router.push({name:this.go})
           }

        },

    },
    props:{
          backbtn:{
            type:Boolean,
            default:false
          },

          searchbtn:{
            type:Boolean,
            default:false
          },
          menubtn:{
            type:Boolean,
            default:false
          },
          title:{
            type:String,
            default:''
          },
          center:{
            type:Boolean,
            default:false
          },
          ifsearch:{
            type:Boolean,
            default:false
          },
          go:{
            default:-1
          }
      }
  }
</script>
<style type="text/css">

</style>
