---
sidebar_position: 10
---

# 请求响应

XinAdmin 基于 Axios 封装了一套网络请求 `createAxios` 和 `useRequest`：

- 自动取消重复请求
- 自动错误/异常提示
- 自动 loading
- 简洁 data
- 自动携带 token

### 响应参数

我们约定后端返回的数据结构，以下是响应JSON的格式：

```ts
declare namespace API {

  type ErrorShowType =
    | 0      // Success Message
    | 1      // Warning Message
    | 2      // Error Message
    | 3      // Success Notification
    | 4      // Warning Notification
    | 5      // Error Notification
    | 99;    // Other

  /** List response data format */
  type ListResponse<T> = {
    data: T[]
    page: number
    total: number
    per_page: number
    current_page: number
  }

  /** The response data format agreed upon with the back end */
  interface ResponseStructure<T> {
    success: boolean
    data: T
    errorCode?: number
    msg?: string
    showType?: ErrorShowType
    status?: number
    description?: string
    placement?: 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight',
  }
}
```

其中 `success` 与 `data` 为必须的字段，其他字段为可选字段，XinAdmin 根据这个类型来自动处理错误。

**参数详解：**

| 参数          | 是否必须 | 描述        |
|-------------|------|-----------|
| success     | ✅    | 业务请求是否成功  |
| data        | ❌    | 业务请求返回的数据 |
| errorCode   | ❌    | 错误状态码     |
| msg         | ✅    | 错误提示      |
| showType    | ❌    | 异常显示类型    |
| status      | ❌    | 请求状态      |
| description | ❌    | 请求描述      |
| placement   | ❌    | 提示位置      |


### createAxios

`createAxios` 用来定义请求方法，并返回一个 Promise 对象，在 `src/api` 目录中存放了系统所有的网络请求函数，我们也建议您将封装的请求函数放置于此目录下
以便于 Api 的管理。

定义请求方法：

```ts
// src/api/index.ts
import { createAxios } from '@/utils/request.ts';

export function myApi() {
  return createAxios({
    url: '/your/api/path',
    method: 'get',
  });
}

// 直接使用
myApi.then(res => {
  console.log(res)
})
```

`createAxios` 参数用于自定义 `axios` 配置可用配置项 请参考[Axios网站](https://www.axios-http.cn/docs/req_config)，只有 url 是必需的，默认请求方法为 get。

```ts
createAxios({
    url: '/index.php/admin/auth.menu/index',
    method: 'get',
    timeout: 3000, // 请求超时毫秒数，可覆盖默认的超时设定
    // ...
})
```

:::info
你也可以直接使用 `axios.create` 来深度自定义你的请求，请参考 [Axios 文档](https://axios-http.com/zh/docs/intro)。
:::

### useRequest

`useRequest` 用来进一步的处理请求结果，并返回一个 `useRequest` 对象，他可以返回简洁的 `data`，并自动处理 `loading`，该对象包含以下属性：

- **data**: 请求结果数据
- **loading**: 请求加载状态
- **success**: 请求是否成功
- **error**: 请求失败响应
- **run**: 手动执行请求

```ts
import { myApi } from '@/api/index.ts';
import useRequest from '@/utils/useRequest.ts';

const {data, loading, success, error, run} = useRequest(myApi, {
  manual: true,
  onSuccess: (res) => {
    console.log(res);
  },
  onError: (err) => {
    console.log(err);
  }
});
```

**参数说明：**

- `apiFunction`： 请求的函数，由 `createAxios` 创建的接口函数

- `options`: 请求的配置项

- `options`.`manual`: 是否自动执行请求，默认为 false

- `options`.`onSuccess`: 请求成功回调

- `options`.`onError`: 请求失败回调

- `options`.`onFinally`: 请求结束回调
