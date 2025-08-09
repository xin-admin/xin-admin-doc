---
sidebar_position: 17
---

# Echarts 图表

XinAdmin 默认使用 `echarts-for-react` 为项目提供图表组件。

ECharts-for-React 是 Apache ECharts 的官方 React 封装组件，它通过声明式语法和 React 生命周期管理，极大简化了 ECharts 在 React 项目中的集成流程。

ECharts-for-React 通过以下优势显著提升开发效率：

- 📦 开箱即用：封装初始化/销毁逻辑
- 🎨 无缝集成：完美适配 React 生态
- ⚡ 性能卓越：智能更新机制

### 基础柱状图

通过 option 属性传递 ECharts 配置项，支持所有原生 ECharts 配置

```tsx
import React from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart = () => {
  const option = {
    title: { text: '销量统计' },
    xAxis: { type: 'category', data: ['衬衫', '羊毛衫', '雪纺衫'] },
    yAxis: {},
    series: [{ data: [5, 20, 36], type: 'bar' }]
  };

  return <ReactECharts option={option} style={{ height: 400 }} />;
};
```

### 核心功能详解

**图表配置**

- 动态更新：通过函数返回配置项实现数据动态加载

```tsx
const getOption = () => ({ /* 动态配置 */ });
<ReactECharts option={getOption()} />
```

- 主题定制：支持内置主题与自定义主题

```tsx
<ReactECharts option={option} theme="dark" />
```

**样式控制**

| 属性        | 说明         | 示例                      |
|-----------|------------|-------------------------|
| style     | 容器尺寸       | `{{ width: '100%' }}`   |
| className | 自定义 CSS 类名 | `chart-style`           |
| opts      | 初始化参数      | `{{ renderer: 'svg' }}` |

**事件处理**

绑定原生 ECharts 事件：
```tsx
<ReactECharts
  onEvents={{
    click: (params) => console.log('点击事件:', params),
    legendselectchanged: (params) => console.log('图例切换:', params)
  }}
/>
```

建议结合 ECharts [官方文档](https://echarts.apache.org/) 深入掌握高级功能，如地理坐标系、3D 图表等复杂场景的实现。

支持所有 ECharts 事件类型

		
		
		