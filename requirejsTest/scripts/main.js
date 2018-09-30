requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts/libs',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        haha: '../haha',
        jquery:'jquery.min'
    }
});
requirejs(["jquery","hello","haha/util","haha/retfun"],function ($,hello,util,title) {
    console.log("hahah"+util.name);
    util.display();
    console.log(util.aa("hello yanyanhong"));
    $("#test").html("哈哈哈哈哈");
    //throw new Error("fd");
    console.log(title("你好啊啊啊咖啡======"))
    console.log(new Object());

    function People(name,sex) {
        this.name = name;
        this.sex = sex;
    }
    function Student(banji) {
        this.banji = banji;
        this.hasOwnProperty = function () {
            return false;
        }
    }
    Object.prototype.aa = "fd";
    Student.prototype = new People("yan","female");
    Student.prototype.constructor = Student;
    var jj = new Student("3班");
    for(var item in jj){
        console.log(item+"--"+jj[item]);
    }
    // for(var item of jj){
    //
    // }
    console.log(jj);
    console.log(jj.hasOwnProperty("name"));
    console.log(jj.hasOwnProperty("banji"));
    console.log(Object.hasOwnProperty.call(jj,"banji"));
})