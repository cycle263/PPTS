## performance 查看

- 分析 performance

- 准备工作

  - 隐身模式

- 性能指标

  - FPS 动画性能有关，代表每秒帧数，超过 30 基本上算流畅了

  - CPU CPU 的占用

  - NET

  - Main

    X 轴： 时间， Y 轴：调用栈

  - GPU

  - performance 接口

    - getEntriesByType('paint' / 'resource' / 'navigation' / 'frame')

- 渲染性能

  - 重排和重绘（是否改变几何属性）

### 参考资料

[技术峰会-ppt](https://ppt.baomitu.com/d/fbd4a5f5)

[google docs](https://docs.google.com/document/d/1BR94tJdZLsin5poeet0XoTW60M0SjvOJQttKT-JK8HI/view#)

[w3c 标准](https://w3c.github.io/paint-timing/#first-contentful-paint)

[使用 Paint Timing API 提高性能](https://zhuanlan.zhihu.com/p/30389490)
