//指定范围  1-4，3

//返回数组[[1,2],[1,3],[1,4]];


function test2(start,end,count){
    var arr = [];
    for(var i = 0;i<count;i++){
        var j = parseInt(Math.random()*(end-start+1)+start,10);
        var k = parseInt(Math.random()*(end-start+1)+start,10);
        var code = j+","+k;
        if(arr.indexOf(code) <= -1){
          arr.push(j+','+k);
        }else{
          i--;
        }
    }
    //console.log(arr);
    return arr.map(function(item){
      return item.split(',')
    });
}
var t0 = performance.now();
test2(1,100,1000);
var t1 = performance.now();
console.log("t1",t1-t0);

function test(start,end,count){
    var set = new Set();
    for(var i = 0;i<count;i++){
        var j = parseInt(Math.random()*(end-start+1)+start,10);
        var k = parseInt(Math.random()*(end-start+1)+start,10);
        var code = j+","+k;
        if(!set.has(code)){
          set.add(code);
        }else{
          i--;
        }
    }
    //console.log([...set]);
    return [...set].map(function(item){
      return item.split(',')
   });
}

var t2 = performance.now();
test(1,100,1000);
var t3 = performance.now();
console.log("t2",t3-t2);
