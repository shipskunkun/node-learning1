/**
 * try catch只能抓到一个调用堆栈内，即一个事件循环里的错误
 */

 /**
try {
    interview(function (err, res) {
        if (err) {
            console.log('cry')
            return;
        }
        console.log('smile')
    })

} catch (e) {
    console.log('cry')
}

function interview(callback) {
    setTimeout(() => {   
            throw new Error('fail');
    }, 500)
}
*/


try {
    interview(function (err, res) {
        if (err) {
            console.log('cry1')
            return;
        }
        console.log('smile')
    })

} catch (e) {
    console.log('cry2')
}

function interview(callback) {
    setTimeout(() => {  
        // callback(new Error('fail'))
        throw new Error('fail');
    }, 500)
}

function interview2(callback) {
    // callback(new Error('fail'))
    throw new Error('fail');
}