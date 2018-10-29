<template>
    <div>
       <slot name="left"></slot>
       <span>
           {{ title }}
       </span>
       <slot name="right"></slot>
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
  div{
      height: .4rem;
      background-color: lightblue;
      line-height: .4rem;
      display: flex;
      span{
          text-align: center;
          overflow: hidden;
          &:nth-of-type(1){
            flex: 1;
          }
          &:nth-of-type(2){
            flex: 3;
          }
          &:nth-of-type(3){
            flex: 2;
          }
      }
  }
</style>
