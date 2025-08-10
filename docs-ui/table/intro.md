---
sidebar_position: 1
---

# 概述

XinAdmin 通过对 `AntDesign Pro Components` 的 `ProTable` 和 `ProFrom` 组件进行了封装，合并为一个组件 `XinTable`，使其更加易用，在使用 `XinTable` 之前，
强烈建议你想去熟悉 `AntDesign` 的 `ProTable` 和 `ProFrom` 组件。 

`XinTable` 没有什么黑魔法，只是将常用的功能进行合并，支持高度自定义，并且适配了 `XinAdmin` 的权限控制，更好的适配 CRUD 的开发模式。

你只需要一个 `Columns` 即可生成一个完整的 `Crud` 表格与表单，一个简单的 `Columns` 它看起来像这样：

```tsx
const columns: XinTableColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    valueType: 'text',
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '最近修改',
    dataIndex: 'updated_at',
    valueType: 'fromNow',
  },
];
```

使用 `Columns` 就可以生成一个完整的 `Crud` 表格与表单了：

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

### Columns

columns 是一个表格的灵魂，它是一个数组，在支持基础的 AntDesign Table 所有配置的情况下，扩展了一些更常用的配置，让其每一个 Column，都可可以生成表单、表格、搜索、显示等组件。

更多的使用配置，请参考 [Pro Table Columns](https://procomponents.ant.design/components/schema)。

### Api

XinTable 通过 api 来发送 CRUD 请求，默认的增删改查请求地址为：

- 查询：[GET] `/your/api`
- 新增：[POST] `/your/api`
- 修改：[PUT] `/your/api`
- 删除：[DELETE] `/your/api`

当然你也可以通过事件进行自定义。

### AccessName

accessName 是权限控制使用的字段，它使用 `ButtonAccess` 组件控制权限，你可以通过 `accessName` 来指定权限字段，例如：

accessName="your.auth"

- 新增的权限字段为：`your.auth.create`
- 编辑的权限字段为：`your.auth.update`
- 删除的权限字段为：`your.auth.delete`

当用户拥有相应的权限字段时，才会显示相应的操作按钮。

### RowKey

数据列的主键字段。
