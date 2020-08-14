
#### 7. 解构赋值

/*
    对象解构：变量名 和 属性名 要对应
    数组解构：变量名 和 值索引对应
*/

```js
let {a,c} = {a:123, b:456, c:789}
console.log(a, c)
```

####  8. 展开运算符

...

数组转成 ， 连接的

```js
// 展开运算符
let arr = [1,2,3,4,5];
let arr2 = ["a",...arr,"b","c"];
// 把 arr 中的数据放入 arr2 中，从 第 1 位开始排列
// ["a",1,2,3,4,5,"b","c"]
console.log(arr2);

// 剩余参数
let arr3 = [1,2,3,4,5];
let [a,...b] = arr3;
```

还能对象展开！之前都不知道

```js
let obj = {
    a: 1,
    b: 2
};
let obj2 = {
    ...obj,
    c: 3,
    d: 4
};
```

记得在写算法的时候，有解构赋值，解决arr修改
对象中也可以

```js
let obj = {
    a: 1,
    b: 2
};
let obj2 = {...obj}

obj.age = 123

let obj2 = {
    ...obj,
    c: 3,
    d: 4
};
```


####  map

map 的初始化，之前不知道，是二位数组

```js
let data = new Map([["leo",40],["zmouse",30],["reci",20]]);
data.set("刘伟",41);
data.delete("leo");
```

事实上，不仅仅是数组，任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构（详见《Iterator》一章）都可以当作Map构造函数的参数。
注意到了么，本身可遍历，而且每一项是一个双元素数组

```js
let data = new Map([{name:123}]); // 是错误的哦
```

#### 剩余参数

```js
let fn = (a,...arg)=>{
    //console.log(arguments);
    console.log(a,arg);
};

fn(1,2,3,4);

// 箭头函数本身没有不定参
// rest 参数 剩余参数
```


#### 箭头函数 this
// 箭头 this 指向，箭头函数定义时所在的作用域的this

```js
document.onclick = function(){
    console.log(this);  //document
    let fn = (a,...arg)=>{  
        console.log(this);  //document
    };
    fn();
};

document.onclick = function(){
    function fn() {
        console.log(this)  //window
    }
    fn();
};

document.onclick = function(){
    let fn = ()=>{
        console.log(this)  //document
    }
    fn();
};

let fn2 = function(){
    console.log(this)  //window
    fn = ()=>{
        console.log(this)  //window
    }
    fn()
}
fn2()
```

#### 参数默认值

```js
let fn = (nub=0,nub2=0)=>{
    console.log(nub+nub2);
}
fn();
```

### 数组新增方法

Array.from、Array.isArray、arr.find、findIndex、includes、flat

不常用的：Array.of

Array Array.of(element0[, element1[, ...[, elementN]]]) 将参数转成一个数组

参数：
    elementN 要放入数组中的数据

返回值：   
    新数组

#### 模板字符串

除了自己常用的  `${name}` 之外，还可以使用方法， 方法需要返回值

```js
let name = "LEO";
let age = 40;
let gender = function(){
    return "男"
};
let str = `姓名：${[1,2,3,4]}，
年龄：${age}岁，
性别：${gender()}`;
```

#### 对象的属性和方法

简写：

属性可以使用表达式


```js
let name = 'lala';
let obj = {
    a,
    b,
    c() {},
    [name]: 123
}
```

对象合并：

```js
//把后面的合并到前面的对象中
let obj1 = {
    a:1,
    b:2,
    c: 5
}
let obj2 = {
    c:3,
    d:4
}
Object.assign(obj1, obj2)
```