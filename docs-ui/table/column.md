---
sidebar_position: 3
---

# 列配置

`XinTable` 的 `XinTableColumn` 列配置项，继承自 `ProFormColumnsType` & `ProColumns`，具体属性请参考 [ProTable](https://procomponents.ant.design/components/table) 和 [Schema Form](https://procomponents.ant.design/components/schema-form) 的文档。

`Columns` 是一个 `XinTableColumn` 数组，每个元素都是一个 `XinTableColumn`，且每一个元素都代表一个表格（表单）字段。通过 `Columns` 配置，你可以任意的控制表格的显示，新增表单、编辑表单和搜索表单的字段。

一个标准的 `Columns` 配置项如下：

```tsx
const columns: XinTableColumn[] = [
  {
    /** 确定这个列的唯一值 */
    key: 'id',
    /** 与实体映射的key */
    dataIndex: 'id',
    /** 选择如何渲染相应的模式 */
    valueType: 'text',
    /** 标题 */
    title: '列ID',
    /** 展示一个 icon，hover 是展示一些提示信息 */
    tooltip: '这是一个列ID',
    /** 你可以使用 tooltip，这个更改是为了与 antd 统一 */
    tip: '这是一个列ID',
    /** 表格中的渲染函数 */
    render: (dom, record) => record.id,
    /** 表单中的渲染函数 */
    renderFormItem: (_, {type, defaultRender}) => {
      return <Input></Input>
    },
    /** 表格文字渲染函数 */
    renderText: (text, record) => text,
    /** 表单 field 配置 */
    fieldProps: {},
    /** 映射值的类型 */
    valueEnum: {},
    /** 从服务器请求枚举 */
    request: () => null,
    /** 从服务器请求的参数，改变了会触发 reload */
    params: {},
    /** Form 中隐藏 */
    hideInForm: false,
    /** 在 Table 中隐藏 */
    hideInTable: false,
    /** 在 Table 的查询表单中隐藏 */
    hideInSearch: false,
    /** 在 descriptions 中隐藏 */
    hideInDescriptions: false
  }
]
```

### ValueType

ProComponents 提供了许多中 `valueType` 来控制字段在表格中的显示以及表单的样式。详情请查看 [valueType 列表](https://procomponents.ant.design/components/schema#valuetype-%E5%88%97%E8%A1%A8)

#### 自定义 valueType

你可以通过 `valueEnum` 或者 `fieldProps.options` 来自定义 `valueType` 的渲染。

使用 valueEnum：

```ts
const columns = [
  {
    title: '创建者',
    width: 120,
    dataIndex: 'creator',
    valueType: 'select',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: {
        text: '未解决',
        status: 'Error',
      },
      closed: {
        text: '已解决',
        status: 'Success',
      },
    }
  },
];

```

使用 fieldProps.options：

```ts
const columns = [
  {
    title: '创建者',
    width: 120,
    dataIndex: 'creator',
    valueType: 'select',
    fieldProps: {
      options: [
        {
          label: 'item 1',
          value: 'a',
        },
        {
          label: 'item 2',
          value: 'b',
        },
        {
          label: 'item 3',
          value: 'c',
        },
      ],
    },
  },
];
```

#### 完全自定义渲染

- 通过 `render` 完全自定义表格单元格的渲染。
- 通过 `renderFormItem` 完全自定义表单的渲染。
- 通过 `renderText` 完全自定义表格文字的渲染。

#### 远程数据

大部分时候我们是从网络中获取数据，但是获取写一个 hooks 来请求数据还是比较繁琐的，同时还要定义一系列状态，所以我们提供了 request 和 params 来获取数据。

- request ：是一个 promise，需要返回一个 options 相同的数据
- params ：一般而言 request 是惰性的，params 修改会触发 request 的重新请求。

```ts
const request = async () => [
  { label: '全部', value: 'all' },
  { label: '未解决', value: 'open' },
  { label: '已解决', value: 'closed' },
  { label: '解决中', value: 'processing' },
];

// 列中定义
const columns = [
  {
    title: '创建者',
    width: 120,
    dataIndex: 'creator',
    valueType: 'select',
    request,
    params: {},
  },
];
```

更多使用方式参考：[Schema 通用配置](https://procomponents.ant.design/components/schema)
