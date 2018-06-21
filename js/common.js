document.cookie="yan=ff; path=/js;"
// $.get("http://didu.local.com/app/yanyan/permission",function (s) {
//     console.log(s);
// })
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