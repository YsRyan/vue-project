# vue-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 对接后端

- 请求封装：`src/api/request.js`（axios 实例，自动携带 `Authorization: Bearer <token>`，401 时清除登录态并跳转 `/login`）
- 用户接口：`src/api/user.js`
  - `POST /user/login`  `{ username, password }` → `{ token, user }`
  - `POST /user/register` `{ username, password }`
  - `GET /user/info`、`POST /user/logout`
- 约定后端返回格式：`{ code: 0, data, msg }`，`code !== 0` 视为失败并展示 `msg`
- 接口前缀：`config/*.env.js` 中的 `API_BASE_URL`（默认 `/api`）
- 本地开发默认使用 `src/api/mock.js` 模拟接口（`config/dev.env.js` 中 `USE_MOCK: 'true'`）；后端就绪后改为 `false`，`/api` 请求会经 dev server 代理到 `API_PROXY_TARGET`（默认 `http://localhost:8080`）
