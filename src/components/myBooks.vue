<template>
  <div class="index-container">
    <keep-alive>
    <div class="index-main-box">
      <m-head  :menubtn="true" :title="'阅读器'" :center="true"></m-head>
      <div class="index-scroll-view" ref="indexview">
        <indexMale :malelist="malelist"></indexMale>
        <indexFemale :femalelist="femalelist"></indexFemale>
        <indexNewbook :newslist="newslist"></indexNewbook>
        <!--<indexChannel></indexChannel>-->
      </div>
    </div>
    </keep-alive>
  </div>
</template>

<script>
  import indexHeader from './footandhead/header'
  import indexMale from './pages/index-male'
  import indexFemale from './pages/index-female'
  import indexNewbook from "./pages/index-newbook"
  import {getRankCategory,getRank} from "../api/api"
  import util from "../api/util"
  import {Indicator} from 'mint-ui'
  export default {
    components:{
      'm-head':indexHeader,
      indexMale,
      indexFemale,
      indexNewbook
    },
    data(){
      return{
        malelist:[],
        femalelist:[],
        newslist:[]
      }
    },
    created(){
      getRankCategory().then(res=>{
        let maleid = res.data.male[this.randomnum(res.data.male)]._id;
        let femaleid = res.data.female[this.randomnum(res.data.female)]._id;
        let newsid = res.data.epub[this.randomnum(res.data.epub)]._id;
        this.getbooklist(maleid,this.malelist);
        this.getbooklist(femaleid,this.femalelist);
        this.getbooklist(newsid,this.newslist);
      }).catch(err=>{
        console.log(err)
      })

    },
    methods:{
      randomnum(arr){
        return parseInt((Math.random()*(arr.length - 1)));
      },
      getbooklist(id,list){
        Indicator.open();
        getRank(id).then(res=>{
          let books=res.data.ranking.books.slice(0,10);
          books.forEach((book)=>{
            book.cover=util.staticPath+book.cover;
            list.push(book);
          })
          Indicator.close()
        }).catch(err=>{
          console.log(err)
          Indicator.close()
        })
      }
    }
  }
</script>

<style>

  body a{
    margin:0;
    color: #555;
  }
  ul{
    display: block;
    list-style-type: none;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0;
  }
  .index-main-box{
    height: 91vh;
    overflow: hidden;
    padding-bottom: 25px;
  }
  .index-scroll-view{
    overflow-y: scroll;
    height:97.5%;

  }
</style>
