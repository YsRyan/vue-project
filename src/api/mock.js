// 后端未就绪时的本地模拟接口（.env.development 中 VITE_USE_MOCK 控制），对接真实后端后关闭即可
const USERS_KEY = 'vp_mock_users'

function loadUsers () {
  return JSON.parse(localStorage.getItem(USERS_KEY) || '{}')
}

function saveUsers (users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

function ok (data) {
  return { code: 0, data, msg: 'ok' }
}

function fail (msg) {
  return { code: 1, data: null, msg }
}

const routes = {
  'post /user/register' ({ username, password }) {
    const users = loadUsers()
    if (users[username]) return fail('用户名已存在')
    users[username] = { password }
    saveUsers(users)
    return ok({ username })
  },
  'post /user/login' ({ username, password }) {
    const user = loadUsers()[username]
    if (!user || user.password !== password) return fail('用户名或密码错误')
    return ok({ token: `mock-token-${username}-${Date.now()}`, user: { username } })
  },
  'post /user/logout' () {
    return ok(null)
  }
}

export default function mockAdapter (config) {
  const path = config.url.replace(config.baseURL || '', '')
  const handler = routes[`${config.method} ${path}`]
  const body = typeof config.data === 'string' ? JSON.parse(config.data || '{}') : (config.data || {})
  return new Promise(resolve => {
    setTimeout(() => {
      const data = handler ? handler(body) : fail(`mock 未实现: ${config.method} ${path}`)
      resolve({ data, status: 200, statusText: 'OK', headers: {}, config, request: {} })
    }, 300)
  })
}
