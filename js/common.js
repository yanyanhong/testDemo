document.cookie="yan=ff; path=/js;";//写cookie
document.cookie="aa=aa; path=/;";

/**
 * 输出hello
 * @param {string} dd - 输入人
 * @param {int} cc - hello
 */
function hello(dd,cc) {
    
}
/**
 * 副卡的
 */
$(function () {
    $.ajaxSetup({crossDomain: true, xhrFields: {withCredentials: true}});
    $.get("http://didu.local.com/activity/site?type=1&_=4343",function (s) {
        console.log(s);
        console.log("12344444");
    })
    console.log("fsdfs");
})

//dom ready
$(document).ready(function () {
    // alert("123");
    $("ul").on("click","li",function () {
        alert("12");
    })
    $("#hello").click(function () {
        $("ul").append("<li>123</li>")
    })
})
/**
 * hello  注册click事件
 * 副卡电话
 */
$("#hello").click(function () {
    alert(typeof $('#signBtn').attr('disabled'));
})