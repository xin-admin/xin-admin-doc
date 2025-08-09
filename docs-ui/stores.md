---
sidebar_position: 11
---

# 状态管理

XinAdmin 使用 [zustand](https://zustand.docs.pmnd.rs/) 进行全局的状态管理，`Zustand` 是一个轻量、现代的状态管理库。

- 轻量，使用简单，体积极轻，5分钟上手。
- 跨应用/跨框架 状态管理及共享，对 Iframe、微前端、模块化、组件化等业务场景，提供跨应用、跨框架的状态管理能力。
- 拓展性好 ，支持基于middleware扩展 store，你可以用任何你喜欢的方式来构建你的 store。
- 完备的typescript类型推导

```tsx
import { create } from 'zustand'

type Store = {
  count: number
  inc: () => void
}

const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Counter() {
  const { count, inc } = useStore()
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}
```

### Stores 目录

stores 意为状态商店，XinAdmin 所有的状态和操作状态的方法，都放在了 \src\stores 目录下。并且全局的主题配置也通过它来管理，并且自动储存到 localStorage 中。


###  Store 初始化

创建的 store 是一个 hook，你可以放任何东西到里面：基础变量，对象、函数，状态必须不可改变地更新，set 函数合并状态以实现状态更新。

```ts
import { create } from 'zustand'

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
```

###  Store 使用
可以在任何地方使用钩子，不需要提供 provider。 基于 selector 获取您的目标状态，组件将在状态更改时重新渲染。

```tsx
function BearCounter() {
  const bears = useBearStore((state) => state.bears)
  return <h1>{bears} around here ...</h1>
}
```

更新目标状态：bears

```tsx
function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
```

更多使用方式，请参考 [zustand](https://zustand.docs.pmnd.rs/)
