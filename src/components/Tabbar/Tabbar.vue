<template>
    <div>
       <a href="javascript:void(0)" @click="go('/home')" :class="{active: '/home'===$route.path}">
           <i class="iconfont icon-shouye"></i>
           <p>首 页</p>
       </a>
        <a href="javascript:void(0)" @click="go('/search')" :class="{active: '/search'===$route.path}">
           <i class="iconfont icon-iconset0157"></i>
           <p>搜 索</p>
       </a>
        <a href="javascript:void(0)" @click="go('/order')" :class="{active: '/order'===$route.path}">
           <i class="iconfont icon-tubiaolunkuo-"></i>
           <p>订 单</p>
       </a>
        <a href="javascript:void(0)" @click="go('/mine')" :class="{active: '/mine'===$route.path}">
           <i class="iconfont icon-weibiaoti2fuzhi12"></i>
           <p>我 的</p>
       </a>
    </div>
</template>

<script>
export default {
     methods:{
         go(path){
            this.$router.replace(path)
         }
     }
}
</script>

<style lang="less" scoped>
   .active{
       color: #007ACC;
   }
   div{
       display:flex;
       height: .45rem;
       border-top: .01rem solid lightgray;
       transform: scaleY(50%);
       position: fixed;
       bottom: 0;
       left: 0;
       width: 100%;
       padding-top: .05rem;
       a{
           text-decoration: none;
           display: inline-block;
        //    justify-content: space-around;
           flex: 1;
           color: gray;
           text-align: center;
         i{
             font-size: .22rem;
         }
         p{
             margin-top: .03rem;
             font-size: .14rem;
         }

       }
   }
</style>
