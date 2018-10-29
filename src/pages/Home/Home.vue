<template>
    <div>
      <Head title="天津市大学软件学院">
        <span slot="left">
           <i class="iconfont icon-iconset0157"></i>
        </span>
          <span slot="right">
           <router-link to="/login">登录/注册</router-link>
        </span>
      </Head>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
         </div>
    
    </div>
</template>

<script>
import Head from '../../components/Header/Header'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  mounted() {
    new Swiper('.swiper-container',{
        loop:false,
        pagination: {
          el: '.swiper-pagination',
        }
    })
  },
    components:{
      Head
    }
}
</script>

<style lang="less" scoped>
  
  div{
    span{
      &:first-child{
        padding-left: 10px;
        i{
          font-weight: bold;
        }
      }
      &:last-child{
        text-align: center;
        a{
          text-decoration: none;
          color: #000000;
        }
      }
    }
    .swiper-container{
      height: 1.2rem;
      border-bottom: .01rem solid lightgray;
    }
  }
   
</style>
