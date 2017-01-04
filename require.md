## 前端模块化

### 为什么要前端模块化？

* 将公共部分功能进行封装实现复用
* 灵活解决依赖
* 解决全局变量污染

### 如何实现前端模块化？

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <!-- 通过标签加载js是不能做到模块化的 -->
    <script src = './js/jquery.min.js'></script>
    <script src = './js/jquery.cookie.js'></script>
</body>
</html>
```

* javascript 语言在浏览器端本身不具备模块化技术的，需要自己去封装来实现模块的定义以及加载，其实现遵照一定的规范（AMD）（common.JS）；
* commonJS 是一个模块化的规范，随着实践分为两种：
    - 一种是NodeJS；（CMD）
    - 另外一种是浏览端的实现 requireJS；（AMD）
* CMD（Common Module Define）模块定义
* AMD（Async Module Define）异步模块定义

### 前端模块化使用requireJS
> requireJS 本身就是一个js文件，它按照AMD规范来实现模块的定义和加载规则；

### 定义模块
> 通过define()方法来定义一个模块；

* 基本定义
```js
//定义一个模块
define(function(){
    alert('hello');
    });
```

* 依赖注入
```js
// 定义模块，使用依赖注入解决依赖
define(['./a', './b', './c'], function (a, b, c) {

    console.log( a + '现在是:' + b + '今天的任务是' + c.join('、'));

});
```

* 返回值
    - 定义模块时，可以有返回值，但不是必须的，返回数据类型没有任何约束，通常返回

### 加载模块
> 通过require()方法来加载一个模块；

* 基本使用
```html
<script src = './lib/require.js'></script>
<script>
    //加载一个模块
    require(['./js/a']);
</script>

```

* 依赖注入


#### 入口文件

- 通过为引入requireJS 的标签加入data-main属性，其属性值为某一个模块的路径，此模块可以自动被加载并执行。

#### 加载路径
- requireJS 加载模块时，路径是遵照一些规则的，分成以下几种情况：
    + 当没有入口文件时，加载路径以入requireJS的页面为准；
    + 当存在入口文件时，加载路径以入口文件为准；
    + 通过配置可以自定义路径；

#### 配置项
```html
<script>
    require.config({
        baseUrl:'./src'
    });
    require(['a']);
</script>
```





