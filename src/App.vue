<template>
  <div id="app">
      <router-view ></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app',
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
  }
</style>
