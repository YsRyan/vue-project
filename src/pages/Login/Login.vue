<template>
    <div class="login">
       <header>
           <i class="iconfont icon-fanhui" @click="$router.back()"></i>
       </header>
       <div class="tabs">
         <a href="javascript:void(0)" :class="{ active: mode === 'login' }" @click="switchMode('login')">登录</a>
         <a href="javascript:void(0)" :class="{ active: mode === 'register' }" @click="switchMode('register')">注册</a>
       </div>
       <form class="form" @submit.prevent="submit">
         <input v-model.trim="form.username" type="text" placeholder="用户名（3-20 位字母、数字或下划线）" autocomplete="username">
         <input v-model="form.password" type="password" placeholder="密码（6-20 位）" :autocomplete="mode === 'login' ? 'current-password' : 'new-password'">
         <input v-if="mode === 'register'" v-model="form.confirm" type="password" placeholder="确认密码" autocomplete="new-password">
         <p class="error" v-if="error">{{ error }}</p>
         <button type="submit" :disabled="loading">{{ loading ? '请稍候...' : (mode === 'login' ? '登 录' : '注 册') }}</button>
       </form>
    </div>
</template>

<script>
import { login, register } from '../../api/user'
import { setToken, setUser } from '../../utils/auth'

const USERNAME_RE = /^\w{3,20}$/

export default {
  data () {
    return {
      mode: this.$route.query.mode === 'register' ? 'register' : 'login',
      form: { username: '', password: '', confirm: '' },
      error: '',
      loading: false
    }
  },
  watch: {
    '$route.query.mode' (mode) {
      this.mode = mode === 'register' ? 'register' : 'login'
      this.error = ''
    }
  },
  methods: {
    switchMode (mode) {
      if (mode !== this.mode) {
        this.$router.replace({ path: '/login', query: { ...this.$route.query, mode } })
      }
    },
    validate () {
      const { username, password, confirm } = this.form
      if (!USERNAME_RE.test(username)) return '用户名需为 3-20 位字母、数字或下划线'
      if (password.length < 6 || password.length > 20) return '密码长度需为 6-20 位'
      if (this.mode === 'register' && password !== confirm) return '两次输入的密码不一致'
      return ''
    },
    async submit () {
      this.error = this.validate()
      if (this.error || this.loading) return
      this.loading = true
      const { username, password } = this.form
      try {
        if (this.mode === 'register') {
          await register({ username, password })
        }
        const { token, user } = await login({ username, password })
        setToken(token)
        setUser(user || { username })
        this.$router.replace(this.$route.query.redirect || '/home')
      } catch (e) {
        this.error = e.message
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
    .login{
        header{
            height: .3rem;
            line-height: .3rem;
            padding-left: .05rem;
            i{
                font-size: .25rem;
            }
        }
        .tabs{
            display: flex;
            justify-content: center;
            margin: .2rem 0;
            a{
                margin: 0 .2rem;
                padding-bottom: .05rem;
                font-size: .18rem;
                color: gray;
                text-decoration: none;
                &.active{
                    color: #007ACC;
                    border-bottom: .02rem solid #007ACC;
                }
            }
        }
        .form{
            padding: 0 .25rem;
            input{
                display: block;
                width: 100%;
                height: .42rem;
                margin-bottom: .12rem;
                padding: 0 .1rem;
                box-sizing: border-box;
                font-size: .14rem;
                border: .01rem solid lightgray;
                border-radius: .04rem;
                outline: none;
                &:focus{
                    border-color: #007ACC;
                }
            }
            .error{
                margin-bottom: .1rem;
                font-size: .13rem;
                color: #e64340;
            }
            button{
                width: 100%;
                height: .42rem;
                font-size: .16rem;
                color: #fff;
                background: #007ACC;
                border: none;
                border-radius: .04rem;
                &[disabled]{
                    opacity: .6;
                }
            }
        }
    }
</style>
