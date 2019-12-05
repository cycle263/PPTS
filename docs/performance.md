## performance 查看

- 分析 performance

- 准备工作

  - 隐身模式
    HTML 文件为蓝色。
    脚本为黄色。
    样式表为紫色。
    媒体文件为绿色。
    其他资源为灰色

- 性能指标

  - FPS 动画性能有关，代表每秒帧数，超过 30 基本上算流畅了

  - CPU CPU 的占用

  - Timings

    - DCL DOMContentLoaded - Initial HTML is ready
    - FP Something (anything) has been drawn
    - FCP Something has been rendered from the DOM
    - FMP The drawn content is useful
    - Onload All resources are ready

  - NET

  - Main

    X 轴： 时间， Y 轴：调用栈

  - GPU

  - performance 接口

    - getEntriesByType('paint' / 'resource' / 'navigation' / 'frame')

- 渲染性能

  - 重排和重绘（是否改变几何属性）

### 常见问题

- 布局抖动

  强制浏览器在像素管道中过早执行布局，导致在渲染流程中重复步骤。

- long task vs task

### 参考资料

[技术峰会-ppt](https://ppt.baomitu.com/d/fbd4a5f5)

[google docs](https://docs.google.com/document/d/1BR94tJdZLsin5poeet0XoTW60M0SjvOJQttKT-JK8HI/view#)

[w3c 标准](https://w3c.github.io/paint-timing/#first-contentful-paint)

[使用 Paint Timing API 提高性能](https://zhuanlan.zhihu.com/p/30389490)

[ummaar devtool tip 解释](https://umaar.com/dev-tips/195-updated-paint-markers/)

[chrome performance 分析](https://www.jianshu.com/p/d8795ff8e079)

[网页性能分析](https://www.jianshu.com/p/d8795ff8e079)

[google 官网性能分析](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference)

[google 性能模型](https://developers.google.com/web/fundamentals/performance/rail)

[web.dev-lighthouse 官网](https://web.dev/first-contentful-paint/)

[2019 年前端性能优化总结](https://zhuanlan.zhihu.com/p/55431529)

[2019 年前端性能优化总结 1](https://github.com/xitu/gold-miner/blob/master/TODO1/front-end-performance-checklist-2019-pdf-pages-1.md)
