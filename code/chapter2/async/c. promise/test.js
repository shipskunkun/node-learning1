let promise = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log(1)
        resolve(1)
    }, 5000)
})
let promise2 = new Promise(function(resolve, reject){
    console.log(3)
    resolve(1)
})
promise2.then(()=>{
    console.log(4)
    setTimeout(()=>{
        console.log(5)
    }, 1000)
})
setTimeout(()=>{
    console.log(2)
}, 0)