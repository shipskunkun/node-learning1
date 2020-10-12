// import { resolve } from "url";

// function test(){
// let p1 = new Promise(resolve => {
//     setTimeout(() => {
//         console.log(1111);
//         // cb();
//         resolve();
//     }, 1000)
// })

// p1.then((res) => {
//     setTimeout(() => {
//         console.log(2222);
//     }, 1000)
// })
// }
// function cb(){
//     setTimeout(() => {
//         console.log(2222);
//     }, 1000)
// }

async function test() {
  await  new Promise(resolve=>{
        setTimeout(() => {
            console.log(1111);
            // cb();
            resolve();
        }, 1000)
    })
    await new Promise(resolve=>{
        setTimeout(() => {
            console.log(2222);
            // cb();
            resolve();
        }, 1000)
    })
}
test();
