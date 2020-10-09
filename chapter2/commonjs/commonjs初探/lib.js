console.log('this is module');

exports.geekbang = { 'hello': 'haha' }

exports.tencent = function () {
    console.log('good')
}

setTimeout(function(){
	console.log(exports)
}, 2000)

module.exports = function() {
    console.log(123)
}
