---
sidebar_position: 1
---

# 规则路由

XinAdmin 基于ReactRoute V7 封装了一套非常方便的路由与权限功能，它可以很快的和后端进行对接，实现动态权限菜单，
并且根据后端返回的数据，自动生成路由、菜单、权限，我们把这些数据称之为 `规则`。

在实际应用中，动态路由的控制与权限往往是一个非常棘手的问题，XinAdmin 通过 `规则` 将路由、菜单、权限进行统一管理，不仅可以动态的控制权限，并且会根据
规则来生成相应的侧边菜单和路由。

在与后端对接的时候，你可以通过控制返回 `规则` 来实现对用户权限的控制。默认的规则在`src/router/default.ts` 中定义，
我们通过Mock数据，在登录的时候返回这个数据，将其储存到全局状态中，你也可以在示例项目中动态切换来熟悉 XinAdmin 的规则功能。

你可以扩展 `规则` 数据类型实现更多的功能，如规则状态、显示状态、是否外链等，`规则` 的数据类型如下：

```ts
/**
 * 菜单路由规则类型
 */
export interface IRule {
  // 权限ID
  id: number;
  // 上级ID，顶级菜单的 pid 为 0
  pid: number;
  // 权限类型，分为菜单、路由、嵌套路由、权限
  type: 'menu' | 'route' | 'nested-route' | 'rule';
  // 权限的唯一标识
  key: string;
  // 排序
  sort?: number;
  // 名称
  name?: string;
  // 菜单的路径，menu 的路径会被当作前缀路由
  path?: string;
  // 路由组件的路径，当类型值为 route 时该配置有效
  elementPath?: string | null;
  // 路由的图标
  icon?: string;
  // 多语言
  local?: string;
  // 状态
  status?: number;
  // 是否显示
  show?: number;
}
```

### 规则类型

规则的类型有四种：`menu`、`route`、`nested-route`、`rule`

- `menu`：菜单，用于生成侧边栏的菜单项，它不会生成路由。

- `route`：路由，用于生成侧边栏的菜单项，它会生成路由，并且必须拥有 `elementPath` 配置。

- `nested-route`：嵌套路由，它会生成路由，不会生成菜单项，你可以在页面中使用 `<Outlet />` 来展示嵌套路由，它必须拥有 `elementPath` 配置。

- `rule`：权限，用于生成权限，不会生成路由，也不会生成菜单，通常用作按钮与操作的权限控制。

|              | 菜单 | 路由 | 权限 | 说明                                                                        |
|--------------|----|----|----|---------------------------------------------------------------------------|
| menu         | ✅  | ❌  | ✅  | 菜单，用于生成菜单项，并不会生成路由，包含子页面菜单的父级菜单                                           |
| route        | ✅  | ✅  | ✅  | 路由，用于生成菜单项和路由，用于导航到指定页面                                                   |
| nested-route | ❌  | ✅  | ✅  | 嵌套，路由，用于生成嵌套路由，不会生成菜单项，你可以在页面中使用 `<Outlet />` 来展示嵌套路由，第一个嵌套路由会被设置为默认的索引路由 |
| rule         | ❌  | ❌  | ✅  | 权限，用于生成权限，不会生成路由，也不会生成菜单，通常用作按钮与操作的权限控制                                   |


### ReactRoute 路由

XinAdmin 会根据规则自动生成路由，它会忽略类型为 `menu` 和 `rule` 的规则，根据 `elementPath` 来确认路由的组件
所有的路由都会被包裹在布局路由 layout 之下，所有的路由path都是一个完整的路径，并且支持页面中[嵌套路由](/ui/rule-route/rule)。

### 组件路径

组件路径是页面以及嵌套路由的组件在 `src/pages` 目录中的路径，例如：`src/pages/index.tsx` 的组件路径为 `index`，`src/pages/user/index.tsx` 的组件路径为 `user/index`。

| 组件路径                      | elementPath |
|---------------------------|-------------|
| src/pages/login/index.tsx | login/index |
| src/pages/user/index.tsx  | user/index  |


### 图标

图标配置用于在菜单栏或者面包屑中展示对应菜单的图标，支持 XIcon 所有的图标配置。

### 多语言

菜单栏或和面包屑的多语言配置，你可以在 `src/locales/{语言}/menu.ts` 中添加。