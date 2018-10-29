<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar v-if="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar/Tabbar'
import Head from './components/Header/Header'
export default {
    components:{
        Tabbar
    }
}
</script>
<style lang="less" scoped>
   div{
     font-size: .16rem;
   }
</style>
