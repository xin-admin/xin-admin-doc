---
group: 后端专项
title: 目录结构
order: 1
---

XinAdmin 的目录结构 根据不同的功能在 APP 中组件不同的模块，
在二次开发时，你可以将你的业务模块放到一个新的 `app/YouModule` 目录中，
自动路由会扫描 `app` 目录下的所有控制器，来注册 `路由` 和 `CRUD路由`，这样明了的目录机构，更有助于项目的开发和维护。
