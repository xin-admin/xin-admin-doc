---
sidebar_position: 3
---

# 权限

权限一般用于按钮、操作、菜单等，通常用于控制用户对资源的访问权限，所有的规则的 `key` 都是一条权限。

### 页面权限

当需要控制用户可以访问指定的页面时，只需要将规则中对应菜单规则和路由规则移除，XinAdmin 便不会生成对应的菜单和路由。

### 按钮权限

你可以在页面中使用 `AuthButton` 组件来验证用户是否具有某一条权限，如：

```tsx
<ButtonAccess auth={'auth.button.create'}>
  <Button color={'primary'} variant="solid">新增按钮 auth.button.create</Button>
</ButtonAccess>
```

当前用户没有权限时，`AuthButton` 组件会自动隐藏。
