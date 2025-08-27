---
sidebar_position: 2
---

# 基础配置

在 `XinTable` 中，我们通过简单的配置就可以生成一个完整的 `Crud` 表格与表单，并且它支持高度的自定义，配置项如下：

| 字段名称                | 类型                                                          | 说明                                                       |
|---------------------|-------------------------------------------------------------|----------------------------------------------------------|
| columns             | [`XinTableColumn[]`](#xintablecolumn)                       | 表格列配置，支持 ProFormColumnsType & ProColumns 的所有属性           |
| api                 | `string`                                                    | 请求接口，用来发送请求的接口地址，查新为GET请求，新增为POST请求，修改为PUT请求，删除为DELETE请求 |
| accessName          | `string`                                                    | 接口权限名称，用来校验权限，如无权限，对应的按钮则不显示                             |
| rowKey              | `string`                                                    | 表格行键                                                     |
| operateShow         | `boolean`                                                   | 是否显示表格操作列，默认为 true                                       |
| addShow             | `boolean`                                                   | 是否显示表格的新增按钮，默认为 true                                     |
| editShow            | `((record: T) => boolean)` \|  `boolean`                    | 是否显示表格操作列的编辑按钮，默认为 true，可用定义函数控制按钮显示隐藏                   |
| deleteShow          | `((record: T) => boolean)` \|  `boolean`                    | 是否显示表格操作列的删除按钮，默认为 true，可用定义函数控制按钮显示隐藏                   |
| beforeOperateRender | `(record: T) => React.ReactNode`                            | 在操作栏的默认节点之前添加自定义节点                                       |
| afterOperateRender  | `(record: T) => React.ReactNode`                            | 在操作栏的默认节点之后添加自定义节点                                       |
| tableRef            | [`Ref<XinTableRef \| undefined>`](#xintableref)             | ProTable 和 ProForm 的 ref                                 |
| toolBarRender       | `React.ReactNode[]> `                                       | 自定义工具栏的渲染                                                |
| onFinish            | `(formData: T, initValue: T \| false) => Promise<boolean> ` | 表单提交时间，返回`Promise<true>` 关闭表单，返回`Promise<false>` 保持表单打开  |
| formProps           | [`XinFromProps`](#xinfromprops)                             | 表单扩展配置                                                   |
| tableProps          | `ProTableProps<T, {[key: string]: any}>`                    | 表格扩展配置                                                   |
| modalProps          | `Omit<ModalProps, "visible">`                               | 表单弹窗配置                                                   |

### TypeScript 定义

```ts
// CRUD 表格
export type XinTableProps<T> = {
  /** 表单 columns */
  columns: XinTableColumn<T>[];
  /** 主键 */
  api: string;
  /** 主键 */
  rowKey: string;
  /** 权限 */
  accessName: string;
  /** 表格操作列显示 */
  operateShow?: boolean;
  /** 编辑按钮显示 */
  addShow?: boolean;
  /** 编辑按钮显示 */
  editShow?: ((record: T) => boolean) | boolean;
  /** 操作栏之后渲染 */
  deleteShow?: ((record: T) => boolean) | boolean;
  /** 操作栏之后渲染 */
  beforeOperateRender?: (record: T) => React.ReactNode;
  /** 操作栏之后渲染 */
  afterOperateRender?: (record: T) => React.ReactNode;
  /** ProTable 和 ProForm 的 ref */
  tableRef?: Ref<XinTableRef | undefined>;
  /** 工具栏渲染 */
  toolBarRender?: React.ReactNode[];
  /**
   * 表单提交
   * @param formData 表单数据
   * @param initValue 编辑时的初始数据，如果是新增则为 false
   */
  onFinish?: (formData: T, initValue: T | false) => Promise<boolean>
  /** 表单扩展配置 */
  formProps?: XinFromProps;
  /** 表格扩展配置 */
  tableProps?: ProTableProps<T, {[key: string]: unknown}>;
  /** 表单弹窗配置 */
  modalProps?: Omit<ModalProps, "visible">;
}
```

### XinTableColumn

`columns` 是 `XinTable` 的核心配置，它继承了 ProFormColumnsType & ProColumns 的所有属性。

```ts
export type XinTableColumn<T> = ProFormColumnsType<T> & ProColumns<T>;
```
### XinFromProps

`formProps` 是 `XinTable` 的表单扩展配置，你可以用它来确认表单的布局样式。


| 字段名称       | 类型                                                   | 说明                                                                                               |
|------------|------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| layout     | `horizontal` \| `inline` \| `vertical`               | 表单布局                                                                                             |
| labelAlign | `left` \| `right`                                    | label 标签的文本对齐方式                                                                                  |
| labelWrap  | `boolean`                                            | label 标签的文本换行方式                                                                                  |
| labelCol   | `object`                                             | label 标签布局，同 `<Col>` 组件，设置 span offset 值，如 `{span: 3, offset: 12}` 或 sm: `{span: 3, offset: 12}` |
| wrapperCol | `object`                                             | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol                                                                |
| grid       | `boolean`                                            | 是否开启 grid 布局                                                                                     |
| rowProps   | [`RowProps`](https://ant.design/components/grid#row) | 开启 grid 模式时传递给 Row                                                                               |
| colProps   | [`ColProps`](https://ant.design/components/grid#col) | 开启 grid 模式时传递给 Col                                                                               |

**TypeScript 定义**

```ts
export interface XinFromProps {
  // 表单 layout
  layout?: FormProps['layout'];
  // 表单项 label Align
  labelAlign?: FormProps['labelAlign'];
  // 表单项 Label Warp
  labelWrap?: FormProps['labelWrap'];
  // 表单项 Label Col
  labelCol?: FormProps['labelCol'];
  // 表单项 Wrapper Col
  wrapperCol?: FormProps['wrapperCol'];
  // Grid 布局
  grid?: boolean;
  // Row Props
  rowProps?: RowProps;
  // Col Props
  colProps?: ColProps;
}
```

### XinTableRef

`XinTableRef` 包含了表格和表单的 Ref 实例

```ts
export interface XinTableRef {
  formRef?: React.RefObject<ProFormInstance | undefined>;
  tableRef?: React.RefObject<ActionType | undefined>;
}
```
