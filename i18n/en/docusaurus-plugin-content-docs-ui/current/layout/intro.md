---
sidebar_position: 1
---

# 概述

页面整体布局是一个产品最外层的框架结构，往往会包含导航、页脚、侧边栏、通知栏以及内容等。在页面之中，也有很多区块的布局结构。在真实项目中，页面布局通常统领整个应用的界面，有非常重要的作用。

### 布局组件

在 Xin Admin 中，我们封装了常用的几种布局模式，并且将其拆分为若干个组件，你可以使用主题管理器来配置这些布局，当然你也可以在 layout 目录中找到这些组件定制你自己的布局

`BreadcrumbRender.tsx` ：

面包屑渲染组件，用于渲染页面的面包屑，你也可以将这个组件放到任何一个页面中来展示页面的面包屑。

`ColumnSiderRender.tsx` ：

双栏模式的侧边栏渲染组件，用于渲染双栏模式下的侧边栏。

`FooterRender.tsx` :

页脚渲染组件，用于渲染页脚。

`HeaderLeftRender.tsx` :

头部左侧渲染组件，用于渲染头部左侧内容，比如Logo、标题等。

`HeaderRender.tsx` :

头部渲染组件，用于渲染头部顶栏，包含了`HeaderLeftRender`、`HeaderRightRender`、混合布局顶栏和顶部导航栏。

`HeaderRightRender.tsx` :

头部右侧渲染组件，用于渲染头部右侧内容，比如用户信息、通知、搜索框等。

`index.tsx` :

页面布局渲染组件，用于包裹所有页面布局。

`SettingDrawer.tsx` :

主题设置抽屉组件，你可以在主题管理器中配置布局与主题，从而实现对主题的修改。

`MenuRender.tsx` :

菜单栏的渲染，用于渲染菜单栏。

### 主题配置文件

`algorithm.ts` :

AntDesign 主题算法配置文件。

`theme.ts` :

默认主题与预设主题的配置文件。
