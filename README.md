# vue-project

> A Vue.js project

## Build Setup

技术栈：Vue 3 + Vue Router + Vite，需要 Node.js `^20.19.0 || >=22.12.0`。

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# build for production
npm run build

# preview the production build locally
npm run preview
```

## 对接后端

- 请求封装：`src/api/request.js`（axios 实例，自动携带 `Authorization: Bearer <token>`，401 时清除登录态并跳转 `/login`）
- 用户接口：`src/api/user.js`
  - `POST /user/login`  `{ username, password }` → `{ token, user }`
  - `POST /user/register` `{ username, password }`
  - `GET /user/info`、`POST /user/logout`
- 约定后端返回格式：`{ code: 0, data, msg }`，`code !== 0` 视为失败并展示 `msg`
- 接口前缀：`.env` 中的 `VITE_API_BASE_URL`（默认 `/api`）
- 本地开发默认使用 `src/api/mock.js` 模拟接口（`.env.development` 中 `VITE_USE_MOCK=true`）；后端就绪后改为 `false`，`/api` 请求会经 `vite.config.js` 中的 proxy 转发到 `API_PROXY_TARGET`（默认 `http://localhost:8080`，可在 `.env.development.local` 中覆盖）
