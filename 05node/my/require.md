require 先后加载顺序，写的非常好

04节，衍生



https://www.jianshu.com/p/7cf8fdd3d2bf

require一般只加载两种东西：

- 文件：require参数字符串中以 './' 或 '/' 开头，比如 `require('./students.js')`;
- 模块：require参数字符串没有 '/'，比如 `require('fs')`;

下面就这两种情况分别阐述。

**先加载文件**，优先级为：.js > .json >.node

没有文件加载文件夹：

- 先看有没有`package.json`，有的话，加载`package.json`里main属性指定的文件。
- 没有`package.json`，加载该目录下的`index.js`文件



注意，package优先级高于index.js



**require 加载模块**

比如 require('mytest')， 

先判断，模块是否是核心模块，比如fs、http 等, 如果是，返回

然后判断 当前 node_modules 文件夹下室友有该模块，有返回，没有从上层文件夹中寻找，如果到根文件夹都没有找到，还找不到就会抛出模块未找到的错误。





https://www.cnblogs.com/52cik/p/modules-path.html

## 核心模块

其实就是被编译到 node 内部的一些模块，在源码的 lib 目录下可以找到。例如 `require('http')` 的时候不论是否有其他同名模块，都直接返回 node 的核心模块，也就算最高优先级。

这些模块就是 node 官网文档目录列表里的那些模块。

## 文件模块

这个花样就多了，慢慢说吧。

### 模块后缀

node 默认支持 .js .json .node 后缀的模块，也就是说 require 的时候不需要写后缀名。例如 `require('./a')`，node 会先尝试当前目录下的 a.js 文件，如果有，就载入否则继续尝试 a.json, a.node 这些文件，如果都不存在，就会抛出模块未找到的错误。

当然这些模块后缀都是可以自己定义拓展的，比如 ejs 就拓展了个 .ejs 的后缀，支持直接 require 就得到了编译好的模块引擎了。

### 模块路径

以 '/', './' 或 '../' 开头的，都是指定路径加载。

模块以 '/' 为前缀，则表示绝对路径。例如，`require('/home/marco/foo.js')` 加载的是 /home/marco/foo.js 这个文件。

模块以 './' 为前缀，则路径是相对于当前文件的。也就是说，circle.js 必须和 foo.js 在同一目录下，require('./circle') 才能找到。

其实还一个特殊路径的模块加载，就是 node_modules 文件夹，这个要单独说了。

## 从 node_modules 目录中加载

如果模块不是以 '/', './' 或 '../' 开头的，那么 node 会从当前模块的父目录开始，尝试在它的 node_modules 文件夹里加载相应模块。如果没有找到，那么就再向上移动到父目录，直到到达顶层目录位置。

假如 /home/ry/projects/foo.js 调用了 `require('bar.js')` 那么node查找的位置依次为：

- /home/ry/projects/node_modules/bar.js
- /home/ry/node_modules/bar.js
- /home/node_modules/bar.js
- /node_modules/bar.js

如果都找不到，会去全局模块路径找，还找不到就会抛出模块未找到的错误。

## 目录模块

当一个模块功能多代码多的时候，不合适写到一个文件里，那这个时候就可以用目录当作模块使用了。有两种方法可以让一个目录作为 require 方式引入。官网说三种，其实吧 .js .node 看做两种了。

### index.js 入口

例如在 some-library 目录里有 index.js 或者 index.node 文件，那么 `require('./some-library')` 就将尝试加载下面的文件：

- ./some-library/index.js
- ./some-library/index.node

非常简单方便。

### package.json

还有一种方式可以指定入口文件，就是通过 package.json，下面是一个 package.json 文件的示例。

```json
{
  "name" : "some-library",
  "main" : "./src/some-library.js"
}
```

那么 `require('./some-library')` 就将会去加载 ./some-library/src/some-library.js。

## 全局模块

当以上方法找不到模块时，node 会去全局配置下寻找全局模块：

- $HOME/.node_modules
- $HOME/.node_libraries
- $PREFIX/lib/node

以及

- /usr/lib/node_modules

或者

- /usr/local/lib/node_modules

这些都没测试，我只知道我本地的全局模块路径是 /usr/local/lib/node_modules，是我本机 npm 安装的全局模块路径。

官网里还有一些奇葩的全局目录，我都没见过，算了不研究了。

