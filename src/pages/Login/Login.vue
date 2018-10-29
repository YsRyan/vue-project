<template>
    <div>
       <header>
           <i class="iconfont icon-fanhui" @click="$router.back()"></i>
       </header>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    div{
        header{
            height: .3rem;
            line-height: .3rem;
            padding-left: .05rem;
            i{
                font-size: .25rem;
            }
        }
    }
</style>
