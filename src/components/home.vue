<template>
  <div>

    <keep-alive exclude="myBooks,category,rank">
    <router-view></router-view>
    </keep-alive>

    <m-foot></m-foot>
  </div>
</template>

<script>
  import footer from './footandhead/footer'
    export default {
        name: "home",
      components:{
        'm-foot':footer,
      },
    }
</script>

<style scoped>

</style>
