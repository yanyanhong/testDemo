document.cookie="yan=ff; path=/js;";
document.cookie="aa=aa; path=/;";
$(function () {
    $.ajaxSetup({crossDomain: true, xhrFields: {withCredentials: true}});
    $.get("http://didu.local.com/activity/site?type=1&_=4343",function (s) {
        console.log(s);
        console.log("12344444");
    })
    console.log("fsdfs");
})

$(document).ready(function () {
    // alert("123");
    $("ul").on("click","li",function () {
        alert("12");
    })
    $("#hello").click(function () {
        $("ul").append("<li>123</li>")
    })
})
$("#hello").click(function () {
    alert(typeof $('#signBtn').attr('disabled'));
})