<template>
  <div>

    <keep-alive >
    <router-view v-if="$route.params.keepAlive"></router-view>
    </keep-alive>
      <router-view v-if="!$route.params.keepAlive"></router-view>
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
