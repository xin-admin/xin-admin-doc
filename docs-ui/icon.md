---
sidebar_position: 18
---

# 系统图标

XinAdmin 使用 `AntDesign` 作为基础图标库，并且通过 `iconfont` 来扩展图标库

在文件 `src/utils/iconFields.ts` 文件中，我们添加了所有 `AntDesignIcon` 的图标配置。

你也可以通过 `oauthScriptUrl` 来自定义你的 ` iconfont.cn` 图标库。

```ts
// src/utils/iconFields.ts
// 阿里iconfont链接，也可以按需要指定

export const oauthScriptUrl = [
  '//at.alicdn.com/t/c/font_4413039_6ow46w95lhw.js'
  // ... you iconfont.cn 链接
];
```

### 图标选择器

XinAdmin 提供了图标选择器，它可以很方便的嵌入 `ProFrom`，你可以通过点击图标选择器，选择你需要的图标，它会将你选择的图标写入到 `ProFrom` 中。

![icon](img/2.gif)

你只需要在你的 `Schema Form` 列配置中添加下面的配置：

```tsx
import IconSelect from "@/components/XinForm/IconSelect";
import IconFont from "@/components/IconFont";

const iconColumn = {
    title: '图标',
    render: (text, record, index, action) => <IconFont icon={text}></IconFont>,
    dataIndex: 'icon',
    valueType: 'text',
    renderFormItem: (form, config, schema) => <IconSelect dataIndex={form.key} form={schema} value={config.value}></IconSelect>,
}
```

:::info
如果你不清楚 `Schema Form` 请参考 [Ant Design ProComponents](https://procomponents.ant.design/components/schema-form) 文档，建议你通过 [XinTable](/ui/table/intro) 来使用更方便
:::

**IconSelect**

`IconSelect` 是图标选择器组件，它会创建一个带有图标选择的文本框，并且将选择的图标自动添加到传入的 `from fields` 中，完成表单的赋值。

- dataIndex: 表单中图标字段名
- form: 表单实例
- value: 图标绑定的字段值

**IconFont**

`IconFont` 是图标显示组件，它会解读 `IconSelect` 选择的参数，并渲染显示为一个图标。

- icon: 图标字段

