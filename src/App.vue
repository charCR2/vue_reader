<template>
  <div id="app">
      <router-view ></router-view>
    <router-link to="/home"> <button class="btn" v-show="isbutton" @click="isbtn">点击进入</button></router-link>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        isbutton:true
      }
    },
    name: 'app',
    methods:{
      isbtn(){
        this.isbutton=false;
      }
    }
  }
</script>

<style>
  #app{

  }
  .slide-enter-active,.slide-leave-active{
    transition:transform 0.5s;
  }
  .slide-enter,.slide-leave-to{
    transform:translate3d(-100vw,0px,0px);
  }

  .btn{
    display: block ;
    width: 100%;
    height: 100vh;
    text-align: center;
    background: black;
    color: white;
    font-size: 20px;
  }
</style>
