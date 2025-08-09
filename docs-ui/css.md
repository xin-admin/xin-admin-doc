---
sidebar_position: 12
---

# CSS 样式

虽然 `AntDesign` 已经集成了大量的组件，并且有很好的 `css-in-js` 方案，但是在有些特殊情况下
将大量的CSS写入JS中，可能会增加浏览器的负担，影响性能。

在 XinAdmin 中，你可以通过 `tailwindcss` 来编辑你的 CSS 样式，
Tailwind CSS 的工作原理是扫描所有 HTML 文件、JavaScript 组件和任何其他模板中的类名，生成相应的样式，然后将它们写入静态 CSS 文件。 
它快速、灵活、可靠，零运行时，并且有可靠的编辑器支持。
使用 Tailwind CSS 你几乎不用编辑样式文件，只用添加类名，Tailwind CSS 会自动生成所需的样式。

```html
<h1 class="text-3xl font-bold underline">
    Hello world!
</h1>
```

你可以通过 [Tailwind CSS](https://tailwindcss.com/docs) 的官方文档来查看更多关于 Tailwind CSS 的信息。




