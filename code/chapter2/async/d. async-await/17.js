
/* 
知识点一：
打印出来的都是 promise 对象


console.log(async function () {
}())

console.log(function(){
  return new Promise(function(resolve, reject){
    resolve(1)
  })
}()) 



// 注意时间，先后执行顺序
async function getResult(){
    var content = await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(6)
        }, 500)
    })
    console.log(456, content)
    return 4
}
let r = getResult();

// setTimeout(()=>{
//     console.log(123, r)
// }, 400)

setTimeout(()=>{
  console.log(123, r)
}, 800)

*/

// 能被try catch捕获

async function getResult(){
  try{
    var content = await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject(new Error(8))
        }, 500)
    })
  }catch(e){
    console.log('error', e.message)
  }
  return 4
}
getResult();

// 这种不能被捕获
try{
  new Promise((resolve, reject)=>{
      setTimeout(()=>{
          reject(new Error(9))
      }, 500)
  })
}catch(e){
  console.log(e.message)
}