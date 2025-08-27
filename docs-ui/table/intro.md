---
sidebar_position: 1
---

# 概述

XinAdmin 通过对 `AntDesign Pro Components` 的 `ProTable` 和 `Schema Form` 组件进行了封装，合并为一个组件 `XinTable`，使其更加易用，在使用 `XinTable` 之前，
强烈建议你想去熟悉 `AntDesign` 的 `ProTable` 和 `Schema Form` 组件。 

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

它包含常用的CRUD功能，搜索、新增、编辑表单，数据表格以及表格操作列。
