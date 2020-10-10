/**
 * promise的链式调用
 */

 /*
interview(1)
    .then(()=> {
        return interview(2);
    })
    .then(()=> {
        return interview(3);
    })
    .then(()=> {
        if (Math.random() > 0.1) {
            const error = new Error('keyboard')
            error.round = 'keyboard'
            throw error 
        }
    })
    .catch((err)=> {
        console.log('cry at ' + err.round)
    })
*/




(function() {
    var promise = interview();
    var promise2 = promise.then((res)=>{
        return new Promise(function(resolve, reject) {
            setTimeout(()=>{
                console.log(2)
                resolve('acc')
            }, 400)
        })
    })


    setTimeout(()=>{
        console.log(3)
        // console.log(promise)
        // console.log(promise2)
    }, 200)

    setTimeout(()=>{
        console.log(4)
        // console.log(promise)
        // console.log(promise2)
    }, 1000)


})()



function interview(round) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            // if (Math.random() < 0.2) {
            //     const error = new Error('failed');
            //     error.round = round;
            //     reject(error);
    
            // } else {
            //     resolve('success');
            // }
            console.log(0)
            resolve(111)
        }, 500)
    })
}