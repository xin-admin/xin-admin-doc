---
sidebar_position: 4
---

# 表格请求

`XinTable` 中包含了CRUD的所有请求，配置请求 API，通过不同的请求方式来实现增删改查功能。

```tsx
return (
  <XinTable
    columns={columns}
    api={'/your/api'}
    accessName={'your.api'}
    rowKey={'id'}
  />
)
```

在上面的示例中，XinTable 

- 通过 `GET` 的方式向 `/your/api` 发送请求，获取数据并展示到表格中。
- 通过 `POST` 的方式向 `/your/api` 发送请求，将数据保存到数据库中。
- 通过 `PUT` 的方式向 `/your/api` 发送请求，将数据更新到数据库中。
- 通过 `DELETE` 的方式向 `/your/api` 删除数据。

### 自定义表单提交

某些情况下，我们需要对表单的数据进行处理，可用通过配置 `onFinish` 自定义表单的提交逻辑。

```tsx
return (
  <XinTable
    columns={columns}
    api={'/your/api'}
    accessName={'your.api'}
    rowKey={'id'}
    onFinish={(formData, initValue) => {
      // ... 处理表单数据
    }}
  />
)
```

当 initValue 有值时，表示是编辑数据，为空时表示是新增数据。你也可以通过 initValue 是否包含主键来判断是编辑数据还是新增数据。

XinTable 会自动管理表单和表格的 loading 状态，在提交表单时，当 `onFinish` 返回 `Promise<true>` 时，XinTable 会自动关闭表单，当返回 `Promise<false>` 时，XinTable 会保持表单打开。

