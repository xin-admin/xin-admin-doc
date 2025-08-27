---
sidebar_position: 21
---

# Mock 请求

XinAdmin 使用 [MSW](https://mswjs.io/) 作为模拟请求库，你可以在 `src/mocks/browser.ts` 中添加你的模拟请求。

MSW 是一种 API 模拟 允许您编写与客户端无关的模拟并重用它们的库 跨任何框架、工具和环境。

在 main.ts 中，通过对当前环境的判断，启动模拟请求。

```tsx
// 配置请求拦截，确保只在生产环境中使用
// Configure request interception to ensure it is only used in the production environment
async function prepareApp() {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'test'
  ) {
      const { worker } = await import('./mocks/browser')
      return worker.start({
        onUnhandledRequest: 'bypass'
      })
  }
  return Promise.resolve()
}

prepareApp().then(() => {

  const container = document.getElementById('root');

  if (!container) return;

  const root = ReactDOM.createRoot(container);

  root.render(<App/>);
})
```

### 新增模拟请求

```ts
// src/mocks/handlers/user.ts
import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('https://api.example.com/user', () => {
    return HttpResponse.json({
      id: 'abc-123',
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
]
```

### 路径参数

您可以通过在请求处理程序的路径中包含冒号后跟参数名称来定义路径参数，路径参数表示请求 URL 的动态部分，
该部分不会从字面上匹配。相反，参数位置存在的任何字符串都将存储在响应解析器参数中公开的 `params` 对象中。

```ts
http.get<{ id: string }>('/posts/:id', ({ params }) => {
  const { id } = params
})
```

### 查询参数

您可以通过在请求处理程序路径中包含问号后跟参数名称来定义查询参数，查询参数表示请求 URL 的动态部分，该部分不会从字面上匹配。

```ts
http.get('/product', ({ request }) => {
  const url = new URL(request.url)
 
  // Given a request url of "/product?id=1",
  // the `productId` will be a "1" string.
  const productId = url.searchParams.get('id')
 
  if (!productId) {
    return new HttpResponse(null, { status: 404 })
  }
 
  return HttResponse.json({ id: productId })
})
```

### 请求体

您可以像通常读取任何 Fetch API 请求一样读取被拦截请求的正文。

例如，您可以调用以将请求的正文读取为 JSON：`await request.json()`

```ts
http.post<{ id: string }, Post>('/posts/:id', async ({ request }) => {
  const newPost = await request.clone().json() // Post
})
```

更多的使用方法请参考 [MSW 文档](https://mswjs.io/docs) 