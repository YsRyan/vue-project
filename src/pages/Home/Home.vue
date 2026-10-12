<template>
    <div class="home">
      <Head title="天津市大学软件学院">
        <span slot="left">
           <i class="iconfont icon-iconset0157" @click="$router.push('/search')"></i>
        </span>
        <span slot="right" class="auth">
           <template v-if="user">
             <router-link to="/mine" class="username">{{ user.username }}</router-link>
             <a href="javascript:void(0)" @click="handleLogout">退出</a>
           </template>
           <template v-else>
             <router-link :to="{ path: '/login', query: { mode: 'login' } }">登录</router-link>
             /
             <router-link :to="{ path: '/login', query: { mode: 'register' } }">注册</router-link>
           </template>
        </span>
      </Head>
      <section class="welcome">
        <template v-if="user">
          <p class="title">欢迎回来，{{ user.username }}</p>
        </template>
        <template v-else>
          <p class="title">登录后享受更多服务</p>
          <div class="actions">
            <button class="btn primary" @click="goLogin('login')">登录</button>
            <button class="btn" @click="goLogin('register')">注册</button>
          </div>
        </template>
      </section>
    </div>
</template>

<script>
import Head from '../../components/Header/Header'
import { logout } from '../../api/user'
import { getUser, clearAuth } from '../../utils/auth'

export default {
  data () {
    return {
      user: getUser()
    }
  },
  methods: {
    goLogin (mode) {
      this.$router.push({ path: '/login', query: { mode } })
    },
    handleLogout () {
      logout().catch(() => {}).then(() => {
        clearAuth()
        this.user = null
      })
    }
  },
  components: {
    Head
  }
}
</script>

<style lang="less" scoped>
  .home{
    span{
      &:first-child{
        padding-left: 10px;
        i{
          font-weight: bold;
        }
      }
    }
    .auth{
      text-align: center;
      white-space: nowrap;
      a{
        text-decoration: none;
        color: #000000;
      }
      .username{
        display: inline-block;
        max-width: .6rem;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: top;
        margin-right: .06rem;
        color: #007ACC;
      }
    }
    .welcome{
      padding: .3rem .2rem;
      text-align: center;
      border-bottom: .01rem solid lightgray;
      .title{
        font-size: .16rem;
        color: #333;
      }
      .actions{
        margin-top: .15rem;
        display: flex;
        justify-content: center;
      }
      .btn{
        width: 1rem;
        height: .34rem;
        margin: 0 .1rem;
        font-size: .14rem;
        border: .01rem solid #007ACC;
        border-radius: .04rem;
        background: #fff;
        color: #007ACC;
        &.primary{
          background: #007ACC;
          color: #fff;
        }
      }
    }
  }
</style>
