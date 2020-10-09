/**
 * node index.js rock ,
 * process.argv[2] 是控制台输入的第三个参数的意思
 * 包含命令行参数的数组。第一个元素是'node'，第二个参数是JavaScript文件的名字，第三个参数是任意的命令行参数。
 */
 
var playerAction = process.argv[2];
console.log(process.argv,   playerAction);

if (playerAction != 'rock' && playerAction != 'paper' && playerAction != 'scissor') {
    console.log('请输入rock或paper或scissor')

} else {
    // 计算电脑出的东西
    var computerAction;
    var random = Math.random() * 3
    if (random < 1) {
        computerAction = 'rock'
        console.log('电脑出了石头')

    } else if (random > 2) {
        computerAction = 'scissor'
        console.log('电脑出了剪刀')

    } else {
        computerAction = 'paper'
        console.log('电脑出了布')
        
    }

    if (computerAction == playerAction) {
        console.log('平局')

    } else if (
        (computerAction == 'rock' && playerAction == 'scissor') ||
        (computerAction == 'scissor' && playerAction == 'paper') ||
        (computerAction == 'paper' && playerAction == 'rock')
    ) {
        console.log('你输了')

    } else {
        console.log('你赢了')
    }
}