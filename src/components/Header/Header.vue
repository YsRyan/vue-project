<template>
    <div class="header">
       <span class="left"><slot name="left"></slot></span>
       <span class="title">
           {{ title }}
       </span>
       <span class="right"><slot name="right"></slot></span>
    </div>
</template>

<script>
export default {
    props:{
        title:String
    }
}
</script>

<style lang="less" scoped>
  .header{
      height: .4rem;
      background-color: lightblue;
      line-height: .4rem;
      display: flex;
      > span{
          text-align: center;
          overflow: hidden;
      }
      .left{
        flex: 1;
      }
      .title{
        flex: 3;
      }
      .right{
        flex: 2;
      }
  }
</style>
