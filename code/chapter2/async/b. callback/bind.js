function LateBloomer() {
  }
  
  // 在 1 秒钟后声明 bloom
  LateBloomer.prototype.bloom = function() {
    console.log(1, this)
    setTimeout(this.declare.bind(this), 1000); // LateBloomer

    setTimeout(this.declare, 1000); //window

    setTimeout(()=>{
        console.log(3, this)  //LateBloomer
    })
    setTimeout(function(){
        console.log(4, this) // window
    })
  };
  
  LateBloomer.prototype.declare = function() {
    console.log(2, this);
  };
  
  var flower = new LateBloomer();
  flower.bloom();  // 一秒钟后, 调用 'declare' 方法
  